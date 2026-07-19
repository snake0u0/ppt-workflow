/* 공용 덱 네비게이션 — 덱 HTML <head> 에 자동 주입(route.ts / gen-decks.mjs).
 * 모든 덱이 공통으로 ArrowLeft/ArrowRight keydown 으로 슬라이드를 넘기므로,
 * 스크롤 / 레터박스 좌우 버튼 / 화면 반쪽 클릭을 그 키 이벤트로 변환해
 * 각 덱의 자체 이동 로직을 그대로 재사용한다(nav dots·영상 정지 등이 자동으로 일관).
 * (lightbox.js 뒤에 로드되어, 이미지 클릭은 라이트박스가 먼저 처리한다.) */
(function () {
  if (window.__deckNav) return;
  window.__deckNav = true;

  function hasSlides() {
    return document.querySelector(".slide") != null;
  }
  function lightboxOpen() {
    return document.querySelector(".lb-overlay.open") != null;
  }

  // 덱 공통 동작(← / →)을 합성 키 이벤트로 재사용. dir: 1=다음, -1=이전
  function go(dir) {
    if (lightboxOpen()) return;
    var key = dir > 0 ? "ArrowRight" : "ArrowLeft";
    document.dispatchEvent(new KeyboardEvent("keydown", { key: key, bubbles: true }));
  }

  // 덱이 세로 스크롤형(모든 슬라이드를 쌓아두고 실제 스크롤)이면 네이티브 스크롤이
  // 이미 "스크롤로 훑기"를 담당하므로 휠을 가로채지 않는다. 한 장씩 보여주는
  // active-toggle 형(overflow:hidden)에서만 휠을 슬라이드 이동으로 변환한다.
  function nativelyScrollable() {
    var el = document.scrollingElement || document.documentElement;
    return el.scrollHeight - el.clientHeight > 40;
  }

  // ---- 스크롤로 페이지 이동 (부드럽게 훑기: 스크롤 양에 따라 한 장씩) ----
  var acc = 0,
    lastNav = 0;
  window.addEventListener(
    "wheel",
    function (e) {
      if (!hasSlides() || nativelyScrollable()) return;
      e.preventDefault();
      var now = Date.now();
      if (now - lastNav > 250) acc = 0; // 이전 스크롤과 끊기면 누적 리셋
      acc += e.deltaY;
      if (Math.abs(acc) < 50) return; // 미세한 움직임 무시
      if (now - lastNav < 90) {
        acc = 0;
        return;
      } // 초당 최대 ~11장으로 제한(과속 방지)
      go(acc > 0 ? 1 : -1);
      acc = 0;
      lastNav = now;
    },
    { passive: false },
  );

  // ---- 화면 왼쪽 절반 클릭 = 이전, 오른쪽 절반 = 다음 ----
  // capture 단계에서 처리 → 덱 자체 "아무 데나 클릭 = 다음"을 stopPropagation 으로 대체.
  document.addEventListener(
    "click",
    function (e) {
      if (!hasSlides() || lightboxOpen()) return;
      var t = e.target;
      // 링크·버튼·영상·폼 요소·nav dots·자체 버튼은 각자 동작에 맡긴다
      if (t.closest("a, button, video, input, textarea, select, label, .navdots, #deck-nav-ui"))
        return;
      // 이미지는 라이트박스 몫 — 슬라이드는 넘기지 않음
      if (t.closest("img")) {
        e.stopPropagation();
        return;
      }
      // 텍스트 선택 중이면 이동하지 않음(덱 자체 넘김도 억제)
      var sel = window.getSelection && window.getSelection();
      if (sel && String(sel).length > 0) {
        e.stopPropagation();
        return;
      }
      e.stopPropagation();
      go(e.clientX < window.innerWidth / 2 ? -1 : 1);
    },
    true,
  );

  // ---- 레터박스 좌/우 화살표 버튼 (항상 은은하게 표시) ----
  function buildButtons() {
    var style = document.createElement("style");
    style.textContent =
      "#deck-nav-ui{position:fixed;inset:0;pointer-events:none;z-index:60}" +
      ".deck-nav-btn{position:absolute;top:50%;transform:translateY(-50%);pointer-events:auto;" +
      "width:48px;height:72px;border:0;background:transparent;cursor:pointer;" +
      "display:flex;align-items:center;justify-content:center;" +
      "color:rgba(255,255,255,.78);transition:color .15s ease;-webkit-tap-highlight-color:transparent}" +
      ".deck-nav-btn:hover{color:#fff}" +
      ".deck-nav-btn svg{width:26px;height:26px;display:block;filter:drop-shadow(0 1px 3px rgba(0,0,0,.55))}" +
      ".deck-nav-btn--prev{left:8px}.deck-nav-btn--next{right:8px}" +
      "@media print{#deck-nav-ui{display:none!important}}" +
      // 전체화면(iframe이 화면을 꽉 채운 상태)에선 화살표 숨김
      ".deck-nav-fs #deck-nav-ui{display:none!important}";
    document.head.appendChild(style);

    var chevL =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
    var chevR =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';

    var ui = document.createElement("div");
    ui.id = "deck-nav-ui";
    var prev = document.createElement("button");
    prev.className = "deck-nav-btn deck-nav-btn--prev";
    prev.setAttribute("aria-label", "이전 슬라이드");
    prev.innerHTML = chevL;
    var next = document.createElement("button");
    next.className = "deck-nav-btn deck-nav-btn--next";
    next.setAttribute("aria-label", "다음 슬라이드");
    next.innerHTML = chevR;
    function bind(btn, dir) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        go(dir);
      });
    }
    bind(prev, -1);
    bind(next, 1);
    ui.appendChild(prev);
    ui.appendChild(next);
    document.body.appendChild(ui);
  }

  // 전체화면(전체화면 버튼 → 뷰어가 iframe 을 Fullscreen API 로 띄움)에선 화살표를 숨긴다.
  // iframe 자신의 document.fullscreenElement 는 null 이므로, same-origin 부모 문서에서
  // 이 iframe(window.frameElement)이 전체화면 대상인지로 정확히 판별한다.
  function isFullscreen() {
    try {
      if (window.frameElement && window.parent && window.parent.document) {
        return window.parent.document.fullscreenElement === window.frameElement;
      }
    } catch (e) {
      /* cross-origin 등 접근 불가 시 아래로 폴백 */
    }
    return !!document.fullscreenElement; // 단독으로 열린 경우
  }
  function syncFullscreen() {
    document.documentElement.classList.toggle("deck-nav-fs", isFullscreen());
  }
  document.addEventListener("fullscreenchange", syncFullscreen);
  try {
    // 전체화면 이벤트는 전체화면 요소를 소유한 "부모" 문서에서 발생한다
    if (window.frameElement && window.parent && window.parent.document) {
      window.parent.document.addEventListener("fullscreenchange", syncFullscreen);
    }
  } catch (e) {
    /* ignore */
  }

  function init() {
    if (!hasSlides()) return;
    buildButtons();
    syncFullscreen();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

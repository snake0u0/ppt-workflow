/* 공용 이미지 라이트박스 — 덱 HTML <head> 에 자동 주입(route.ts / gen-decks.mjs).
 * 덱 폴더의 assets/ 안 이미지(<img src=".../assets/...">)를 클릭하면
 * 화면 중앙에 딤 배경과 함께 크게 띄운다. 공유 자산(/shared/...)은 대상 아님. */
(function () {
  if (window.__deckLightbox) return;
  window.__deckLightbox = true;

  // assets/ 폴더 안 이미지인지 (resolved pathname 에 /assets/ 포함)
  function isZoomable(img) {
    if (!img || img.tagName !== "IMG") return false;
    try {
      return new URL(img.currentSrc || img.src, location.href).pathname.includes("/assets/");
    } catch {
      return false;
    }
  }

  var style = document.createElement("style");
  style.textContent =
    "img.lb-zoomable{cursor:zoom-in}" +
    ".lb-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;" +
    "justify-content:center;padding:2.5vmin;background:rgba(10,12,20,.86);opacity:0;" +
    "transition:opacity .16s ease;cursor:zoom-out;-webkit-tap-highlight-color:transparent}" +
    ".lb-overlay.open{opacity:1}" +
    ".lb-overlay img{max-width:95vw;max-height:95vh;object-fit:contain;" +
    "box-shadow:0 10px 40px rgba(0,0,0,.5);border-radius:2px}" +
    ".lb-close{position:fixed;top:16px;right:20px;width:40px;height:40px;border:0;cursor:pointer;" +
    "background:rgba(255,255,255,.12);color:#fff;font-size:26px;line-height:40px;border-radius:999px}" +
    ".lb-close:hover{background:rgba(255,255,255,.22)}" +
    "@media print{.lb-overlay{display:none!important}}";
  (document.head || document.documentElement).appendChild(style);

  var overlay = document.createElement("div");
  overlay.className = "lb-overlay";
  var big = document.createElement("img");
  var close = document.createElement("button");
  close.className = "lb-close";
  close.setAttribute("aria-label", "닫기");
  close.textContent = "×";
  overlay.appendChild(big);
  overlay.appendChild(close);

  function open(img) {
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || "";
    if (!overlay.parentNode) document.body.appendChild(overlay);
    requestAnimationFrame(function () { overlay.classList.add("open"); });
  }
  function hide() {
    overlay.classList.remove("open");
    setTimeout(function () { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); big.src = ""; }, 180);
  }

  // 이미지 클릭 → 라이트박스. capture 단계에서 잡아 덱의 슬라이드 넘김 클릭을 막는다.
  document.addEventListener("click", function (e) {
    var img = e.target;
    if (isZoomable(img)) {
      e.preventDefault();
      e.stopPropagation();
      open(img);
    }
  }, true);

  overlay.addEventListener("click", hide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      e.stopPropagation();
      hide();
    }
  }, true);

  // 로드 시점의 이미지에 zoom-in 커서 표시(정적 덱 기준). 클릭 판정은 위 delegation 이 담당.
  function mark() {
    var imgs = document.querySelectorAll("img");
    for (var i = 0; i < imgs.length; i++) {
      if (isZoomable(imgs[i])) imgs[i].classList.add("lb-zoomable");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mark);
  } else {
    mark();
  }
})();

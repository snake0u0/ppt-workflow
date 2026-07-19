"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const EVENT_LABEL: Record<string, string> = {
  lab: "랩미팅",
  labmeeting: "랩미팅",
  class: "수업/세미나",
  contest: "공모전",
};

export type GalleryItem = {
  slug: string;
  title: string;
  date: string | null;
  event: string | null;
};

// LP 크레이트 배치: 카드들이 뒤로 기대어 쌓여 있고(o>0), 세로 스크롤로 앞 카드(o<0)가
// 앞으로 넘어가며 아래로 떨어진다. transform-origin 은 카드 하단(레코드 밑면) 기준.
function crateStyle(o: number, i: number) {
  const zi = 200 - Math.round(o * 20);
  if (o >= 0) {
    // 크레이트 안: 위·뒤로 기대어 쌓임 (뒤 카드 윗부분이 계단처럼 보이도록 y 를 크게)
    const near = Math.min(o, 1);
    const far = Math.max(o - 1, 0);
    const y = -(near * 128 + far * 62);
    const z = -(near * 130 + far * 120);
    const rx = near * 22 + far * 2;
    const rz = (((i * 37) % 5) - 2) * 0.8 * near; // 뒤 카드일수록 살짝 비뚤게(크레이트 손맛)
    const scale = 1 - near * 0.04 - far * 0.03;
    const bright = Math.max(1 - near * 0.16 - far * 0.1, 0.4);
    return {
      transform: `translate(-50%, -50%) translateY(${y.toFixed(1)}px) translateZ(${z.toFixed(1)}px) rotateX(${rx.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
      filter: `brightness(${bright.toFixed(3)})`,
      zIndex: zi,
      opacity: o > 4.3 ? 0 : 1,
    };
  }
  // 이미 넘긴 카드: 앞으로 기울며 아래로 떨어지고 사라짐
  const a = -o;
  const y = a * 280;
  const z = a * 150;
  const rx = -a * 56;
  const scale = 1 + a * 0.04;
  return {
    transform: `translate(-50%, -50%) translateY(${y.toFixed(1)}px) translateZ(${z.toFixed(1)}px) rotateX(${rx.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
    filter: "brightness(1)",
    zIndex: zi,
    opacity: Math.max(1 - a * 1.2, 0),
  };
}

export default function HomeGallery({ items }: { items: GalleryItem[] }) {
  const n = items.length;
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const pos = useRef(0);
  const target = useRef(0);
  const raf = useRef(0);
  const reduced = useRef(false);
  const dragMoved = useRef(false);
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);

  const clamp = (v: number) => Math.max(0, Math.min(n - 1, v));

  function apply() {
    const p = pos.current;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const st = crateStyle(i - p, i);
      el.style.transform = st.transform;
      el.style.filter = st.filter;
      el.style.zIndex = String(st.zIndex);
      el.style.opacity = String(st.opacity);
      el.style.visibility = st.opacity === 0 ? "hidden" : "visible";
      el.classList.toggle("is-front", i === Math.round(p));
    });
    const idx = clamp(Math.round(p));
    if (idx !== currentRef.current) {
      currentRef.current = idx;
      setCurrent(idx);
    }
  }

  function tick() {
    const d = target.current - pos.current;
    if (Math.abs(d) < 0.0008) {
      pos.current = target.current;
      apply();
      raf.current = 0;
      return;
    }
    pos.current += d * (reduced.current ? 1 : 0.14);
    apply();
    raf.current = requestAnimationFrame(tick);
  }
  function kick() {
    if (!raf.current) raf.current = requestAnimationFrame(tick);
  }
  function goTo(t: number) {
    target.current = clamp(t);
    kick();
  }

  useLayoutEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    apply();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let snapT: ReturnType<typeof setTimeout>;

    // 세로 스크롤 = 크레이트 뒤지기 (아래로 스크롤 → 앞 카드가 넘어가고 다음 장)
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target.current = clamp(target.current + e.deltaY * 0.0035);
      kick();
      clearTimeout(snapT);
      snapT = setTimeout(() => goTo(Math.round(target.current)), 130);
    };

    let down = false;
    let startY = 0;
    let startT = 0;
    const onDown = (e: PointerEvent) => {
      down = true;
      dragMoved.current = false;
      startY = e.clientY;
      startT = target.current;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dy = e.clientY - startY;
      if (!dragMoved.current && Math.abs(dy) > 5) {
        dragMoved.current = true;
        stage.classList.add("is-grabbing");
        stage.setPointerCapture(e.pointerId);
      }
      if (!dragMoved.current) return;
      target.current = clamp(startT - dy / 200); // 위로 끌면 다음 장
      kick();
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      stage.classList.remove("is-grabbing");
      goTo(Math.round(target.current));
      setTimeout(() => (dragMoved.current = false), 0);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); goTo(Math.round(target.current) + 1); }
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); goTo(Math.round(target.current) - 1); }
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(snapT);
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
      window.removeEventListener("keydown", onKey);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  function onCardClick(e: React.MouseEvent, i: number) {
    if (dragMoved.current) {
      e.preventDefault();
      return;
    }
    if (i !== Math.round(target.current)) {
      e.preventDefault();
      goTo(i);
    }
  }

  const cur = items[current];

  return (
    <div className="crate">
      {/* 왼쪽: 포스터 타이포 패널 */}
      <aside className="crate-side">
        <p className="crate-side__eyebrow">
          PPT&nbsp;Archive
          {/* 현재 발표의 순번(오래된 것=01, 최신=n) */}
          <span className="crate-side__eyebrow-num">{String(n - current).padStart(2, "0")}</span>
        </p>
        <div className="crate-side__info" key={current}>
          <h1 className="crate-side__title">{cur.title}</h1>
          <p className="crate-side__meta">
            {cur.date && <span className="chip chip--date">{cur.date}</span>}
            {cur.event && <span className="chip chip--event">{EVENT_LABEL[cur.event] ?? cur.event}</span>}
          </p>
          <a className="crate-side__open" href={`/view/${cur.slug}`}>
            발표 열기 <span aria-hidden>↗</span>
          </a>
        </div>
        <p className="crate-side__hint" aria-hidden>
          Scroll to dig ↓
        </p>
      </aside>

      {/* 오른쪽: LP 크레이트 */}
      <div className="crate-stage" ref={stageRef}>
        <span className="crate-deco crate-deco--ring" aria-hidden />
        <span className="crate-deco crate-deco--dots" aria-hidden />
        <span className="crate-deco crate-deco--sun" aria-hidden />
        <div className="crate-track">
          {items.map((p, i) => {
            const st = crateStyle(i - 0, i);
            return (
              <a
                key={p.slug}
                href={`/view/${p.slug}`}
                className={`crate-card${i === 0 ? " is-front" : ""}`}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  transform: st.transform,
                  filter: st.filter,
                  zIndex: st.zIndex,
                  opacity: st.opacity,
                  visibility: st.opacity === 0 ? "hidden" : "visible",
                }}
                onClick={(e) => onCardClick(e, i)}
                aria-label={p.title}
                draggable={false}
              >
                {/* 연대순 번호: 목록은 최신순이므로 맨 앞(최신)=n, 가장 오래된 것=01 */}
                <span className="crate-card__no" aria-hidden>
                  {String(n - i).padStart(2, "0")}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="crate-card__img" src={`/thumbs/${p.slug}.webp`} alt={p.title} draggable={false} />
              </a>
            );
          })}
        </div>
      </div>

      {/* 하단: 검정 마퀴 바 + 진행 + 카운터 */}
      <footer className="crate-bar">
        <div className="crate-bar__marquee" aria-hidden>
          {/* -50% 루프가 넓은 화면에서도 끊기지 않게 충분히 반복 */}
          <span>
            {Array.from({ length: 10 })
              .map(() => "SCROLL TO DIG ✦ 발표 아카이브 ✦ ")
              .join("")}
          </span>
        </div>
        <span className="crate-bar__progress" aria-hidden>
          <span className="crate-bar__fill" style={{ width: `${n > 1 ? (current / (n - 1)) * 100 : 100}%` }} />
        </span>
        <span className="crate-bar__count">
          {String(current + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </footer>
    </div>
  );
}

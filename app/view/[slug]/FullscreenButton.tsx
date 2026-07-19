"use client";

// 발표 iframe 만 Fullscreen API 로 전체화면 → 상단 바 없이 슬라이드만 표시.
// (F11 브라우저 전체화면은 페이지 전체라 바가 남지만, 이 버튼은 iframe 만 띄운다.)
type FsEl = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

export default function FullscreenButton({ targetId }: { targetId: string }) {
  function enter() {
    const el = document.getElementById(targetId) as FsEl | null;
    if (!el) return;
    const req = el.requestFullscreen ?? el.webkitRequestFullscreen;
    if (!req) return;
    Promise.resolve(req.call(el))
      .catch(() => {})
      .finally(() => (el as HTMLIFrameElement).contentWindow?.focus());
  }

  return (
    <button type="button" className="viewer__fs" onClick={enter}>
      전체화면
    </button>
  );
}

"use client";

// 덱 iframe 만 인쇄 → 브라우저 "PDF로 저장". 덱의 @media print(16:9=1페이지)가 페이지 분할 담당.
export default function PrintButton({ targetId }: { targetId: string }) {
  function handlePrint() {
    const frame = document.getElementById(targetId) as HTMLIFrameElement | null;
    const win = frame?.contentWindow;
    if (!win) return;
    win.focus();
    win.print();
  }
  return (
    <button type="button" className="viewer__pdf" onClick={handlePrint}>
      PDF
    </button>
  );
}

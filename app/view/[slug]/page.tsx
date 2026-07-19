import { notFound } from "next/navigation";
import { getPresentations, presentationExists, readMeta } from "@/lib/presentations";
import PrintButton from "./PrintButton";
import FullscreenButton from "./FullscreenButton";

export async function generateStaticParams() {
  const items = await getPresentations();
  return items.map((p) => ({ slug: p.slug }));
}

export default async function ViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!(await presentationExists(slug))) notFound();
  const meta = await readMeta(slug);

  // prod: 빌드 시 public/decks/ 로 복사된 정적 파일(CDN·영상 Range 지원).
  // dev: /p 라우트가 디스크에서 실시간 서빙(작성 중 즉시 반영).
  const src =
    process.env.NODE_ENV === "production"
      ? `/decks/${slug}/index.html`
      : `/p/${slug}/index.html`;

  return (
    <div className="viewer">
      <div className="viewer__bar">
        <a className="viewer__back" href="/">
          ← 목록
        </a>
        <span className="viewer__title">{meta.title}</span>
        <span className="viewer__spacer" />
        <FullscreenButton targetId="deck-frame" />
        <PrintButton targetId="deck-frame" />
      </div>
      <iframe
        id="deck-frame"
        className="viewer__frame"
        src={src}
        title={meta.title}
      />
    </div>
  );
}

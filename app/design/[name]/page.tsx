import { notFound } from "next/navigation";
import { marked } from "marked";
import { listGuides, readGuide } from "@/lib/design-guides";
import SiteHeader from "../../components/SiteHeader";

export async function generateStaticParams() {
  const guides = await listGuides();
  return guides.map((g) => ({ name: g.name }));
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const md = await readGuide(name);
  if (md == null) notFound();
  const html = await marked.parse(md);

  return (
    <div className="pop-page">
      <SiteHeader nav={<a href="/design">← 가이드 목록</a>} />
      <main>
        <div className="container container--narrow">
          <article
            className="markdown-body sheet"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
    </div>
  );
}

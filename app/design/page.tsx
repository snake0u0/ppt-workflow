import { listGuides } from "@/lib/design-guides";
import SiteHeader from "../components/SiteHeader";

export default async function DesignIndexPage() {
  const guides = await listGuides();

  return (
    <div className="pop-page">
      <SiteHeader nav={<a href="/">목록</a>} />
      <main className="container">
        <div className="guide-hero">
          <p className="guide-hero__eyebrow">
            Design&nbsp;Guide
            <span className="guide-hero__eyebrow-num">
              {String(guides.length).padStart(2, "0")}
            </span>
          </p>
          <h1 className="guide-hero__title">디자인 가이드</h1>
          <p className="guide-hero__sub">
            새 발표를 만들 때{" "}
            <code className="chip">npm run new -- &lt;slug&gt; &lt;theme&gt;</code> 의 테마로
            사용합니다.
          </p>
        </div>
        <ul className="guide-grid">
          {guides.map((g) => (
            <li key={g.name}>
              <a className="guide-card" href={`/design/${g.name}`}>
                <div
                  className="guide-card__swatch"
                  style={{ background: g.bg ?? "#eee" }}
                >
                  <span
                    className="guide-card__dot"
                    style={{ background: g.accent ?? "#999" }}
                  />
                </div>
                <div className="guide-card__name">{g.title}</div>
                <div className="guide-card__meta">
                  <code className="chip">{g.name}</code>
                  {g.font && <span className="chip">{g.font}</span>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

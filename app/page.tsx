import { getPresentations } from "@/lib/presentations";
import HomeGallery from "./HomeGallery";
import SiteHeader from "./components/SiteHeader";

export default async function HomePage() {
  const items = await getPresentations();

  return (
    <div className="pop-page">
      <SiteHeader
        nav={
          <>
            <a href="/design">디자인 가이드</a>
            <form action="/api/logout" method="post">
              <button className="linkbtn" type="submit">
                로그아웃
              </button>
            </form>
          </>
        }
      />

      {items.length === 0 ? (
        <main className="container">
          <div className="empty">
            <h2>아직 발표가 없습니다</h2>
            <p>
              <code>npm run new &lt;slug&gt;</code> 로 새 발표를 만들어 보세요.
            </p>
          </div>
        </main>
      ) : (
        <main className="pop-main">
          <HomeGallery items={items} />
        </main>
      )}
    </div>
  );
}

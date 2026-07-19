export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const sp = await searchParams;
  const from = typeof sp.from === "string" && sp.from.startsWith("/") ? sp.from : "/";
  const hasError = sp.error != null;

  return (
    <main className="login pop-page">
      <form className="login__card sheet" action="/api/login" method="post">
        <div className="login__brand">ppt-view</div>
        <p className="login__sub">로그인이 필요합니다</p>
        <input type="hidden" name="from" value={from} />

        <label className="login__label">
          아이디
          <input name="id" autoComplete="username" required autoFocus />
        </label>
        <label className="login__label">
          비밀번호
          <input name="password" type="password" autoComplete="current-password" required />
        </label>

        {hasError && (
          <p className="login__err">아이디 또는 비밀번호가 올바르지 않습니다.</p>
        )}

        <button className="btn-pop login__btn" type="submit">
          로그인
        </button>
      </form>
    </main>
  );
}

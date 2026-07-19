export default function SiteHeader({ nav }: { nav: React.ReactNode }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="/">
          ppt-view
        </a>
        <nav className="site-header__nav">{nav}</nav>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ppt-view",
  description: "내 HTML 발표 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {/* self-host 폰트(Paperlogy/Pretendard/Inter) — React 가 head 로 hoist */}
        <link rel="stylesheet" href="/shared/fonts.css" />
        {children}
      </body>
    </html>
  );
}

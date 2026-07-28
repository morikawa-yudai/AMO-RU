import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社アモールトーワ | やさしさが、まちの未来をつくる。",
  description:
    "地域とともに歩み、人と暮らしに寄り添う株式会社アモールトーワの公式サイトです。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

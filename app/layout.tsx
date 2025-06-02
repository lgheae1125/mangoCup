import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "망고 이상형 월드컵",
  description: "많은 고민 줄여서 망고라고 함(인싸어)",
  icons: {
    icon: "/images/logo-of-mango.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Suspense fallback={<div>로딩 중...</div>}>
        <body className={`antialiased bg-gray-100 overflow-x-hidden`}>
          {children}
        </body>
      </Suspense>
    </html>
  );
}

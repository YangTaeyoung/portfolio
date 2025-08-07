import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "양태영 | 풀스택 엔지니어 포트폴리오",
  description: "4년차 풀스택 엔지니어 양태영의 포트폴리오입니다. Java, Python, Go 현업 경험과 클라우드 기반 서비스 개발 전문가입니다.",
  keywords: "양태영, 풀스택 개발자, 백엔드 개발자, Go, Java, Python, Spring Boot, React, DevOps",
  authors: [{ name: "양태영" }],
  openGraph: {
    title: "양태영 | 풀스택 엔지니어 포트폴리오",
    description: "4년차 풀스택 엔지니어 양태영의 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

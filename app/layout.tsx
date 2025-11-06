import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Siddhartha Shankar Dhar - Portfolio",
  description: "AI/ML Engineer Portfolio - Software Engineer passionate about building efficient and scalable solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

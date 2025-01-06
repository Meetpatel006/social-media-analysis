import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { Providers } from './providers'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Social Media Analysis Dashboard",
  description: "A comprehensive dashboard for social media analytics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="antialiased bg-background font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

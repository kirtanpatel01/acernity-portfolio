import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", '700', "800"]
})

export const metadata: Metadata = {
  title: "Acernity - Portfolio",
  description: "Freelance tailored personal portfolio design t for developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-700`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

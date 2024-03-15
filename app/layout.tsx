import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import logo from "../public/tempLogo.png";
import { Background } from "./backgroundImage";
import Image from "next/image";

const font = Barlow_Condensed({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Meditation Timer",
  description: "A customizable and simple timer for your meditations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header className="min-h-20 bg-black">
          <Image src={logo} alt="logo" height={60} />
        </header>
        <Background />
        {children}
      </body>
    </html>
  );
}

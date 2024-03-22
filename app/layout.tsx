import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import logo from "../public/tempLogo.png";
import { Background } from "./backgroundImage";
import Image from "next/image";

const font = Barlow({
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
        <header>
          <div className="logo-container h-[15vh] min-h-[120px] p-8">
            <Image
              src={logo}
              alt="logo"
              style={{ height: "100%", width: "auto" }}
            />
          </div>
        </header>
        <Background />
        {children}
      </body>
    </html>
  );
}

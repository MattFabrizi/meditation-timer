import type { Metadata } from "next";
import "./globals.css";
import logo from "../public/tempLogo.png";
import Image from "next/image";
import {Space_Grotesk} from "next/font/google";

export const metadata: Metadata = {
  title: "Online Meditation Timer",
  description: "A customizable and simple timer for your meditations",
};

const fontFamily = Space_Grotesk({
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontFamily.className}>
      <body className="bg-bg-image bg-cover bg-no-repeat min-h-dvh flex flex-col">
        <header className="p-3 bg-white bg-opacity-40">
          <div className="logo-container max-w-16 m-auto">
            <Image
              src={logo}
              alt="logo"
            /> 
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

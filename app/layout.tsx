import type { Metadata } from "next";
import "./globals.css";
import logo from "../public/meditationTimerOnline.png";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Free Online Meditation Timer: Enhance Your Mindfulness Practice",
  description:
    "Enhance your mindfulness practice with our free online meditation timer. Achieve serenity and focus using customizable intervals and the option to select your preferred Tibetan bell sounds.",
};

const fontFamily = Space_Grotesk({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontFamily.className}>
      <body className="flex min-h-dvh flex-col bg-bg-image bg-cover bg-no-repeat">
        <header className="bg-white bg-opacity-40 p-3">
          <div className="logo-container m-auto max-w-16">
            <Image src={logo} alt="logo" />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

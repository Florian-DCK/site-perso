import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from 'next/font/google';
import AnimatedNavbar from "@/components/Navbar";
import DecorationAscii from "@/components/DecorationAsciiAscii";

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Donckers Florian",
  description: "Portfolio of Donckers Florian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={lexend.className}>
      <body
        className={`antialiased flex items-center justify-center bg-gradient-to-br from-background to-[#3c3a49]`}
      >
        <AnimatedNavbar />

        {children}

        <DecorationAscii />
      </body>
    </html>
  );
}

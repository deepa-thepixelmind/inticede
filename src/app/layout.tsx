import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Custom Grown Font
const grownFont = localFont({
  src: '/fonts/GrownPersonal.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-Grown',
});

const gloock = localFont({
  src: '/fonts/Gloock-Regular.ttf',
  display: 'swap',
  weight: '400',
  style: 'normal',
  variable: '--font-Gloock',
});

// Montserrat Alternates from Google Fonts
const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-Montserrat',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserratAlternates.variable} ${grownFont.variable} ${gloock.variable}`}>
      <body>
        <Navbar />
        <div className="bg-white">
          {children}
        </div>
         <div className="bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}

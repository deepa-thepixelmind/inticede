import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/Hero";
import About from "@/app/components/About";
import ExpertisePage  from "@/app/components/Expertise";
import BrandLogosViewport from "@/app/components/Viewport";
import TrustedSection from "@/app/components/Trust";
import RawMaterialSection from "@/app/components/Explore";
import FinishedGarmentsSection from "./components/Garments";
import EventsSection from "@/app/components/Event";
import ConnectWorkSection from "@/app/components/Connect";
import { Inter } from 'next/font/google';




const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

    
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <ExpertisePage />
      <BrandLogosViewport />
      <TrustedSection/>
      <RawMaterialSection/>
      <FinishedGarmentsSection/>
      <EventsSection/>
      <ConnectWorkSection/>
    </div>
  );
}

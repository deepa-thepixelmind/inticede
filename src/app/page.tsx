import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/Hero";
import About from "@/app/components/About";
import ExpertisePage  from "@/app/components/Expertise";
import BrandLogosViewport from "@/app/components/Viewport";

    
export default function Home() {
  return (
    <div className="bg-white min-h-screen px-[38px] sm:px-[38px] md:px-[38px]">
      <Navbar />
      <HeroSection />
      <About />
      <ExpertisePage />
      <BrandLogosViewport />
    </div>
  );
}

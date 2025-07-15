import HeroSection from "@/app/components/Hero";
import About from "@/app/components/About";
import ExpertisePage  from "@/app/components/Expertise";
import BrandLogosViewport from "@/app/components/Viewport";
import TrustedSection from "@/app/components/Trust";
import RawMaterialSection from "@/app/components/Explore";
import FinishedGarmentsSection from "./components/Garments";
import EventsSection from "@/app/components/Event";
import Connect from "@/app/components/Connect";
    
export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-20">
    
      <HeroSection />
      <About />
      <ExpertisePage />
      <BrandLogosViewport />
      <TrustedSection/>
      <RawMaterialSection/>
      <FinishedGarmentsSection/>
      <EventsSection/>
      <Connect/>
    
    </div>
  );
}

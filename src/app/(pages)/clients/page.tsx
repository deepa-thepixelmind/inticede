import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import LogoSlider from "./LogoSlider";
import Testimonies from "./Testimonies";

export default function ClientsPage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ImpactSection />
      <LogoSlider />
      <Testimonies />
    </main>
  );
}
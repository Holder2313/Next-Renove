import AvantageItem from "@/components/AvantageItem";
import Avantages from "@/components/Avantages";
import CallToAction from "@/components/CallToAction";
import HomeGallery from "@/components/HomeGallery";
import IntroSection from "@/components/IntroSection";
import { Partenaires } from "@/components/Partenaires";
import ServicesSection from "@/components/ServicesSection";
import { Slider } from "@/components/Slider";



export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Slider />
      <IntroSection />
      <ServicesSection />
      <CallToAction />
      <Avantages />
      <HomeGallery />
      <Partenaires />
    </main>
  );
}

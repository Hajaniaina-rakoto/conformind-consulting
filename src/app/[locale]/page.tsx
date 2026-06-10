import HomeHero from "@/components/sections/home-hero";
import ExpertiseSection from "@/components/sections/expertise-section";
import WhyChooseConformind from "@/components/sections/why-choose-conformind";
import HomeTrainingSection from "@/components/sections/HomeTrainingSection";
// import MethodologySection from "@/components/sections/methodologySection";
// import PartnersSection from "@/components/sections/partnersSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExpertiseSection />
      <WhyChooseConformind />
      <HomeTrainingSection />
      {/* <MethodologySection /> */}
      {/* <PartnersSection /> */}
      <FinalCtaSection />
      <ContactSection />
    </>
  );
}
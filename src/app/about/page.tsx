import AboutHero from "@/components/sections/about/AboutHero";
import AboutStory from "@/components/sections/about/AboutStory";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutWhyUs from "@/components/sections/about/AboutWhyUs";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutCTA from "@/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutWhyUs />
      <AboutStats />
      <AboutCTA />
    </main>
  );
}
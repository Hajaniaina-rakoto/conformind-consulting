import FormationsHero from "@/components/sections/formations/FormationsHero";
import FormationsGrid from "@/components/sections/formations/FormationsGrid";
import TrainingBenefits from "@/components/sections/formations/TrainingBenefits";
import TrainingProcess from "@/components/sections/formations/TrainingProcess";
import TrainingCTA from "@/components/sections/formations/TrainingCTA";
import Header from "@/components/layout/header";
import Footer from "@/components/sections/Footer";

export default function FormationsPage() {
  return (
    <main>
      <FormationsHero />
      <FormationsGrid />
      <TrainingBenefits />
      <TrainingProcess />
      <TrainingCTA />
    </main>
  );
}
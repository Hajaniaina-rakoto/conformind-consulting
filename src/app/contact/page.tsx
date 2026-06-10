import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactMap from "@/components/sections/contact/ContactMap";
import ContactCTA from "@/components/sections/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactCTA />
    </>
  );
}
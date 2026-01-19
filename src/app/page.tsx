import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { CallDudeSection } from "@/components/sections/call-dude-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <HeroSection />
        <IntroSection />
        <CallDudeSection />
        <ServicesSection />
        <TestimonialsSection />
        <FoundersSection />
        <PartnersSection />
        <Footer />
      </main>
    </>
  );
}

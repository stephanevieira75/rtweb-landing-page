import { FidarnaSection } from "@/components/custom/fidarna-section";
import { GlyphSection } from "@/components/custom/glyph-section";
import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { TeamSection } from "@/components/custom/team-section";
import { TestimonialsSection } from "@/components/custom/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <GlyphSection />
      <FidarnaSection />
      <TestimonialsSection />
    </>
  );
}

import { HeroSection } from "@/components/sections/hero";
import { TeamSection } from "@/components/sections/team";
import { GlyphSection } from "@/components/sections/glyph";
import { FidarnaSection } from "@/components/sections/fidarna";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";

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

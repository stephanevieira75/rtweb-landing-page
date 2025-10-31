import { HeroLeftSide } from "./hero-left-side";
import { HeroRightSide } from "./hero-right-side";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col-reverse lg:flex-row min-h-screen items-center justify-center gap-8 md:gap-12 lg:gap-16"
    >
      <HeroLeftSide />
      <HeroRightSide />
    </section>
  );
}

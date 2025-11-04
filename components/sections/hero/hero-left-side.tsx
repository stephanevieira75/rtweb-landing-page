import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import { CTAButton } from "@/components/custom/cta-button";

export function HeroLeftSide() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-4xl">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex flex-col gap-2 sm:gap-3 md:gap-4 text-center w-full lg:text-left">
        <WritingText
          text="On conçoit."
          spacing={10}
          transition={{ type: "spring", bounce: 0, duration: 2, delay: 0.2 }}
        />
        <WritingText
          text="On développe."
          spacing={10}
          transition={{ type: "spring", bounce: 0, duration: 10, delay: 0.6 }}
        />
        <WritingText
          text="On vous accompagne."
          spacing={10}
          transition={{ type: "spring", bounce: 0, duration: 10, delay: 0.6 }}
        />
      </div>
      <h1 className="hidden">On conçoit. On développe. On vous accompagne.</h1>
      <p className="font-thin text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl leading-relaxed">
        Notre équipe développe des produits digitaux innovants et propose des
        services web sur mesure pour accompagner votre entreprise dans sa
        croissance.
      </p>

      <CTAButton />
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function GlyphLeftSide() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-10 w-full lg:px-24">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left mb-4 sm:mb-6 md:mb-8">
          Réduisez vos coûts de support avec{" "}
          <Link
            className="text-blue-600 hover:underline"
            href="https://glyph.chat/fr"
            target="blank"
          >
            Glyph.chat
          </Link>
        </h2>
      </div>

      <div className="lg:hidden flex items-center justify-end w-full">
        <Image
          src="/images/glyph-mac.png"
          alt="Glyph Image"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      <p className="font-thin md:max-w-xl lg:max-w-2xl text-lg text-center lg:text-left">
        Nous vous aidons à centraliser tout votre service client et vos ventes
        en un seul endroit et à automatiser les tâches les plus répétitives
        comme répondre aux questions fréquemment posées, planifier des
        rendez-vous et qualifier les prospects.
      </p>

      <Button size="2xl" className="bg-blue-600 font-bold text-lg" asChild>
        <Link href="https://glyph.chat/fr" target="blank">
          Découvrez Glyph.chat
        </Link>
      </Button>
    </div>
  );
}

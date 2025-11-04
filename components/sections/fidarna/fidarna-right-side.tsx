import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FidarnaRightSide() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-10 w-full lg:px-24">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left mb-4 sm:mb-6 md:mb-8">
          Trouvez le logement de vos rêves avec{" "}
          <Link
            className="text-green-900 hover:underline"
            href="https://fidarna.com"
            target="blank"
          >
            Fidarna
          </Link>
        </h2>
      </div>

      <div className="lg:hidden flex items-center w-full">
        <Image
          src="/images/fidarna-mac.png"
          alt="Fidarna Image"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>

      <p className="font-thin md:max-w-xl lg:max-w-2xl text-lg text-center lg:text-left">
        Trouvez un appartement ou une maison en vente ou en location. Une offre
        de plus de 1 million d&apos;annonces immobilières actualisée en temps
        réel de logements en Algérie.
      </p>

      <Button size="2xl" className="bg-green-900 font-bold text-lg" asChild>
        <Link href="https://fidarna.com" target="blank">
          Découvrez Fidarna
        </Link>
      </Button>
    </div>
  );
}

import { CTAButton } from "@/components/custom/cta-button";
import Link from "next/link";

const testimonials = [
  {
    name: "Karim Bedjaoui",
    company: "Fidarna",
    href: "https://fidarna.com",
    role: "Investisseur Immobilier",
    content:
      "En quelques clics, j'ai pu trouver des biens immobiliers correspondant parfaitement à mes critères. Leur carte interactive est vraiment intuitive et m'a fait gagner un temps précieux.",
  },
  {
    name: "Camille Brouillon",
    company: "Association COMBINES",
    href: "https://biomedicale.u-paris.fr/combines-en",
    role: "Présidente",
    content:
      "Grâce au développement de notre site par RTWeb, l’association a pu mieux faire connaître ses travaux sur les organoïdes et renforcer sa présence au sein de la communauté scientifique.",
  },
  {
    name: "Benoist Bouteiller",
    company: "Club ARRD-Maromme",
    href: "https://arrd.fr",
    role: "Membre",
    content:
      "Depuis l’ajout de Glyph.chat sur notre site, les échanges avec notre communauté sont plus simples et directs. Un vrai plus pour notre équipe et nos visiteurs !",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left mb-4 sm:mb-6 md:mb-8">
          Ce que disent nos <span className="text-blue-600">clients</span>
        </h2>

        <p className="font-thin text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center lg:text-left max-w-none lg:max-w-4xl">
          Découvrez les témoignages de nos clients satisfaits qui nous font
          confiance pour leurs projets digitaux. Leur succès est notre
          motivation quotidienne.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-around"
          >
            <blockquote className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 italic">
              &quot;{testimonial.content}&quot;
            </blockquote>

            <div>
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role}
                {testimonial.role && testimonial.company ? " - " : ""}
                {testimonial.company ? (
                  <Link
                    href={testimonial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {testimonial.company}
                  </Link>
                ) : null}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <CTAButton size="2xl" className="font-bold text-lg" />
      </div>
    </section>
  );
}

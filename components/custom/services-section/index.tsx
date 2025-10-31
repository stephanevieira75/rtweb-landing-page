import { CTAButton } from "@/components/custom/cta-button";
const services = [
  {
    title: "Développement Web Sur Mesure",
    description:
      "Création de sites web personnalisés adaptés à vos besoins spécifiques.",
  },
  {
    title: "Applications Mobiles",
    description:
      "Développement d'applications mobiles performantes pour iOS et Android.",
  },
  {
    title: "E-commerce",
    description:
      "Mise en place de boutiques en ligne optimisées pour maximiser vos ventes.",
  },
  {
    title: "Maintenance et Support",
    description:
      "Assistance continue pour garantir la performance et la sécurité de vos applications.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 flex min-h-screen flex-col items-center justify-center"
    >
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left mb-4 sm:mb-6 md:mb-8">
          Notre expertise est à{" "}
          <span className="text-blue-600">votre service</span>
        </h2>

        <p className="font-thin text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center lg:text-left max-w-none lg:max-w-4xl">
          Nous offrons une gamme complète de services pour répondre à vos
          besoins en développement web et mobile. Que vous ayez besoin
          d&apos;une application sur mesure, d&apos;un site web performant ou
          d&apos;une solution e-commerce, notre équipe d&apos;experts est là
          pour vous accompagner à chaque étape de votre projet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <CTAButton size="2xl" className="font-bold text-lg" />
      </div>
    </section>
  );
}

import { CTAButton } from "@/components/custom/cta-button";

const testimonials = [
  {
    name: "Marie Dubois",
    company: "E-commerce Solutions",
    role: "Directrice Marketing",
    content:
      "L'équipe a transformé notre vision en une application mobile exceptionnelle. Le professionnalisme et la qualité du travail sont remarquables.",
    rating: 5,
  },
  {
    name: "Jean-Pierre Martin",
    company: "TechStart",
    role: "CEO",
    content:
      "Grâce à leur expertise, notre site web a vu ses conversions augmenter de 150%. Un partenaire de confiance pour tous nos projets digitaux.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    company: "Boutique Mode",
    role: "Propriétaire",
    content:
      "Notre boutique en ligne développée par cette équipe dépasse toutes nos attentes. Interface intuitive et performances excellentes.",
    rating: 5,
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
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Rating stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6 italic">
              &quot;{testimonial.content}&quot;
            </blockquote>

            <div>
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {testimonial.role} - {testimonial.company}
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

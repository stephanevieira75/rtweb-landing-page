import { FounderContainer } from "./founder-container";

export function TeamSection() {
  return (
    <section
      id="team"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 flex min-h-screen flex-col items-center justify-center"
    >
      <div className="w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left mb-4 sm:mb-6 md:mb-8">
          Passionnés de <span className="text-blue-600">Challenges tech</span>
        </h2>

        <p className="font-thin text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center lg:text-left max-w-none lg:max-w-4xl">
          Que vous soyez une start-up ou un grand groupe, on s&apos;adapte à vos
          enjeux techniques et business. Notre approche est pragmatique,
          efficace, et taillée pour les projets ambitieux.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto gap-8 md:gap-12 lg:gap-16">
        <FounderContainer
          name="Stéphane"
          role="CEO"
          imageSrc="/images/founders/svieira.png"
          linkedinUrl="https://www.linkedin.com/in/svieira-rtweb/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sed in incidunt consequuntur maxime aliquam fugit culpa doloremque corrupti ipsa vero assumenda excepturi, vitae distinctio quisquam neque amet cupiditate."
        />
        <FounderContainer
          name="Abdelmalek"
          role="CTO"
          imageSrc="/images/founders/akhelouat.png"
          linkedinUrl="https://www.linkedin.com/in/abdel-khelouat/"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nobis sed in incidunt consequuntur maxime aliquam fugit culpa doloremque corrupti ipsa vero assumenda excepturi, vitae distinctio quisquam neque amet cupiditate."
        />
      </div>
    </section>
  );
}

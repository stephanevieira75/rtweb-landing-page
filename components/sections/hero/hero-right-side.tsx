import Image from "next/image";

export function HeroRightSide() {
  return (
    <div className="flex items-center justify-center w-full max-w-2xl lg:max-w-4xl">
      <Image
        src="/images/hero-image.png"
        alt="Hero Image"
        width={800}
        height={800}
        loading="eager"
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-cover rounded-tr-2xl rounded-bl-2xl rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[100px] lg:rounded-br-[120px]"
      />
    </div>
  );
}

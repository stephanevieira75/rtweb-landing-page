import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

type FounderContainerProps = {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl: string;
  description: string;
};

export function FounderContainer({
  name,
  role,
  imageSrc,
  linkedinUrl,
  description,
}: FounderContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full max-w-md lg:max-w-none">
      <Image
        src={imageSrc}
        alt={`${name}, ${role} of RTWeb`}
        width={188}
        height={188}
        className="rounded-lg object-cover dark:brightness-[0.2] dark:grayscale h-52 w-52"
      />
      <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {name}, <span className="text-blue-600">{role}</span>
      </div>
      <p className="font-thin text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {description}
      </p>

      <Link
        href={linkedinUrl}
        className="bg-blue-600 p-2 sm:p-3 rounded text-white hover:bg-blue-700 transition-colors duration-200"
      >
        <Linkedin className="inline w-5 h-5 sm:w-6 sm:h-6" />
      </Link>
    </div>
  );
}

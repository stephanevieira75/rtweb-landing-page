import Image from "next/image";

export function FidarnaLeftSide() {
  return (
    <div className="hidden lg:flex items-center">
      <Image
        src="/images/fidarna-mac.png"
        alt="Fidarna Image"
        width={800}
        height={800}
        className="object-cover"
      />
    </div>
  );
}

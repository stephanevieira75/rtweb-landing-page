import Image from "next/image";

export function GlyphRightSide() {
  return (
    <div className="hidden lg:flex items-center">
      <Image
        src="/images/glyph-mac.png"
        alt="Glyph Image"
        width={800}
        height={800}
        className="object-cover"
      />
    </div>
  );
}

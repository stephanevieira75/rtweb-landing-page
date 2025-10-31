import { GlyphLeftSide } from "./glyph-left-side";
import { GlyphRightSide } from "./glyph-right-side";

export function GlyphSection() {
  return (
    <section
      id="glyph"
      className="w-full flex flex-col md:flex-row min-h-screen justify-between py-12 sm:py-16 md:py-20"
    >
      <GlyphLeftSide />
      <GlyphRightSide />
    </section>
  );
}

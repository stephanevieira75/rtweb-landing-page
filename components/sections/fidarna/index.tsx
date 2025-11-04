import { FidarnaLeftSide } from "./fidarna-left-side";
import { FidarnaRightSide } from "./fidarna-right-side";

export function FidarnaSection() {
  return (
    <section
      id="fidarna"
      className="w-full flex flex-col md:flex-row min-h-screen justify-between py-12 sm:py-16 md:py-20"
    >
      <FidarnaLeftSide />
      <FidarnaRightSide />
    </section>
  );
}

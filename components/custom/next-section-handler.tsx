"use client";

import { ArrowDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, useMemo } from "react";

// Constants
const SECTION_IDS = [
  "hero",
  "team",
  "services",
  "glyph",
  "fidarna",
  "testimonials",
] as const;
const SCROLL_THROTTLE_DELAY = 100;
const VIEWPORT_OFFSET_RATIO = 0.5;

type SectionId = (typeof SECTION_IDS)[number];

const useThrottle = (callback: () => void, delay: number) => {
  return useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;

    const throttledFunction = () => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        callback();
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          callback();
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };

    return throttledFunction();
  }, [callback, delay]);
};

const useCurrentSection = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(() => {
    // Initialize with proper value during mount
    if (typeof window === "undefined") return 0;

    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return 0;

    const scrollPosition =
      window.scrollY + window.innerHeight * VIEWPORT_OFFSET_RATIO;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPosition) {
        return i;
      }
    }

    return 0;
  });

  const getCurrentSectionIndex = useCallback((): number => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return 0;

    const scrollPosition =
      window.scrollY + window.innerHeight * VIEWPORT_OFFSET_RATIO;

    // Find the section that contains the current scroll position
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPosition) {
        return i;
      }
    }

    return 0;
  }, []);

  const updateCurrentSection = useCallback(() => {
    setCurrentSectionIndex(getCurrentSectionIndex());
  }, [getCurrentSectionIndex]);

  const throttledUpdate = useThrottle(
    updateCurrentSection,
    SCROLL_THROTTLE_DELAY
  );

  useEffect(() => {
    // Add scroll listener
    window.addEventListener("scroll", throttledUpdate, { passive: true });

    return () => window.removeEventListener("scroll", throttledUpdate);
  }, [throttledUpdate]);

  return currentSectionIndex;
};

export function NextSectionHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentSectionIndex = useCurrentSection();

  const isLastSection = useMemo(
    () => currentSectionIndex >= SECTION_IDS.length - 1,
    [currentSectionIndex]
  );

  const nextSectionId = useMemo(
    (): SectionId | null =>
      isLastSection ? null : SECTION_IDS[currentSectionIndex + 1],
    [currentSectionIndex, isLastSection]
  );

  const scrollToNextSection = useCallback(() => {
    if (!nextSectionId) return;

    const nextSection = document.getElementById(nextSectionId);
    nextSection?.scrollIntoView({
      block: "start",
    });
  }, [nextSectionId]);

  if (isLastSection) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <Button
          variant="outline"
          size="icon-lg"
          onClick={scrollToNextSection}
          title={`Section suivante: ${nextSectionId}`}
          className="transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-background/80"
        >
          <ArrowDownIcon size={24} />
        </Button>
      </div>
    </>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

type GsapMotionContext = Readonly<{
  context: gsap.Context;
  contextSafe: ReturnType<typeof useGSAP>["contextSafe"];
  prefersReducedMotion: boolean;
}>;

type GsapMotionOptions = Readonly<{
  scope: RefObject<Element | null>;
  dependencies?: unknown[];
}>;

type GsapMotionSetup = (context: GsapMotionContext) => void | (() => void);

/** Rebuilds scoped animations when dependencies or motion preferences change. */
export function useGsapMotion(
  setup: GsapMotionSetup,
  { scope, dependencies = [] }: GsapMotionOptions,
) {
  useGSAP(
    () => {
      const media = gsap.matchMedia(scope);

      media.add(
        {
          motionSafe: "(prefers-reduced-motion: no-preference)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context, contextSafe) =>
          setup({
            context,
            // GSAP supplies this wrapper to every matchMedia callback.
            contextSafe: contextSafe as GsapMotionContext["contextSafe"],
            prefersReducedMotion: Boolean(context.conditions?.reducedMotion),
          }),
      );

      return () => media.revert();
    },
    { scope, dependencies, revertOnUpdate: true },
  );
}

export { gsap, ScrollTrigger };

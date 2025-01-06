"use client";

import { AuroraBackground } from "../components/ui/aurora-background";
import { CoverDemo } from "@/components/Cover";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { TimelineDemo } from "@/components/Timeline";

export default function Home() {
  return (
    <AuroraBackground className="h-screen" showRadialGradient={true}>
      <div className="relative z-10 ml-[-485px]">
        <CoverDemo />
        <div
          className="relative z-10"
          style={{ position: "relative", top: "0px", left: "750px" }}
        >
          <AnimatedTestimonialsDemo />
        </div>
      </div>
    </AuroraBackground>
  );
}

"use client";

import { AuroraBackground } from "../components/ui/aurora-background";
import { CoverDemo } from "@/components/Cover";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <CoverDemo />
      <div className="relative z-10" style={{ position: 'relative', top: '0px', left: '550px' }}>
        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
}

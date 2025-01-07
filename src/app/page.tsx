"use client";

import { AuroraBackground } from "../components/ui/aurora-background";
import { CoverDemo } from "@/components/Cover";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { TextHoverEffect1 } from "@/components/Text1";
import { TextHoverEffect2 } from "@/components/Text2";
export default function Home() {
  return (
    <div>
      <div style={{ paddingTop: '175px' }}>
        <TextHoverEffect1/>
      </div>
      <div style={{ paddingTop: '-5px' }}>
        <TextHoverEffect2/>
      </div>
      
    </div>
  );
}

/*
<CoverDemo />
      <div className="relative z-10" style={{ position: 'relative', top: '0px', left: '550px' }}>
        <AnimatedTestimonialsDemo />
      </div>
*/
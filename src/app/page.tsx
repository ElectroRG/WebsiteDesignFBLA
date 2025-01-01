import { CoverDemo } from "@/components/Cover";
import { HoverBorderGradientDemo } from "@/components/hover-border-gradient";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { FlipWordsDemo } from "@/components/Flip";
import { FocusCardsDemo } from "@/components/Focus";
import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { TimelineDemo } from "@/components/Timeline";

export default function Home() {
  return (
    
    <div>
      <CoverDemo />
      <div className="relative z-10" style={{ position: 'relative', top: '0px', left: '550px' }}>
        <AnimatedTestimonialsDemo />
      </div>
      <TimelineDemo/>
    </div>
  );
}




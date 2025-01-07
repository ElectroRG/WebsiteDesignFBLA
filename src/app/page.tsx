"use client";

// import { AuroraBackground } from "../components/ui/aurora-background";
// import { CoverDemo } from "@/components/Cover";
// import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { TextHoverEffect1 } from "@/components/Text1";
import { TextHoverEffect2 } from "@/components/Text2";
import { TimelineDemo } from "@/components/Timeline";
// import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Footer from "@/components/Footer";
// import { SignupFormDemo } from "@/components/SignUp";


// const stadium = [
//   {
//     text: "Stadium",
//     className: "text-white-500 dark:text-yellow-500",

//   },
//   {
//     text: "Booking",
//     className: "text-yellow-500 dark:text-yellow-500",
//   },
// ];




export default function Home() {
  return (
    <div>
      <div style={{ paddingTop: "175px" }}>
        <TextHoverEffect1 />
      </div>
      <div style={{ paddingTop: "-5px" }}>
        <TextHoverEffect2 />
      </div>
      <div style={{ paddingBottom: "400px" }}>
        <TimelineDemo />
      </div>



      <Footer/>
      {/* Add Footer here */}
      
    </div>
  );
}

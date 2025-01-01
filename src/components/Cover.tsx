import React from "react";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./Flip";

export function CoverDemo() {

  const words = ["Host", "Celebrate", "Enjoy", "Party"];


  return (
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto  mt-6 relative z-20 py-6  " style={{ transform: 'translate(0px, 200px)' }}>
        Come<FlipWords words={words}/> <br/> at <Cover>Lafayette Stadium</Cover>
      </h1>
    </div>
  );
}


//bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white
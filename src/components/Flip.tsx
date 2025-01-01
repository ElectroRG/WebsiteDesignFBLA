import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Cover} from "@/components/ui/cover"

export function FlipWordsDemo() {
  const words = ["host", "celebrate", "enjoy", "party"];

  return (
    
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
        Come<FlipWords words={words} /> <br /> at <Cover>Lafayette</Cover>
      </div>
    </div>
  );
}

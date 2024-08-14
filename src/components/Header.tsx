"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function Header() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-4xl lg:text-5xl font-bold text-black dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Unlock Your Next Job Opportunity with JobSync:
        <br/>
        {" "}
        
        <Highlight className="text-black dark:text-white">
        Personalized, AI-generated outreach messages designed to get you noticed.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
export default  Header 

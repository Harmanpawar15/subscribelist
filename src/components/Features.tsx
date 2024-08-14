"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundGradient } from "../components/ui/background-gradient";
import {
  FaUserCheck,
  FaCompress,
  FaBullseye,
} from "react-icons/fa";

function FeaturedItems() {
  const features = [
    {
      title: "Personalization💌",
      description:
        "The message feels personal and relevant to the recipient, ensuring a better connection with potential employers.",
      icon: <FaUserCheck />,
    },
    {
      title: "Conciseness✂️",
      description:
        "Stay brief and to the point with a 300-character limit, making your messages impactful without overwhelming the reader.",
      icon: <FaCompress />,
    },
    {
      title: "Targeted Selling Points🎯",
      description:
        "Highlight your key strengths in a way that directly matches the job role, making your application more compelling.",
      icon: <FaBullseye />,
    },
  ];

  return (
    <div className="relative h-full w-full bg-neutral-950 py-12">
      <BackgroundBeams />
      <div className="relative z-10">
        <div className="text-center">
        <h1
            className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold   text-neutral-50 "
            >
            Features
            </h1>
          
        </div>
      </div>

      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {feature.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {feature.description}
                  </p>
                  <p className="p-4 text-neutral-600 dark:text-neutral-400 flex-grow">
                    {feature.icon}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedItems;

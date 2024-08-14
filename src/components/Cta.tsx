"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "../components/ui/moving-border";
import { db } from "../../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 

export function Cta() {
  const [email, setEmail] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [buttonText, setButtonText] = useState<string>("Subscribe"); 

  // Explicitly typing 'e' as React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form default behavior
    if (email) {
      setLoading(true); // Set loading state
      setButtonText("Adding..."); // Change button text to "Adding..."
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });
        setButtonText("Email Added!"); // Change button text to "Email Added!"
        setEmail(""); // Clear input field
      } catch (error) {
        console.error("Error adding document: ", error);
        setButtonText("Error! Try Again"); // Change button text to indicate error
      } finally {
        setLoading(false); // Reset loading state
        setTimeout(() => setButtonText("Subscribe"), 2000); // Reset button text after 2 seconds
      }
    } else {
      setButtonText("Please enter a valid email"); // Prompt user if email is empty
      setTimeout(() => setButtonText("Notify Me"), 2000); // Reset button text after 2 seconds
    }
  };

  return (
    <div className="h-[20rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-8 text-lg md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-white text-center font-sans font-bold leading-tight">
          Elevate Your Job Search
        </h1>
        <p className="text-white max-w-lg mx-auto my-2 text-lg text-center relative z-10 font-bold">
          Join JobSync today and start crafting personalized pitches that get you noticed.
        </p>
        <form onSubmit={handleSubmit} className="relative z-10 mt-4 flex w-full items-center">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-l-lg border border-white focus:ring-2 focus:ring-teal-500 w-3/4 bg-neutral-950 placeholder:text-neutral-700 text-white px-4 py-2"
          />
          <Button
            borderRadius="1.75rem"
            className=" ml-3 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            type="submit"
          >
            {loading ? "Submitting..." : buttonText}
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
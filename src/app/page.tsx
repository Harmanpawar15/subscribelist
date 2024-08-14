import Header from "@/components/Header";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import FeaturedItems from "@/components/Features";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Header/>
      <Cta/>
      <FeaturedItems/>
    </main>
  );
    
  
}

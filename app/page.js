import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import Hero from "@/src/components/Hero/Hero";
import Navbar from "@/src/components/Navbar/Navbar";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import "./page.css";
export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
    </div>
  );
}

import { AboutSection } from "../components/AboutSection";
import { WhatIDo } from "../components/WhatIDo";

export const Home = () => {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="text-center h-screen w-full flex flex-col items-center justify-center bg-[#191919]">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            Hi, I'm Johannes Mwasanyila
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Software Developer & System Administrator
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </div>
        <AboutSection />
        <WhatIDo />
      </section>
    );
  };
  
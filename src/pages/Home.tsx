import { AboutSection } from "../components/AboutSection";
import { WhatIDo } from "../components/WhatIDo";

export const Home = () => {
    return (
      // <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-center h-screen w-full flex flex-col items-center justify-center bg-black">
          <h2 className="text-4xl md:text-6xl font-bold dark:text-gray-300 text-gray-400 mb-4" data-testid="home-title">
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
  
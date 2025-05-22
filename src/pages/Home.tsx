import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import bg01 from '/images/bg01.jpg';

export const Home = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="text-center h-screen w-screen flex flex-col items-center justify-center bg-black relative">
        <img src={bg01} className="w-full h-screen object-cover" alt="" />
        <div className="absolute w-full mx-auto text-center inset-0 h-full flex flex-col justify-center items-center bg-black/50">
          <h2 className="text-4xl md:text-6xl font-bold  text-gray-200 mb-4" data-testid="home-title">
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

      </div>
      <AboutSection />
      <Services />
      <ProjectsSection />
      <Skills />
      <ContactSection />
    </section>
  );
};

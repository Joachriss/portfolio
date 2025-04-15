export const Home = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 pt-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
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
      </section>
    );
  };
  
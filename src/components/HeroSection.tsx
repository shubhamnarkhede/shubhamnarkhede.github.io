
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
          Software Engineer & Data Scientist
        </span>
        <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
          Shubham Narkhede
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
          Innovative Software Engineer and Researcher specializing in machine learning, distributed systems, and microservices. Based in Sunnyvale, CA.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="mailto:shubhamvnarkhede@gmail.com"
            className="px-8 py-3 border border-black rounded-full hover:bg-gray-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

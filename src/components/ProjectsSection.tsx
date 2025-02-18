
import { useState } from "react";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "AI-powered Healthcare RAG Chatbot",
    description: "Winner: GMG-MAAI Hackathon, Stanford University. Led development of a healthcare chatbot using RAG and advanced embeddings, deployed in Oracle Cloud.",
    tags: ["RAG", "Oracle Cloud", "AI", "Healthcare"],
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Notes App",
    description: "Full-stack Notes App with React.js frontend and Django backend, using PostgreSQL for optimized data storage. Implemented secure RESTful APIs.",
    tags: ["React.js", "Django", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Ensemble ML for Intrusion Detection",
    description: "Designed and implemented an ensemble machine learning model for intrusion detection, performing real-time data processing using CIC Flow Meter.",
    tags: ["Python", "Machine Learning", "NSL-KDD", "Sklearn"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Hotel Booking Cancellation Predictor",
    description: "Developed a predictive model to forecast hotel booking cancellations using Python, exploring various algorithms including Random Forest and Gradient Boosting.",
    tags: ["Python", "Jupyter", "NumPy", "Pandas"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com",
    live: "https://example.com",
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: 0,
        animation: "fadeIn 0.5s ease-out forwards",
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Link className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-clash-display text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
            Projects
          </span>
          <h2 className="font-clash-display text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

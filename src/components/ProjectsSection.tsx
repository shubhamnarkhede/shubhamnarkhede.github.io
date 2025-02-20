import { useState } from "react";
import { Github, Link } from "lucide-react";

const projects = [
  {
    title: "AI-powered Healthcare RAG Chatbot",
    description: "Winner: GMG-MAAI Hackathon, Stanford University. Led a team to develop a healthcare chatbot using RAG and advanced embeddings. Deployed in Oracle Cloud with robust performance and scalability.",
    tags: ["RAG", "Oracle Cloud", "AI", "Healthcare", "LLMs"],
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shubhamnarkhede/healthcare-chatbot"
  },
  {
    title: "Notes App",
    description: "Full-stack application with React.js frontend and Django backend. Features secure RESTful APIs, PostgreSQL storage, Jest testing, and responsive UI with React hooks.",
    tags: ["React.js", "Django", "PostgreSQL", "AWS", "Jest"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shubhamnarkhede/Notes_App"
  },
  {
    title: "Ensemble ML for Intrusion Detection",
    description: "Advanced intrusion detection system using ensemble ML models. Features real-time packet capture, scikit-learn batch training, and cloud-based infrastructure for network monitoring.",
    tags: ["Python", "Machine Learning", "NSL-KDD", "Sklearn", "Cloud"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    github: "https://doi.org/10.1051/itmconf/20203203003"
  },
  {
    title: "Hotel Booking Cancellation Predictor",
    description: "ML model predicting hotel booking cancellations using Random Forest and Gradient Boosting. Includes in-depth feature analysis for identifying cancellation patterns.",
    tags: ["Python", "Jupyter", "NumPy", "Pandas", "ML"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shubhamnarkhede"
  }
];

// oroginal
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
          {/* <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Link className="w-5 h-5" />
          </a> */}
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


// new 

// const ProjectCard = ({ project, index }) => {
//   return (
//     <div 
//       className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//       style={{
//         opacity: 0,
//         animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`
//       }}
//     >
//       <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//       <div className="p-6">
//         <h3 className="font-clash-display text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag) => (
//             <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <a 
//           href={project.github} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
//         >
//           View Project
//         </a>
//       </div>
//     </div>
//   );
// };




// oroginal
// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
//             Projects
//           </span>
//           <h2 className="font-clash-display text-4xl md:text-5xl font-bold">
//             Featured Work
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.title} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


// better grey
// const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-20 px-6 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mb-4">
//             Projects
//           </span>
//           <h2 className="font-clash-display text-4xl md:text-5xl font-bold text-gray-800">
//             Featured Work
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={project.title} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;



// decent good one
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-50 z-0">
        <div className="absolute inset-0 bg-grid-indigo-500/[0.05] bg-[size:20px_20px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mb-4">
            Projects
          </span>
          <h2 className="font-clash-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a collection of my most impactful projects, showcasing innovative solutions and technical expertise.
          </p>
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

import { Briefcase, GraduationCap, Code } from "lucide-react";

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
//             About Me
//           </span>
//           <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6">
//             Background & Experience
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Innovative Software Engineer and Researcher with expertise in machine learning, distributed systems, REST APIs, and
//             microservices. Skilled in applying advanced ML techniques to solve real-world problems and build scalable solutions.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 mt-12">
//           <div>
//             <h3 className="font-clash-display text-2xl font-bold mb-6 flex items-center gap-2">
//               <Briefcase className="w-6 h-6" />
//               Work Experience
//             </h3>
//             <div className="space-y-8">
//               <div className="animate-fadeIn">
//                 <h4 className="font-bold mb-1">Software Developer</h4>
//                 <p className="text-gray-600 text-sm mb-2">PNC • California • January 2024 - Current</p>
//                 <ul className="list-disc list-inside text-gray-600 space-y-1">
//                   <li>Engineered RESTful APIs using Django with Redis caching to efficiently handle high-volume financial transactions, while developing React and Redux frontends for real-time monitoring dashboards</li>
//                   <li>Orchestrated microservices architecture migration using Docker and Kubernetes, implementing FastAPI services with MongoDB that reduced system response time by 40% and enhanced scalability</li>
//                   <li>Architected and deployed scalable applications on AWS using ECS and Lambda, implementing automated deployment pipelines</li>
//                   <li>Established a comprehensive testing framework using Jest, implementing automated CI/CD pipelines with GitHub Actions</li>
//                 </ul>
//               </div>
//               <div className="animate-fadeIn">
//                 <h4 className="font-bold mb-1">Software Developer</h4>
//                 <p className="text-gray-600 text-sm mb-2">Jio Platforms Ltd • India • October 2020 - July 2022</p>
//                 <ul className="list-disc list-inside text-gray-600 space-y-1">
//                   <li>Engineered the backend of JioWorks and scaled to handle 200K concurrent users, designed microservices architecture leveraging Node.js and MySQL</li>
//                   <li>Optimized system performance by integrating Redis cache and SocketIO in APIs, resulting in 20% reduction in execution time</li>
//                   <li>Implemented Global Search functionality using Elasticsearch cluster with optimized index-parameter tuning</li>
//                 </ul>
//               </div>
//               <div className="animate-fadeIn">
//                 <h4 className="font-bold mb-1">Software Developer</h4>
//                 <p className="text-gray-600 text-sm mb-2">Vivma Software Inc • India • November 2019 - October 2020</p>
//                 <ul className="list-disc list-inside text-gray-600 space-y-1">
//                   <li>Developed RESTful APIs using Python and Django with JWT authentication and role-based access control</li>
//                   <li>Designed and optimized PostgreSQL database schemas, reducing query response time by 40%</li>
//                   <li>Developed responsive frontend interfaces using React.js with TypeScript and real-time notifications</li>
//                   <li>Collaborated in an Agile environment using Git for version control and maintaining documentation</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-clash-display text-2xl font-bold mb-6 flex items-center gap-2">
//               <GraduationCap className="w-6 h-6" />
//               Education
//             </h3>
//             <div className="space-y-8">
//               <div className="animate-fadeIn">
//                 <h4 className="font-bold mb-1">Master of Science, Data Science</h4>
//                 <p className="text-gray-600">Stevens Institute of Technology • May 2024</p>
//               </div>
//               <div className="animate-fadeIn">
//                 <h4 className="font-bold mb-1">Bachelor of Engineering, Electronics and Telecommunication</h4>
//                 <p className="text-gray-600">Mumbai University • October 2020</p>
//               </div>
//             </div>

//             <h3 className="font-clash-display text-2xl font-bold mb-6 mt-12 flex items-center gap-2">
//               <Code className="w-6 h-6" />
//               Technical Skills
//             </h3>
//             <div className="flex flex-wrap gap-2">
//               {[
//                 "SDLC", "Agile", "Waterfall",
//                 "Python (Pandas, NumPy)", "C", "C++", "SQL",
//                 "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Bootstrap", "Tailwind CSS", "jQuery",
//                 "Django", "Node.js", "Flask", "FastAPI", "SocketIO",
//                 "MySQL", "PostgreSQL", "MongoDB",
//                 "AWS (EC2, S3)", "Azure", "GCP",
//                 "Docker", "Kubernetes", "Git", "GitHub",
//                 "Jest", "Pytest", "Postman"
//               ].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
       <div className="max-w-6xl mx-auto">
         <div className="text-center mb-16">
           <span className="inline-block px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm mb-4">
             About Me
           </span>
           <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6 text-gray-800">
             Background & Experience
           </h2>
           <p className="text-gray-700 max-w-xl mx-auto">
             Innovative Software Engineer and Researcher with expertise in machine learning, distributed systems, REST APIs, and
             microservices. Skilled in applying advanced ML techniques to solve real-world problems and build scalable solutions.
           </p>
         </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-clash-display text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              Work Experience
            </h3>
            <div className="space-y-8">
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Software Developer</h4>
                <p className="text-gray-600 text-sm mb-2">PNC • California • January 2024 - Current</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Engineered RESTful APIs using Django with Redis caching to efficiently handle high-volume financial transactions, while developing React and Redux frontends for real-time monitoring dashboards</li>
                  <li>Orchestrated microservices architecture migration using Docker and Kubernetes, implementing FastAPI services with MongoDB that reduced system response time by 40% and enhanced scalability</li>
                  <li>Architected and deployed scalable applications on AWS using ECS and Lambda, implementing automated deployment pipelines</li>
                  <li>Established a comprehensive testing framework using Jest, implementing automated CI/CD pipelines with GitHub Actions</li>
                </ul>
              </div>
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Software Developer</h4>
                <p className="text-gray-600 text-sm mb-2">Jio Platforms Ltd • India • October 2020 - July 2022</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Engineered the backend of JioWorks and scaled to handle 200K concurrent users, designed microservices architecture leveraging Node.js and MySQL</li>
                  <li>Optimized system performance by integrating Redis cache and SocketIO in APIs, resulting in 20% reduction in execution time</li>
                  <li>Implemented Global Search functionality using Elasticsearch cluster with optimized index-parameter tuning</li>
                </ul>
              </div>
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Software Developer</h4>
                <p className="text-gray-600 text-sm mb-2">Vivma Software Inc • India • November 2019 - October 2020</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Developed RESTful APIs using Python and Django with JWT authentication and role-based access control</li>
                  <li>Designed and optimized PostgreSQL database schemas, reducing query response time by 40%</li>
                  <li>Developed responsive frontend interfaces using React.js with TypeScript and real-time notifications</li>
                  <li>Collaborated in an Agile environment using Git for version control and maintaining documentation</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-clash-display text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-8">
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Master of Science, Data Science</h4>
                <p className="text-gray-600">Stevens Institute of Technology • May 2024</p>
              </div>
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Bachelor of Engineering, Electronics and Telecommunication</h4>
                <p className="text-gray-600">Mumbai University • October 2020</p>
              </div>
            </div>

            <h3 className="font-clash-display text-2xl font-bold mb-6 mt-12 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SDLC", "Agile", "Waterfall",
                "Python (Pandas, NumPy)", "C", "C++", "SQL",
                "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Bootstrap", "Tailwind CSS", "jQuery",
                "Django", "Node.js", "Flask", "FastAPI", "SocketIO",
                "MySQL", "PostgreSQL", "MongoDB",
                "AWS (EC2, S3)", "Azure", "GCP",
                "Docker", "Kubernetes", "Git", "GitHub",
                "Jest", "Pytest", "Postman"
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// const AboutSection = () => {
//   return (
    // <section id="about" className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="text-center mb-16">
    //       <span className="inline-block px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm mb-4">
    //         About Me
    //       </span>
    //       <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6 text-gray-800">
    //         Background & Experience
    //       </h2>
    //       <p className="text-gray-700 max-w-xl mx-auto">
    //         Innovative Software Engineer and Researcher with expertise in machine learning, distributed systems, REST APIs, and
    //         microservices. Skilled in applying advanced ML techniques to solve real-world problems and build scalable solutions.
    //       </p>
    //     </div>

//         {/* Keep the rest of the content as it is */}
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

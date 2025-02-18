
import { Briefcase, GraduationCap, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
            About Me
          </span>
          <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6">
            Background & Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
                <h4 className="font-bold mb-1">Software Developer (Full Stack Developer)</h4>
                <p className="text-gray-600 text-sm mb-2">Saayam For All • San Jose, CA • July 2024 - Present</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Designed and implemented Flask REST APIs for fraud detection</li>
                  <li>Engineered ETL pipelines using PostgreSQL and AWS S3</li>
                  <li>Led microservice architecture design</li>
                </ul>
              </div>
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Software Developer (Backend Developer)</h4>
                <p className="text-gray-600 text-sm mb-2">Reliance Jio Platform Ltd • Mumbai, India • October 2020 - July 2022</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Engineered backend systems handling 200K+ concurrent users</li>
                  <li>Implemented Global Search using Elasticsearch</li>
                  <li>Optimized API performance with Redis cache</li>
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
                <p className="text-gray-600 text-sm mb-2">Stevens Institute of Technology • GPA: 3.9/4.0</p>
                <p className="text-gray-600">September 2022 – May 2024 • Hoboken, NJ</p>
              </div>
              <div className="animate-fadeIn">
                <h4 className="font-bold mb-1">Bachelor of Engineering, Electronics and Telecommunication</h4>
                <p className="text-gray-600 text-sm mb-2">Ramrao Adik Institute of Technology • GPA: 3.4/4.0</p>
                <p className="text-gray-600">August 2016 – October 2020 • Mumbai, India</p>
              </div>
            </div>

            <h3 className="font-clash-display text-2xl font-bold mb-6 mt-12 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "SQL", "JavaScript", "Java", "C++",
                "Node.js", "MySQL", "Azure", "Flask", "Django",
                "Elasticsearch", "Redis", "Docker", "Kubernetes",
                "Machine Learning", "Scikit-learn", "NumPy", "Pandas"
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

import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-4">
            Contact Me
          </span>
          <h2 className="font-clash-display text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! Feel free to connect with me through any of the platforms below.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/shubhamnarkhede"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shubhamnarkhede"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="mailto:shubhamvnarkhede@gmail.com"
              className="flex items-center px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
            <a
              href="tel:2086176566"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
              title="Phone"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// const CaontactSection = () => {
//     return (
//       <section id="contact" className="py-20 px-6 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
//         <div className="max-w-xl mx-auto">
//           <div className="text-center mb-16">
//             <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-4">
//               Contact Me
//             </span>
//             <h2 className="font-clash-display text-white text-bold text-xl">Connect With Me</h
  
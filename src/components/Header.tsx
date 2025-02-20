// // import { useState, useEffect } from "react";
// // import { Github, Mail, Linkedin, Phone } from "lucide-react";

// // const Header = () => {
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
// //         isScrolled
// //           ? "bg-white/80 backdrop-blur-md shadow-sm"
// //           : "bg-transparent"
// //       }`}
// //     >
// //       <div className="container mx-auto px-6 py-4">
// //         <div className="flex items-center justify-between">
// //           <span className="text-xl font-clash-display font-bold">Shubham Narkhede</span>
// //           <nav className="hidden md:flex items-center space-x-8">
// //             <a href="#projects" className="hover:text-gray-600 transition-colors">
// //               Projects
// //             </a>
// //             <a href="#about" className="hover:text-gray-600 transition-colors">
// //               About
// //             </a>
// //             <a href="#contact" className="hover:text-gray-600 transition-colors">
// //               Contact
// //             </a>
// //           </nav>
// //           <div className="flex items-center space-x-4">
// //             <a
// //               href="https://github.com/shubhamnarkhede"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="hover:text-gray-600 transition-colors"
// //               title="GitHub"
// //             >
// //               <Github className="w-5 h-5" />
// //             </a>
// //             <a
// //               href="https://linkedin.com/in/shubhamnarkhede"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="hover:text-gray-600 transition-colors"
// //               title="LinkedIn"
// //             >
// //               <Linkedin className="w-5 h-5" />
// //             </a>
// //             <a
// //               href="mailto:shubhamvnarkhede@gmail.com"
// //               className="hover:text-gray-600 transition-colors"
// //               title="Email"
// //             >
// //               <Mail className="w-5 h-5" />
// //             </a>
// //             <a
// //               href="tel:2086176566"
// //               className="hover:text-gray-600 transition-colors"
// //               title="Phone"
// //             >
// //               <Phone className="w-5 h-5" />
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import { useState, useEffect } from "react";
// import { Github, Mail, Linkedin, Phone } from "lucide-react";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <span className="text-xl font-clash-display font-bold text-gray-800 hover:text-indigo-600 transition-colors">
//             Shubham Narkhede
//           </span>
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">
//               Projects
//             </a>
//             <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
//               About
//             </a>
//             <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
//               Contact
//             </a>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <a
//               href="https://github.com/shubhamnarkhede"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-indigo-600 transition-colors"
//               title="GitHub"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://linkedin.com/in/shubhamnarkhede"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-indigo-600 transition-colors"
//               title="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="mailto:shubhamvnarkhede@gmail.com"
//               className="text-gray-600 hover:text-indigo-600 transition-colors"
//               title="Email"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//             <a
//               href="tel:2086176566"
//               className="text-gray-600 hover:text-indigo-600 transition-colors"
//               title="Phone"
//             >
//               <Phone className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-clash-display font-bold text-gray-700 dark:text-white">
            Shubham Narkhede
          </span>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/shubhamnarkhede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shubhamnarkhede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:shubhamvnarkhede@gmail.com"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:2086176566"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              title="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

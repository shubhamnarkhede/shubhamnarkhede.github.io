import React, { useState, useEffect } from 'react';
import { Download, Send } from 'lucide-react';
import YourProfileImage from '@/assets/Shubham.png';
import RESUME from '@/assets/Shubham Narkhede.pdf';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Shubham Narkhede";

  useEffect(() => {
    setText('');
    setIsTypingComplete(false);
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-700/80 z-10" />
      
      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div className="text-white space-y-6">
          <div className="flex items-center"> 
            {/* space-x-4"> */}
            {/* <span className="h-1 w-12 bg-white"></span> */}
            <span className="text-lg font-medium">💻 Software Developer & Data Enthusiast</span>
          </div>
          
          <h1 className="font-clash-display text-5xl md:text-6xl font-bold">
            {text}
            <span className="animate-blink">|</span>
          </h1>
           {/* Add Location Here */}
           <p className="text-lg text-white/80">📍 Sunnyvale,CA</p>

          <p className="text-xl text-white/80 max-w-xl">
            Innovative Software Engineer specializing in full-stack development, 
            machine learning, and cloud-native solutions. Transforming complex 
            challenges into elegant, scalable technologies.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition"
            >
              <Send className="w-5 h-5" />
              Contact Me
            </a>
            <a 
              href={RESUME} 
              download 
              className="flex items-center gap-2 px-6 py-3 border border-white/50 text-white rounded-full hover:bg-white/10 transition"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className={`relative transition-all duration-1000 ${showImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 blur-xl animate-pulse"></div>
          <img 
            src={YourProfileImage} 
            alt="Shubham Narkhede" 
            className="relative z-10 w-85 h-85 object-cover rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex justify-center items-center">
          <div className="relative">
            {/* <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 blur-xl animate-pulse"></div>
            <img 
              src={YourProfileImage} 
              alt="Shubham Narkhede" 
              className="relative z-10 w-85 h-85 object-cover rounded-full border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            /> */}
            {/* <div className="absolute bottom-0 right-0 bg-white/20 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <span className="text-white text-sm">💻 Software Developer</span>
            </div> */}
          </div>
        </div>
      </div>
      
      {/* Subtle Animated Background Elements */}
      <div className="absolute bottom-12 left-12 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
    </section>
  );
};

export default HeroSection;




// old




// // old


// // const HeroSection = () => {
// //   return (
// //     <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6">
// //       <div className="max-w-4xl mx-auto text-center">
// //         <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
// //           Software Developer
// //         </span>
// //         <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
// //           Shubham Narkhede
// //         </h1>
// //         <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
// //           Software Developer with 3+ years of experience crafting high-performance applications that serve millions of users. 
// //           Proficient at optimizing system architectures to achieve efficiency gains. Expertise in full-stack development, 
// //           microservices, and cloud-native solutions. Skilled in leading technical initiatives while maintaining exceptional 
// //           code quality and test coverage.
// //         </p>
// //         <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
// //           <a
// //             href="#projects"
// //             className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
// //           >
// //             View Projects
// //           </a>
// //           <a
// //             href="mailto:shubhamvnarkhede@gmail.com"
// //             className="px-8 py-3 border border-black rounded-full hover:bg-gray-50 transition-colors"
// //           >
// //             Get in Touch
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// ///BLUE

// // const HeroSection = () => {
// //   return (
// //     <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-6 bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
// //       <div className="max-w-4xl mx-auto text-center">
// //         <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.2s" }}>
// //           Software Developer
// //         </span>
// //         <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6 animate-fadeIn opacity-0" style={{ animationDelay: "0.4s" }}>
// //           Shubham Narkhede
// //         </h1>
// //         <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: "0.6s" }}>
// //           Software Developer with 3+ years of experience crafting high-performance applications that serve millions of users. 
// //           Proficient at optimizing system architectures to achieve efficiency gains. Expertise in full-stack development, 
// //           microservices, and cloud-native solutions.
// //         </p>
// //         <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn opacity-0" style={{ animationDelay: "0.8s" }}>
// //           <a
// //             href="#projects"
// //             className="px-8 py-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors"
// //           >
// //             View Projects
// //           </a>
// //           <a
// //             href="mailto:shubhamvnarkhede@gmail.com"
// //             className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/20 transition-colors"
// //           >
// //             Get in Touch
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// // Sky earth blue

// // import { useState, useEffect } from 'react';

// // const HeroSection = () => {
// //   const [offset, setOffset] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => setOffset(window.pageYOffset);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       <div 
// //         className="absolute inset-0 z-0"
// //         style={{
// //           backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
// //           backgroundPosition: 'center',
// //           backgroundSize: 'cover',
// //           transform: `translateY(${offset * 0.5}px)`
// //         }}
// //       />
// //       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 z-10" />
      
// //       <div className="relative z-20 text-white text-center px-4">
// //         <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
// //           Shubham Narkhede
// //         </h1>
// //         <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn opacity-90">
// //           Innovative Software Developer crafting high-performance applications 
// //           and solving complex problems with cutting-edge technologies.
// //         </p>
// //         <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn">
// //           <a
// //             href="#projects"
// //             className="px-8 py-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
// //           >
// //             View Projects
// //           </a>
// //           <a
// //             href="mailto:shubhamvnarkhede@gmail.com"
// //             className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/20 transition-colors text-lg font-semibold"
// //           >
// //             Get in Touch
// //           </a>
// //         </div>
// //       </div>
      
// //       <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20" />
// //     </section>
// //   );
// // };

// // export default HeroSection;

// ///better blue purple

// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       <div 
// //         className="absolute inset-0 z-0"
// //         style={{
// //           backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47c4c4a1b2e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
// //           backgroundPosition: 'center',
// //           backgroundSize: 'cover',
// //           filter: 'brightness(0.5)',
// //         }}
// //       />
// //       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10" />
      
// //       <div className="relative z-20 text-white text-center px-4">
// //         <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
// //           Shubham Narkhede
// //         </h1>
// //         <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn opacity-90">
// //           Innovative Software Developer crafting high-performance applications 
// //           and solving complex problems with cutting-edge technologies.
// //         </p>
// //         <div className="flex flex-col md:flex-row gap-4 justify-center animate-fadeIn">
// //           <a
// //             href="#projects"
// //             className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
// //           >
// //             View Projects
// //           </a>
// //           <a
// //             href="mailto:shubhamvnarkhede@gmail.com"
// //             className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/20 transition-colors text-lg font-semibold"
// //           >
// //             Get in Touch
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;


// import React, { useState, useEffect } from 'react';

// const HeroSection = () => {
//   const [text, setText] = useState('');
//   const [isTypingComplete, setIsTypingComplete] = useState(false);
//   const fullText = "Shubham Narkhede";

//   useEffect(() => {
//     setText(''); // Reset text when component mounts or re-renders
//     setIsTypingComplete(false);
//     let index = 0;
    
//     const typingInterval = setInterval(() => {
//       if (index < fullText.length) {
//         setText((prev) => fullText.slice(0, index + 1));
//         index++;
//       } else {
//         clearInterval(typingInterval);
//         setIsTypingComplete(true);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//       }, [fullText]);
  

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47c4c4a1b2e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           filter: 'brightness(0.5)',
//         }}
//       />
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10" />
      
//       <div className="relative z-20 text-white text-center px-4">
//         <h1 className="font-clash-display text-5xl md:text-7xl font-bold mb-6">
//           {text}
//           <span className="animate-blink">|</span>
//         </h1>
//         <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
//           Innovative Software Developer crafting high-performance applications 
//           and solving complex problems with cutting-edge technologies.
//         </p>
//         <div className={`flex flex-col md:flex-row gap-4 justify-center transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
//           <a
//             href="#projects"
//             className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold animate-float"
//           >
//             View Projects
//           </a>
//           <a
//             href="mailto:shubhamvnarkhede@gmail.com"
//             className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/20 transition-colors text-lg font-semibold animate-float"
//           >
//             Get in Touch
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

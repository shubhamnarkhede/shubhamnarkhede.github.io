import '@/index.css'; 
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from '@/components/ContactSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

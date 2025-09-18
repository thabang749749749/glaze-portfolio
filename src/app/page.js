import { HeroSection } from "./components/HeroSection";
import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
<<<<<<< HEAD
import AchievementsSection from "./components/AchievementSection";
=======
>>>>>>> c712ab1967b157e6b97707e4c2de9ed8a14a5357

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>     
  );
}

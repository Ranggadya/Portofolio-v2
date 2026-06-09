import { lazy, useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./page/Home";
import DeferredSection from "./components/DeferredSection";

const About = lazy(() => import("./page/About"));
const Projects = lazy(() => import("./page/Projects"));
const Experience = lazy(() => import("./page/Experience"));
const Certificates = lazy(() => import("./page/Certificates"));
const Contact = lazy(() => import("./page/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const closeWelcome = useCallback(() => setShowWelcome(false), []);

  return (
    <div className="bg-[#0b1120] text-white min-h-screen flex flex-col overflow-x-hidden">
      {showWelcome && <WelcomeScreen onComplete={closeWelcome} />}

      {/* Ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00daf3]/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#6e06d0]/5 blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <Home/>
        <DeferredSection id="about" component={About} />
        <DeferredSection id="projects" component={Projects} />
        <DeferredSection id="experience" component={Experience} />
        <DeferredSection id="certificates" component={Certificates} />
        <DeferredSection id="contact" component={Contact} />
        <DeferredSection id="footer" component={Footer} minHeight="20vh" />
      </main>
    </div>
  );
}

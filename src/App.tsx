import Navbar from "./components/Navbar";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";
import Experience from "./page/Experience";
import Contact from "./page/Contact";


export default function App() {
  return (
    <div className="bg-[#0b1120] text-white min-h-screen flex flex-col overflow-x-hidden">

      {/* Ambient glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00daf3]/5 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#6e06d0]/5 blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-grow relative z-10">
        <Home/>
        <About />
        <Projects />
        <Experience/>
        <Contact/>
      </main>
    </div>
  );
}
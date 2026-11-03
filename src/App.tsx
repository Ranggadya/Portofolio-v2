import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1920px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <Hero />
        <Projects />
        <About />
        <Services />
        <Experience />
        <TechStack />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

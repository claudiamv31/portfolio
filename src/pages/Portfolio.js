import MainNavigation from '../components/MainNavigation';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Proyects from '../components/Proyects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const Portfolio = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <MainNavigation />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <Proyects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;

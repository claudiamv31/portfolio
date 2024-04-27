import Home from "../components/Home";
import MainNavigation from "../components/MainNavigation";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Proyects from "../components/Proyects";
import Resume from "../components/Resume";

const Portfolio = () => {
  return (
    <div>
      <MainNavigation />
      <Home />
      <AboutMe />
      <Proyects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Portfolio;

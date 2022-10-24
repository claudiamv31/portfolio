import About from "./About";
import classes from "./AboutMe.module.css";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div className={classes["about-me"]}>
      <About />
      <Skills />
    </div>
  );
};

export default AboutMe;

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.name}>
        <h3>About</h3>
      </div>
      <div className={classes.info}>
        <h3>
          I'm a Informatic Engeneer with a great passion for creating websites
        </h3>
      </div>
    </div>
  );
};

export default About;

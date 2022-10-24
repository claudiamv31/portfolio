import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <div className={classes.box}>
        <div>
          <h3>About</h3>
        </div>
        <div className={classes.info}>
          <h3>
            I'm a Informatic Engineer with a great passion for creating websites
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;

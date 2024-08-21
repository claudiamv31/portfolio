import classes from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.box}>
        <div>
          <h2>About me</h2>
        </div>
        <div className={classes.info}>
          <h3>
            I am a Computer Engineer deeply passionate about web development.
            Always open and enthusiastic about new challenges, viewing them as
            opportunities to learn and develop both personally and
            professionally.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;

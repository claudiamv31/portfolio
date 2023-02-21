import classes from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.box}>
        <div>
          <h2>Acerca de mi</h2>
        </div>
        <div className={classes.info}>
          <h3>
            Soy una Ingeniera Inform&aacute;tica con un gran inter&eacute;s por
            el desarrollo de p&aacute;ginas web.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;

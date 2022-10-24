import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes["skills-logo"]}>
        <div>
          <i className="fa-brands fa-html5 fa-5x"></i>
          <h3>HTML5</h3>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt fa-5x"></i>
          <h3>CSS3</h3>
        </div>
        <div>
          <i className="fa-brands fa-square-js fa-5x"></i>
          <h3>JavaScript</h3>
        </div>
        <div>
          <i className="fa-brands fa-react fa-5x"></i>
          <h3>React JS</h3>
        </div>
        <div>
          <i className="fa-brands fa-java fa-5x"></i>
          <h3>Java</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={classes.skills}>
      <div>Skills</div>
      <div>
        <i class="fa-brands fa-html5"></i>
        <h3>HTML5</h3>
      </div>
      <div>
        <i class="fa-brands fa-css3-alt"></i>
        <h3>CSS3</h3>
      </div>
      <div>
        <i class="fa-brands fa-square-js"></i>
        <h3>JavaScript</h3>
      </div>
      <div>
        <i class="fa-brands fa-react"></i>
        <h3>React JS</h3>
      </div>
    </div>
  );
};

export default Skills;

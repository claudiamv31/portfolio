/* eslint-disable jsx-a11y/iframe-has-title */
import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={classes.job}>
      <div className={classes.box}>
        <div>
          <h2>Informacion Laboral</h2>
        </div>
        <div className={classes.resume}>
          <div className={classes.left}>
            <iframe src="https://drive.google.com/file/d/1Dc09ViH5jnldRYtk6Rz-R8Kh_k6cZF6W/preview"></iframe>
            <h3>Curriculum en Espa&ntilde;ol</h3>
          </div>
          <div className={classes.right}>
            <iframe src="https://drive.google.com/file/d/1m7fKjVbTg_t5-zDhoLvLc2uKaNvLhSCa/preview"></iframe>
            <h3>Curriculum en Ingl&eacute;s</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

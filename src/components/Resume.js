/* eslint-disable jsx-a11y/iframe-has-title */
import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={classes.job}>
      <div className={classes.box}>
        <div>
          <h2>Job Information</h2>
        </div>
        <div className={classes.resume}>
          <div className={classes.left}>
            <iframe src="https://drive.google.com/file/d/1GdJwbnW8YUyMrNg8WM9C53raKkyMyqaj/preview"></iframe>
            <h3>Resume in Spanish</h3>
          </div>
          <div className={classes.right}>
            <iframe src="https://drive.google.com/file/d/1OcA_yAQcf28qbQaJ2RREURyepvVy4xK9/preview"></iframe>
            <h3>Resume in English</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

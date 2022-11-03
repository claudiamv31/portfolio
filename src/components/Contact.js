import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.contact}>
        <div className={classes.box}>
          <div>
            <h2>Contact me</h2>
          </div>
          <div>
            <h3>Feel free to contact me, I'd love to hear from you!</h3>
          </div>
          <div className={classes.email}>
            <a href="mailto:claudiavega3108@gmail.com">
              claudiavega3108@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={classes.links}>
        <h2>Links</h2>
        <div className={classes["links-logo"]}>
          <div>
            <i className="fa-brands fa-linkedin fa-5x"></i>
            <h3>LinkedIn</h3>
          </div>
          <div>
            <i className="fa-brands fa-github fa-5x"></i>
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

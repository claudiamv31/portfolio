import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={classes.wrapper}>
      <div className={classes.contact}>
        <div className={classes.box}>
          <div>
            <h2>Contact me</h2>
          </div>
          <div>
            <h3>I would love to hear about you!</h3>
          </div>
          <div className={classes.email}>
            <a href="mailto:claudiavega3108@gmail.com">
              claudiavega3108@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={classes.links}>
        <h2>You can also find me here</h2>
        <div className={classes["links-logo"]}>
          <div>
            <a href="https://www.linkedin.com/in/claudia-mariana-vega-soto-102572211/">
              <i className="fa-brands fa-linkedin fa-5x"></i>
              <h3>LinkedIn</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/claudiamv31">
              <i className="fa-brands fa-github fa-5x"></i>
              <h3>Github</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

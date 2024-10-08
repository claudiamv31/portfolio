import classes from "./Home.module.css";
import img from "../assets/personal-img.jpg";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-img"]}>
        <img src={img} alt="Claudia Vega" />
      </div>
      <div className={classes["home-info"]}>
        <h1>Hi, my name is Claudia Vega and I am an Informatics Engineer.</h1>
        <a href="#contact">Contact me</a>
      </div>
    </div>
  );
};

export default Home;

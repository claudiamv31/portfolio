import classes from "./Home.module.css";
import img from "../assets/personal-img.jpg";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["home-img"]}>
        <img src={img} alt="Claudia Vega" />
      </div>
      <div className={classes["home-info"]}>
        <h1>
          Hi, I'm <mark>Claudia Vega</mark> and I'm a Informatic Engineer
        </h1>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Home;

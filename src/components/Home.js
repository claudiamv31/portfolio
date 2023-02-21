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
          Hola, soy <mark>Claudia Vega</mark> y soy Ingeniera Inform&aacute;tica
        </h1>
        <a href="#contact">Cont&aacute;ctame</a>
      </div>
    </div>
  );
};

export default Home;

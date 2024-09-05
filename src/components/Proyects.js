import classes from "./Proyects.module.css";

import clavtvImg from "../assets/clavtv.png";
import pokewiki from "../assets/pokewiki.png";

const Projects = () => {
  return (
    <div className={classes.proyects} id="proyects">
      <h2>Projects</h2>
      <div className={classes.apps}>
        <div className={classes.clavtv}>
          <a href="https://clautv.netlify.app">
            <img src={clavtvImg} alt="ClavTv" />
            <h3>ClavTV</h3>
            <h4>
              It's a website that shows you the most popular series of the
              moment and a place where you can search for series that match your
              taste.
            </h4>
          </a>
        </div>
        <div className={classes.pokeapp}>
          <a href="https://pokewikiapp.netlify.app">
            <img src={pokewiki} alt="Pokeapp" />
            <h3>PokeApp</h3>
            <h4>
              It's an online portal that offers a glimpse of Pokémon, their
              regions, and information about them, as well as the option to
              choose your favorites.
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import classes from "./Proyects.module.css";

import clavtvImg from "../assets/clavtv.png";
import pokewiki from "../assets/pokewiki.png";

const Proyects = () => {
  return (
    <div className={classes.proyects} id="proyects">
      <h2>Proyectos</h2>
      <div className={classes.apps}>
        <div className={classes.clavtv}>
          <a href="https://clautv.netlify.app">
            <img src={clavtvImg} alt="ClavTv" />
            <h3>ClavTV</h3>
            <h4>
              Es un sitio web que te muestra las series mas populares del
              momento y un lugar donde puedes buscar las series de tu gusto.
            </h4>
          </a>
        </div>
        <div className={classes.pokeapp}>
          <a href="https://pokewikiapp.netlify.app">
            <img src={pokewiki} alt="Pokeapp" />
            <h3>PokeApp</h3>
            <h4>
              Es un portal en línea que te ofrece un vistazo a pokemones, sus
              regiones y la informacion sobre ellos asi como tambien elegir a
              tus favoritos
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;

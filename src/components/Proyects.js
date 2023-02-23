import classes from "./Proyects.module.css";

import clavtvImg from "../assets/clavtv.png";

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
      </div>
    </div>
  );
};

export default Proyects;

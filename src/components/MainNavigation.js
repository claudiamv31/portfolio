import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Claudia</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="#about">Acerca</a>
          </li>
          <li>
            <a href="#porfolio">Portafolio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

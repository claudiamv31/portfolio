import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Claudia</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#proyects">Proyects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

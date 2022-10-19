import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Claudia</div>
      <nav className={classes.nav}>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

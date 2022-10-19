import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Claudia</div>
      <nav className={classes.nav}>
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

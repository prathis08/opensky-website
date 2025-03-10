import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Name}>
        <span className={styles.NameText}>OPENSKY</span>
        <span className={styles.SubText}>RESORT</span>
      </div>
      <div className={styles.Views}>
        <NavLink className={styles.ViewName} to="/">
          Home
        </NavLink>
        <NavLink className={styles.ViewName} to="/about">
          About
        </NavLink>
        <NavLink className={styles.ViewName} to="/products">
          Products
        </NavLink>
      </div>
      <a href="/contact">
        <div className={styles.ContactBtn}>
          <span>Contact Us</span>
        </div>
      </a>
    </div>
  );
};

export default Navbar;

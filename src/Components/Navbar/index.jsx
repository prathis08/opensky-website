import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.Name}>
        <span className={styles.NameText}>OPENSKY</span>
        <span className={styles.SubText}>RESORT</span>
      </div>

      {isMobile ? (
        <>
          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            <span className={styles.menuToggleIcon}>
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>

          {menuOpen && (
            <div className={styles.mobileMenu}>
              <NavLink 
                className={styles.mobileViewName} 
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                className={styles.mobileViewName} 
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                className={styles.mobileViewName} 
                to="/products"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                className={styles.mobileContactBtn} 
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          )}
        </>
      ) : (
        <>
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
          <NavLink className={styles.ContactBtn} to="/contact">
            <span>Contact Us</span>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;

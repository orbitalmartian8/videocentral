import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = () => {
    return viewportWidth < 768;
  };

  return (
    <nav className={styles.navbar}>
      {isMobile() ? (
        <>
          <div className={styles.navbarBrand}><a href="/" className={styles.navbarItem}>VideoCentral</a></div>
          <button onClick={toggleMenu} className={styles.menuButton}>
            Menu
          </button>
          {isMenuOpen && (
            <div className={styles.navbarMenu}>
              <a className={styles.navbarItem} href="#">Home</a>
              <a className={styles.navbarItem} href="#">Popular</a>
              <a className={styles.navbarItem} href="#">Search</a>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.navbarBrand}><a href="/" className={styles.navbarItem}>VideoCentral</a></div>
          <div className={styles.navbarMenu}>
            <a className={styles.navbarItem} href="#">Home</a>
            <a className={styles.navbarItem} href="#">Popular</a>
            <a className={styles.navbarItem} href="#">Search</a>
            <a className={styles.navbarItem} href="#">Docs</a>
            <a className={styles.navbarItem} href="https://github.com/LinuxGamer/videocentral" target="_blank" rel="noreferrer"><IconContext.Provider value={{color: "white", style: { verticalAlign: "middle" },}}><FaGithub aria-label="GitHub" /></IconContext.Provider></a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

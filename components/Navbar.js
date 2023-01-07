import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

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
              <a className={styles.navbarItem} href="#">About</a>
              <a className={styles.navbarItem} href="#">Contact</a>
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.navbarBrand}><a href="/" className={styles.navbarItem}>VideoCentral</a></div>
          <div className={styles.navbarMenu}>
            <a className={styles.navbarItem} href="#">Home</a>
            <a className={styles.navbarItem} href="#">About</a>
            <a className={styles.navbarItem} href="#">Contact</a>
            <a className={styles.navbarItem} href="#">Blog</a>
            <a className={styles.navbarItem} href="#">Resources</a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

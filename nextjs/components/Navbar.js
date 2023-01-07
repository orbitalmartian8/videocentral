import { useState, useEffect } from 'react';

function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);

  function updateIsMobile() {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }

  useEffect(() => {
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {if (isMobile) {  // incorrect syntax
        return (
          <>
            <a className="navbar-brand" href="#">My App</a>
            <button className="navbar-toggler" onClick={toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
              <a className="navbar-item" href="#">Home</a>
              <a className="navbar-item" href="#">About</a>
              <a className="navbar-item" href="#">Contact</a>
            </div>
          </>
        } else {
            return (
              <>
                <a className="navbar-brand" href="#">My App</a>
                <div className="navbar-menu">
                  <a className="navbar-item" href="#">Home</a>
                  <a className="navbar-item" href="#">About</a>
                  <a className="navbar-item" href="#">Contact</a>
                </div>
              </>
            );
          }
        </nav>
      );
    }
    
    export default Navbar;
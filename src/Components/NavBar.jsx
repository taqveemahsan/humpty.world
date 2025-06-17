import React, { useState, useEffect } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo/logo.svg";
import iconarrow from "../Images/Icons/icon-arrow.svg";
import { useLocation } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handlehide = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setScrollDown(true); // scrolling down
      } else {
        setScrollDown(false); // scrolling up or near top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Navbar className={scrollDown ? "scroll-down" : ""}>
        <div className="logo-cntnr">
          <Link to="/" className="logo"><Image src={Logo} alt="Logo" /></Link>
        </div>
        <ul>
          <li><Link to="/" className={`${(useLocation().pathname) == '/' ? 'active' : ''}`}>Home</Link></li>
          {/* <li><Link to="/">Eggs-perience Now</Link></li>
          <li><Link to="/">Crack-Up</Link></li> */}
          <li><a href="/#creations" className={`${(useLocation().pathname) == '/#creations' ? 'active' : ''}`}>Watch </a></li>
          <li><a href="https://app.humpty.world" target="_blank"  >DApp</a></li>

          {/* <li><Link to="/">Token</Link></li> */}
          {/* <li><Link to="#">Roadmap</Link></li> */}
        </ul>
        <Button className="navbar-toggler" onClick={handleToggle}>
          <span />
        </Button>
      </Navbar>
      <div className={`navbar--display ${isOpen ? "open" : ""}`}>
        <div className="nav-head">
          {/* <ul className="nav-btn-list m-0">
            <li><Link className="reg-btn sky-blue" to="/">Talk <span className="fa fa-plus" /></Link></li>
            <li><Link className="reg-btn sky-blue" to="/">Watch <span className="fa fa-plus" /></Link></li>
          </ul> */}
          <Button className="navbar-toggler collapsed" onClick={handleToggle}>
            <span />
          </Button>
        </div>
        <hr />
        <div className="nav-mid">
          {/* <ul className="navbar-list">
          <li><Link to="/" className={`${(useLocation().pathname) == '/' ? 'active' : ''}`}>Home</Link></li>
          {/* <li><Link to="/">Eggs-perience Now</Link></li>
          <li><Link to="/">Crack-Up</Link></li> */}
          {/* <li><a href="/#series" className={`${(useLocation().pathname) == '/#series' ? 'active' : ''}`}>Watch Series</a></li>
          <li><Link to="https://app.humpty.world" >DApp</Link></li>

          </ul> */} 
            <ul className="nav-link-list">
            <li><Link to="/" className={`${(useLocation().pathname) == '/' ? 'active' : ''}`} onClick={handlehide}>Home</Link></li>
          {/* <li><Link to="/">Eggs-perience Now</Link></li>
          <li><Link to="/">Crack-Up</Link></li> */}
          <li><a href="/#creations" className={`${(useLocation().pathname) == '/#creations' ? 'active' : ''}`} onClick={handlehide}>Watch </a></li>
          <li><a  href="https://app.humpty.world" target="_blank"  >DApp</a></li>
          </ul> 
         
        </div>
      </div>
    </>
  );
}
export default NavBar;
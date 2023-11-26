import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import hamburger from "../iconimage/menu1.png";
import navClick from "../iconimage/cursor.png";
import "../scssstyles/nav.scss";

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <nav className="Nav">
        <div className="nav-small">
          <div className="nav-logo-hamburger">
            <div className="nav-logo">
              <h4>Tsg-Notary</h4>
            </div>
            <div>
              <button className="nav-hamburger" onClick={toggleNav}>
                <img src={hamburger} alt="Menu" />
              </button>
            </div>
          </div>
          <div className={`nav-content${isNavVisible ? " active" : ""}`}>
            <div className="nav-logo-hamburger">
              <div className="nav-get">
                <h4>Get in Touch</h4>
              </div>
              <div>
                <button className="nav-hamburger" onClick={toggleNav}>
                  <img src={hamburger} alt="Menu" />
                </button>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/" className="nav-list">
                  Home <img src={navClick} />
                </Link>
              </li>
              <li>
                <Link to="/AboutPage" className="nav-list">
                  About <img src={navClick} />
                </Link>
              </li>
              <li>
                <Link to="/ServicePage" className="nav-list">
                  Service <img src={navClick} />
                </Link>
              </li>
              <li>
                <Link to="/ContactPage" className="nav-list">
                  Contact <img src={navClick} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-big">
          <div className="nav-logo">
            <h4>Tsg-Notary</h4>
          </div>
          <ul className="nav-big-content">
            <li className="nav-lists">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-lists">
              <Link to="/AboutPage">About</Link>
            </li>
            <li className="nav-lists">
              <Link to="/ServicePage">Service</Link>
            </li>
            <li className="nav-lists">
              <Link to="/ContactPage">Contact</Link>
            </li>
          </ul>
          <div className="nav-get">
            <h4>Get in Touch</h4>
          </div>
        </div>
      </nav>
      <div className="nav-height-bc"></div>
      <Outlet />
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import hamburger from "../iconimage/menu1.png";
import navClick from "../iconimage/cursor.png";
import "../scssstyles/nav.scss";

const Navbar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const reloadHomePage = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <nav className="Nav">
        <div className="nav-small">
          <div className="nav-logo-hamburger">
            <div className="nav-logo">
              <Link to="/">
                <h4>Tsg-Notary</h4>
              </Link>
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
                <Link to="/ContactPage" className="nav-list">
                  <h4>Get in Touch</h4>
                </Link>
              </div>
              <div>
                <button className="nav-hamburger" onClick={toggleNav}>
                  <img src={hamburger} alt="Menu" />
                </button>
              </div>
            </div>
            <ul>
              <li onClick={reloadHomePage}>
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
            <Link to="/">
              <h4>Tsg-Notary</h4>
            </Link>
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
          <div className="nav-get-big">
            <Link to="/ContactPage">
              <h4>Get in Touch</h4>
            </Link>
          </div>
        </div>
      </nav>
      <div className="nav-height-bc"></div>
      <Outlet />
    </>
  );
};

export default Navbar;

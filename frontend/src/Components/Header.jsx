import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Contexts/AuthContext";

const Header = () => {
  const {logout} = useAuthContext();

  const handleLogout = async () => {
   try {
    logout();
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" style={style.title} href="/">
          FantasticFour
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
               Login
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
               Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={handleLogout}>
               Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const style = {
  title: {
    fontWeight: "bold",
    FontFamily: "Playwrite GB S, cursive",
    fontSize: "32px",
  },
};

export default Header;

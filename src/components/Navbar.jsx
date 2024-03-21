import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigat = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <img height="100px" src="../assets/logo.png" alt="..." />
          <a className="navbar-brand text-light" href="/">
            GO
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
              <a className="nav-link text-light    " href="/vehicles">
                Vehicles
              </a>
              <a className="nav-link text-light" href="/safety">
                Safety
              </a>
              <a className="nav-link text-light" href="/help">
                Help
              </a>
            </div>
            <div className="ms-auto">
              <button
                style={{ fontSize: "15px" }}
                className="btn btn-primary"
                onClick={login}
                type="button"
              >
                Log In/Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  function login() {
    navigat("/login");
  }
};

export default Navbar;

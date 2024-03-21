import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <br />
            <br />
            <br />
            <h2>What is your phone number or Email?</h2>
            <br />
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Phone or Email"
                    aria-label="Search"
                  />
                  <br />
                  <button className="btn btn-outline-success" type="submit">
                    Continue
                  </button>
                </form>
                <br />
                <br />
                <br />
                <b>-----------------------or-----------------------</b>
                <br />
                <br />
                <br />
              </div>
            </nav>
            <div className="row">
              <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                  <div className="col-md-12 mt-2">
                    <button type="button ">
                      <img height="30px" src=" ../assets/google.jpg" alt="" />
                      Continue with Google{" "}
                    </button>
                  </div>
                  <div className="col-md-12 mt-2">
                    <button type="button">
                      <img height="30px" src=" ../assets/apple.jpg" alt="" />
                      Continue with Apple{" "}
                    </button>
                  </div>
                  <div className="col-md-12  mt-2">
                    <button type="button">
                      <img height="30px" src="../assets/facebook.jpg" alt="" />
                      Continue with Facebook
                    </button>
                  </div>
                </form>
              </nav>
            </div>
            <br />
            <br />
            <br />
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from GO and its affiliates to the
            number provided. This site is protected by reCAPTCHA and the Google{" "}
            <u>Privacy Policy</u> and <u>Terms of Service</u> apply.
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

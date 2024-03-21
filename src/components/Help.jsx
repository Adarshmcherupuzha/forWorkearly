import React from "react";
import Navbar from "./Navbar";
import Help1 from "./Help1";
import Help2 from "./Help2";
import Footer from "./Footer";

const Help = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Help1 />

        <Help2 />
      </div>
      <Footer/>
    </div>
  );
};

export default Help;

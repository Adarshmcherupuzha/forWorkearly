import React from "react";
import Navbar from "./Navbar";
import Help1 from "./Help1";
import Help2 from "./Help2";

const Help = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Help1 />

        <Help2 />
      </div>
    </div>
  );
};

export default Help;

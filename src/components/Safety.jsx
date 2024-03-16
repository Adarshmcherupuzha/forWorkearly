import React from "react";
import Navbar from "./Navbar";
import Safety1 from "./Safety1";
import Safety2 from "./Safety2";
import Safety3 from "./Safety3";
import Safety4 from "./Safety4";

const Safety = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Safety1 />
        <Safety2 />
        <Safety3 />
        <Safety4 />
      </div>
    </div>
  );
};

export default Safety;

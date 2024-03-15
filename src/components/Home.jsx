import React from "react";
import Navbar from "./Navbar";
import HomeC1 from "./HomeC1";
import HomeC2 from "./HomeC2";
import HomeC3 from "./HomeC3";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "black", color: "aliceblue" }}>
        <HomeC1 />

        <div class="container">
          <HomeC2 />
          <HomeC3/>

        
        </div>
      </div>
    </div>
  );
};

export default Home;

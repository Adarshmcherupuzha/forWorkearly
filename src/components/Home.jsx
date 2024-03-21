import React from "react";
import Navbar from "./Navbar";
import HomeC1 from "./HomeC1";
import HomeC2 from "./HomeC2";
import HomeC3 from "./HomeC3";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "black", color: "aliceblue" }}>
        <HomeC1 />

        <div className="container">
          <HomeC2 />
          <HomeC3/>

        
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;

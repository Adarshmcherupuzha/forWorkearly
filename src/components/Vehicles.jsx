import React from "react";
import Navbar from "./Navbar";
import VehiclesC1 from "./VehiclesC1";
import VehicleC2 from "./VehicleC2";
import VehiclesC3 from "./VehiclesC3";
import VehiclesC4 from "./VehiclesC4";
import Footer from "./Footer";

const Vehicles = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <VehiclesC1 />
        <VehicleC2 />
        <VehiclesC3 />

        <VehiclesC4 />
      </div>
      <Footer/>
    </div>
  );
};

export default Vehicles;

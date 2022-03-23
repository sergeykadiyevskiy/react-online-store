import React from "react";
import { Banner } from "../comps/Banner";
import Navbar from "../comps/Navbar";
import { Slider } from "../comps/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;

import React from "react";
import { Banner } from "../comps/Banner";
import { Categories } from "../comps/Categories";
import Navbar from "../comps/Navbar";
import Products from "../comps/Products";
import { Slider } from "../comps/Slider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;

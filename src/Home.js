import React from "react";
import CartItems from "./components/CartItems";
import Fruits from "./components/Fruits";
import Hero from "./components/Hero";
import HotDeals from "./components/HotDeals";

const Home = () => {
  return (
    <div className="px-[3%] md:px-[6%]">
      <Hero />
      <Fruits />
      <HotDeals />
      <CartItems />
    </div>
  );
};

export default Home;

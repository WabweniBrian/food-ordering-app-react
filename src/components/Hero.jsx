import React from "react";
import { bannerProducts } from "../data/products";

const Hero = () => {
  return (
    <div className="grid place-items-center md:grid-cols-2 md:gap-10 min-h-screen pt-16">
      <div className="text-center md:text-left">
        <div className="p-2 bg-orange-200 rounded-md mx-auto md:mx-0 flex-align-center gap-x-4 w-48 dark:bg-slate-800">
          <h1 className="text-orange-600 font-bold capitalize">
            quick delivery
          </h1>
          <img
            src="./images/delivery.png"
            alt=""
            className="w-8 h-8 p-1 rounded-full bg-white dark:bg-slate-700"
          />
        </div>
        <h1 className="text-6xl font-bold capitalize leading-[5rem] my-4">
          the fastest <br /> delivery in{" "}
          <span className="text-orange-600">
            your <br /> city
          </span>
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          incidunt soluta nemo blanditiis laborum officia, quasi dignissimos
          facere explicabo necessitatibus velit quas culpa! Veniam quia rerum
          adipisci repudiandae odit harum!
        </p>

        <button className="py-1 px-5 text-slate-200 my-6 md:my-2 rounded bg-orange-600 hover:bg-orange-700 transition-a ">
          Order Now
        </button>
      </div>
      <div className="relative">
        <img
          src="./images/heroBg.png"
          alt=""
          className="h-[420px] sm:h-[520px] ml-10"
        />
        <div className="absolute top-10 lg:-left-20 grid grid-cols-2 gap-10">
          {bannerProducts.map((product) => {
            const { id, category, title, img, price } = product;
            return (
              <div
                className="w-full bg-white/50 backdrop-blur-sm p-2 rounded-lg text-center sm:cursor-pointer group dark:bg-darkMainBg/50"
                key={id}
              >
                <img
                  src={img}
                  alt={title}
                  width={100}
                  className="-mt-10 group-hover:scale-110 transition-a mx-auto"
                />
                <h1 className="font-bold capitalize my-3">{category}</h1>
                <p className="text-sm text-muted capitalize">{title}</p>
                <p>
                  <span className="text-orange-600">$</span>
                  {price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

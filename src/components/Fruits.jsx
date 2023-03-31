import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
import { addToCart, cartStore } from "../features/cartSlice";

const Fruits = () => {
  const fruitsContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (fruitsContainer.current.scrollLeft += 200)
      : (fruitsContainer.current.scrollLeft -= 200);
    fruitsContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };
  const { products } = useSelector(cartStore);
  const fruits = products.filter((product) => product.category === "fruits");

  const dispatch = useDispatch();

  return (
    <div className="pt-16 pb-6">
      <div className="flex-center-between justify-end">
        <h1 className="text-2xl relative font-bold before:absolute before:w-1/2 before:h-1 before:bottom-0 before:bg-orange-600">
          Our Fresh & healthy fruits
        </h1>
        <div className="hidden sm:flex-align-center gap-3">
          <button
            className={`p-2 text-slate-100 bg-orange-400 hover:bg-orange-500 transition-a rounded-lg shadow-lg ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
          >
            <FiChevronLeft />
          </button>
          <button
            className="p-2 text-slate-100 bg-orange-400 hover:bg-orange-500 transition-a rounded-lg shadow-lg"
            onClick={() => scrollContainer("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div
        className="mt-10 flex gap-x-4 overflow-auto hide-scrollbar scroll-smooth pt-10"
        ref={fruitsContainer}
      >
        {fruits.map((fruit) => {
          const { id, calories, title, img, price } = fruit;
          return (
            <div
              className="flex gap-x-6 bg-white p-3 w-fit shrink-0  rounded-lg hover:bg-slate-100  sm:cursor-pointer group dark:bg-darkMainBg dark:text-slate-300"
              key={id}
            >
              <img
                src={img}
                alt={title}
                className="w-24 h-24 -mt-10 group-hover:scale-125 transition-a"
              />
              <div>
                <div
                  className="w-8 h-8 grid place-items-center text-white bg-red-600 hover:bg-red-700 rounded-full transition-a"
                  onClick={() => dispatch(addToCart(fruit))}
                >
                  <FaShoppingBasket />
                </div>
                <h1 className="font-bold capitalize mt-4">{title}</h1>
                <p className="text-sm text-muted capitalize">
                  {calories} Calories
                </p>
                <p>
                  <span className="text-orange-600">$</span>
                  {price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fruits;

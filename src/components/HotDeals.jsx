import React from "react";
import { categories } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { FaUtensils, FaShoppingBasket } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import { useRef } from "react";
import { addToCart, cartStore } from "../features/cartSlice";

const HotDeals = () => {
  const { products } = useSelector(cartStore);
  const defaultProducts = products.filter(
    (product) => product.category === "chicken"
  );
  const [filteredProducts, setFilteredProducts] = useState(defaultProducts);
  const [selectedCategory, setSelectedCategory] = useState("chicken");
  const dispatch = useDispatch();

  const filterProducts = (category) => {
    setFilteredProducts(
      products.filter((product) => product.category === category)
    );
    setSelectedCategory(category);
  };

  const categoriesContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (categoriesContainer.current.scrollLeft += 200)
      : (categoriesContainer.current.scrollLeft -= 200);
    categoriesContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };
  return (
    <div className="pt-12 pb-10">
      <h1 className="text-2xl w-fit relative font-bold before:absolute before:w-1/2 before:h-1 before:bottom-0 before:bg-orange-600">
        Our Hot Deals
      </h1>
      <div className=" relative">
        <div
          className="flex-align-center lg:flex-center-center gap-x-4 overflow-auto hide-scrollbar scroll-smooth p-4"
          ref={categoriesContainer}
        >
          {categories.map((category, index) => {
            const cardBg =
              selectedCategory === category ? "!bg-red-600 text-white" : "";
            const iconBox =
              selectedCategory === category ? "!bg-white text-slate-600" : "";
            const icon = selectedCategory === category ? "!text-slate-600" : "";
            return (
              <div
                className={`flex-center-center shrink-0 gap-x-4 p-4 bg-white rounded-md shadow-sm text-center dark:bg-darkMainBg dark:text-slate-300 hover:!bg-red-600 group sm:cursor-pointer ${cardBg}`}
                onClick={() => filterProducts(`${category}`)}
                key={index}
              >
                <div
                  className={`w-10 h-10 rounded-full grid place-items-center bg-red-600 group-hover:bg-white ${iconBox}`}
                >
                  <FaUtensils
                    className={`text-white  group-hover:text-slate-600 mx-auto ${icon}`}
                  />
                </div>
                <p className="text-muted text-sm group-hover:text-white capitalize">
                  {category}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className={`hidden sm:block absolute top-1/2 -translate-y-1/2 left-0 p-2 text-slate-100 bg-orange-400 hover:bg-orange-500 transition-a rounded-lg shadow-lg ${
            !isScroll && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => scrollContainer("left")}
        >
          <FiChevronLeft />
        </button>
        <button
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-0 p-2 text-slate-100 bg-orange-400 hover:bg-orange-500 transition-a rounded-lg shadow-lg"
          onClick={() => scrollContainer("right")}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-10 flex-center-center gap-6 pt-10 flex-wrap">
        {filteredProducts.map((product) => {
          const { id, calories, title, img, price } = product;
          return (
            <div
              className="flex gap-x-6 bg-white p-3 w-full sm:w-fit shrink-0  rounded-lg hover:bg-slate-100  sm:cursor-pointer group dark:bg-darkMainBg dark:text-slate-300"
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
                  onClick={() => dispatch(addToCart(product))}
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

export default HotDeals;

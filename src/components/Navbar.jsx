import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cartStore,
  openCartModal,
  toggleDarkMode,
} from "../features/cartSlice";
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const { totalQuantity, darkMode } = useSelector(cartStore);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="flex-center-between px-[3%] md:px-[6%] py-3 fixed w-full top-0 left-0 bg-inherit z-10">
      {/* Logo */}
      <Link to="/">
        <div className="flex-align-center space-x-2">
          <img src="./images/logo.png" alt="" width={30} />
          <h1 className="text-lg font-bold">City</h1>
        </div>
      </Link>

      {/* Desktop Menu */}
      <motion.ul
        className="hidden md:flex-align-center space-x-10 ml-auto mr-6 sm:cursor-pointer"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0 }}
      >
        <Link to="/">
          <li className="hover:text-blue-600 transition-a">Home</li>
        </Link>

        <li className="hover:text-blue-600 transition-a">Menu</li>
        <li className="hover:text-blue-600 transition-a">About Us</li>
        <li className="hover:text-blue-600 transition-a">Service</li>
      </motion.ul>

      <div className="flex-align-center space-x-6">
        {/* Theme Toggle */}
        <div
          className={`toggle-btn w-10 h-5 rounded-full bg-orange-100 drop-shadow-lg relative cursor-pointer dark:bg-slate-700 ${
            darkMode && "active"
          }`}
          onClick={() => dispatch(toggleDarkMode())}
        >
          <div className="dot absolute w-3 h-3 rounded-full bg-orange-600 top-1/2 -translate-y-1/2 translate-x-1  transition-a"></div>
        </div>

        {/* Cart Icon */}
        <div
          className="relative sm:cursor-pointer"
          onClick={() => dispatch(openCartModal())}
        >
          <FiShoppingCart className="feather-shopping-cart text-xl text-muted" />
          {totalQuantity > 0 && (
            <span className="w-4 h-4 grid place-items-center rounded-full -top-2 -right-2  text-white bg-red-700 text-xs absolute">
              {totalQuantity}
            </span>
          )}
        </div>

        {/* Profile Avatar & Menu */}
        <div
          className="relative sm:cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.img
            src="./images/avatar.png"
            alt=""
            className="w-7 h-7 rounded-full drop-shadow-lg"
            whileTap={{ scale: 0.6 }}
          />

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.ul
              className="absolute top-full right-0 bg-white py-2 px-6 drop-shadow-md rounded-lg w-[160px] dark:bg-slate-800"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <Link to="/add">
                <li className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-a space-x-2 rounded-md flex-align-center">
                  <span> New Item</span> <BiPlus />
                </li>
              </Link>
              <Link to="/">
                <li className="md:hidden px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-a rounded-md">
                  Home
                </li>
              </Link>

              <li className="md:hidden px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-a rounded-md">
                Menu
              </li>
              <li className="md:hidden px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-a rounded-md">
                About Us
              </li>
              <li className="md:hidden px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-a rounded-md">
                Service
              </li>
              <li className="px-2 py-1 hover:bg-slate-100 transition-a rounded-md flex-align-center space-x-2 bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-700 md:bg-transparent md:mt-2">
                <span> Logout</span>
                <FiLogOut />
              </li>
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { cartStore, getTotals } from "./features/cartSlice";
import Home from "./Home";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  const { cartItems, darkMode } = useSelector(cartStore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  useEffect(() => {
    localStorage.setItem("food-app-redux", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="min-h-screen bg-slate-50 text-slate-700 dark:bg-darkBodyBg dark:text-slate-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;

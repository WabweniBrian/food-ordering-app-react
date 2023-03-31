import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const itemsFromLS = JSON.parse(localStorage.getItem("food-app-redux")) || [];

const initialState = {
  products: products,
  cartItems: itemsFromLS,
  totalQuantity: 0,
  totalAmount: 0,
  isCartModalOpen: false,
  darkMode: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCartModal: (state) => {
      state.isCartModalOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartModalOpen = false;
    },
    // Add items to cart list
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    // Toggle Amount
    toggleAmount: (state, action) => {
      state.cartItems = state.cartItems
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "increase") {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else if (action.payload.type === "decrease") {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity !== 0);
    },
    // Get totals
    getTotals: (state) => {
      state.totalQuantity = state.cartItems.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.quantity;
      }, 0);
      state.totalAmount = state.cartItems.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.quantity * cartItem.price;
      }, 0);
    },
    // Remove Item from cart
    removeItem: (state, action) => {
      const newsItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = newsItems;
    },
    // Clear all cart items
    clearCart: (state) => {
      state.cartItems = [];
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    rateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, rating: action.payload.rating };
        }
        return product;
      });
    },
  },
});

export default cartSlice.reducer;

export const cartStore = (state) => state.cart;

export const {
  openCartModal,
  closeCartModal,
  isCartModalOpen,
  addToCart,
  toggleAmount,
  getTotals,
  removeItem,
  clearCart,
  toggleDarkMode,
  rateProduct,
} = cartSlice.actions;

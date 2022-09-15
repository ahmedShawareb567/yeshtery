import { createContext } from "react";

export const initialState = {
  isToggle: false,
  cart: [],
};

export const cartContext = createContext(initialState);

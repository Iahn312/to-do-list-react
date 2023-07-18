import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: { todoSlice: todoReducer, uiSlice: uiReducer },
});

export default store;

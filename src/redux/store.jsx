// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust the path to your cartSlice file

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

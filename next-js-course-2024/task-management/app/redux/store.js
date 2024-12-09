/* import { configureStore } from '@reduxjs/toolkit';
import authReducer from "@/app/redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
}) */


import { configureStore } from '@reduxjs/toolkit';
import authReducer from "@/app/redux/slices/authSlice";
import { apiSlice } from "@/app/redux/slices/apiSlice"; // Adjust path as needed

export const store = configureStore({
  reducer: {
    auth: authReducer, // Your auth slice
    [apiSlice.reducerPath]: apiSlice.reducer, // Add the api slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add the api slice middleware
});


import { configureStore } from '@reduxjs/toolkit';
import authReducer from "@/app/redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
})

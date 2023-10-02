import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/redux/slices/userSlice';
import popupReducer from '@/redux/slices/popupSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        popupReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
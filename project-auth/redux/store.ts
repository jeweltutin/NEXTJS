import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/redux/slices/userSlice';
import popupReducer from '@/redux/slices/popupSlice';
import sliderReducer from  '@/redux/slices/sliderSlice';

export const store = configureStore({
    reducer: {
        userReducer,
        popupReducer,
        sliderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
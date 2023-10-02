import { createSlice } from "@reduxjs/toolkit";

type popupState = {
    data: any;
}

const initialState = {
    data: {
        show: false,
        type: '',
        message: ''
    }
} as popupState

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setPopup: (state, action) => {
            //console.log(action)
            state.data = action.payload
        }
    }
})

export const {setPopup} = popupSlice.actions;
export default popupSlice.reducer;
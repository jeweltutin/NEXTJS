//const createSlice = require('@reduxjs/toolkit').createSlice;

import { createSlice } from "@reduxjs/toolkit";


type InitialState ={
    numOfCakes: number
};

/* const initialState: InitialState = {
        numOfCakes: 10  
}  */
//or
const initialState: InitialState = {
    numOfCakes: 10  
} as InitialState

const cakeSlice = createSlice({
    name: 'cake',
    //initialState: initialState  //-- key and valu both are same so we can use
    initialState,
    reducers: {
        ordered: (state) => {
            //state.numOfCakes--
            state.numOfCakes = state.numOfCakes - 1
        },
        restocked: (state, action) => {
            //state.numOfCakes += action.payload
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions
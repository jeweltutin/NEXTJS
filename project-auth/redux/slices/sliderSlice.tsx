import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

/* interface Data {
    headingOne: string,
    headingTwo: string,
    image: string,
    link: string,
    priority: number,
    isActive: boolean,
    paragraph: string

} */

interface SliderState {
    getSliderData: {
        data: any,
        status: string
    },
    deleteSlide: {
        data: any,
        status: string
    }
}

const initialState: SliderState = {
    getSliderData: {
        data: [],
        status: ''
    },
    deleteSlide: {
        data:[],
        status: ''
    }
}

export const getSliderData = createAsyncThunk('slider/getSliderData', async (token) => {
    const { data } = await axios.get('http://localhost:5000/api/slide');
    //axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customers`);
    return data;
 })

 export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSliderData.pending, (state, action) => {
            const getSliderData = {
                data: [],
                status: 'loading'
            };
            state.getSliderData = getSliderData;
        });
        builder.addCase(getSliderData.fulfilled, (state, action) => {
            const getSliderData = {
                data: action.payload,
                status: 'success'
            };
            state.getSliderData = getSliderData;
        });
        builder.addCase(getSliderData.rejected, (state, action) => {
            const getSliderData = {
                data: [],
                status: 'failed'
            };
            state.getSliderData = getSliderData;
        });
    }
 })

 export default sliderSlice.reducer;
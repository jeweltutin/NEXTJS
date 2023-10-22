import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const API_URL = "http://localhost:5000/api/";

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
    const { data } = await axios.get('http://localhost:5000/api/slide/all');
    //axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customers`);
    return data;
 })

 export const createNewSlide = createAsyncThunk('slider/createNewSlide', async({ slideData }: any) => {
    //console.log(slideData);
     try {
        const { data } = await axios.post('http://localhost:5000/api/slide/add', slideData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });       
        console.log(data.message);
        return data.data;
    } catch (error) {
        console.log(error);
    }  
 })

 export const deleteSlide = createAsyncThunk('slider/deleteSlide', async( {id}:any ) => {
    try {
        const { data } = await axios.delete( API_URL + 'slide/' + id);
        return data;
    } catch (error) {
        return error;
    }
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
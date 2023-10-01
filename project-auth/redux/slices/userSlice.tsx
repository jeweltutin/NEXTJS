import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/";

interface UserInfo {
    name: String;
    email: String;
    token: String;
    role: String;
}

interface userState {
    userInfo: UserInfo;
    success: Boolean;
    status: String;
    getUserData: any;
}

/* let userInfoFromStorage;
if (typeof window !== "undefined") {
    userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo") as string) || "";
} */

// Define the initial state using that type
let userInfoFromStorage: any;
if (typeof window !== 'undefined') {
  // Perform localStorage action
  const userJson: any = localStorage.getItem('userInfo');
  userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(userJson)
    : null;
}

const initialState: userState = {
    userInfo: userInfoFromStorage,
    success: userInfoFromStorage ? true : false,
    status: userInfoFromStorage ? 'success' : 'loading',
    getUserData: []
}

export const userLogin = createAsyncThunk('user/userLogin', async ({ email, password }: any, { rejectWithValue }) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const { data } = await axios.post(API_URL + "user/login", { email, password }, config);
        if (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        return data;

    } catch (error) {
        return rejectWithValue(error);
    }
})

/* export const getUserData: any = createAsyncThunk('user/getUserData', async (token: any) => {
    const { data } = await axios.get('user/', {
        headers: { Authorization: `Bearer ${token}` },
    });

    return data;
}); */

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state:any) => {
            state.userInfo = {},
            state.success = false,
            localStorage.removeItem('userInfo')
        }
    },
    extraReducers: (builder) => {   
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.success = true;
            state.status = 'success';
            state.userInfo = payload;
        });
        builder.addCase(userLogin.rejected, (state) => {
            state.success = false;
            state.status = 'failed';
        });


/*         builder.addCase(getUserData.pending, (state) => {
            const getUserData = {
                data: [],
                status: 'loading',
            };
            state.getUserData = getUserData;
        });
        builder.addCase (getUserData.fulfilled, (state, {payload} ) => {
            const getUserData = {
                data: payload,
                status: 'success'
            };
            state.getUserData = getUserData;
        });
        builder.addCase(getUserData.rejected, (state) => {
            const getUserData = {
                data: [],
                status: 'failed'
            };
            state.getUserData = getUserData;
        }) */
    }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
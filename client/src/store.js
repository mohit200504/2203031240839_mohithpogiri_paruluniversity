import { configureStore, createSlice } from "@reduxjs/toolkit";

let tokenslice = createSlice({
    name: "token",
    initialState: null,  
    reducers: {
        setToken: (state, action) => {
           
           return action.payload;

          
        }
    }
});

let store = configureStore({
    reducer: {
        token: tokenslice.reducer
    }
});

export const { setToken } = tokenslice.actions;
export default store;

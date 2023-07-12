import { useRef } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scrollRef : "ME"
}

const scrollSlice = createSlice({

    name : 'scroll',
    initialState,
    reducers : {
        scrollTo : (state , actions) => {
            state.scrollRef = actions.payload;
        }
    }
})

export const {scrollTo} = scrollSlice.actions;

export default scrollSlice.reducer;
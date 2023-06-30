import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode : true,
}

const darkModeSlice = createSlice({

    name : 'darkMode',
    initialState ,
    reducers : {
        darkModeOnAction : (state) => {
            state.darkMode = true;
        },
        darkModeOffAction : (state) => {
            state.darkMode = false;
        }
    }
})

export const {darkModeOnAction , darkModeOffAction} = darkModeSlice.actions;

export default darkModeSlice.reducer;
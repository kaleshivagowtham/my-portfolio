import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/modal/darkModeSlice";

export const store = configureStore({

    reducer : {
        darkMode : darkModeReducer,
    },
})
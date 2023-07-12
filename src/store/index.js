import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/modal/darkModeSlice";
import scrollReducer from "../features/modal/scrollModelSlice";

export const store = configureStore({

    reducer : {
        darkMode : darkModeReducer,
        scroll : scrollReducer
    },
})
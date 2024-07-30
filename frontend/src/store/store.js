import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/counterSlice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})


export default store;
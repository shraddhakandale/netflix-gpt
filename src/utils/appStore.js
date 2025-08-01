import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        lang: configSlice,
    }   
})

export default appStore;
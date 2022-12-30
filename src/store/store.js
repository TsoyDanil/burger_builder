import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients.slice";


export const store = configureStore({
    reducer: {
        ingredients: ingredientsSlice.reducer
    },
    devTools: true
})
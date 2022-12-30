import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiBurger } from "../api/apiBurger";

const namespace = 'ingredients'

export const getIngredients = createAsyncThunk(
    `${namespace}/getIngredients`,
    async () => {
        return await apiBurger.getIngredients()
    }
)

export const ingredientsSlice = createSlice({
    name: namespace,
    initialState: {
        ingredients: [],
        basket: {},
        totalPrice: 200,
        loading: false,
        prices: {}
    },
    reducers: {
        addIngredient(state, action) {
            try {
                state.basket = {
                    ...state.basket, 
                    [action.payload]: state.basket[action.payload] + 1 || 1
                }
                state.totalPrice += state.prices[action.payload]
            } catch (err) {
                console.log(err);
            }
        },
        removeIngredient(state, action) {
            try {
                state.basket = {
                    ...state.basket, 
                    [action.payload]: state.basket[action.payload] > 0 
                    ? state.basket[action.payload] - 1 
                    : 0
                }
                state.totalPrice -= state.prices[action.payload]
            } catch (err) {
                console.log(err)
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getIngredients.pending, (state) => {
            state.loading = true
        })
        .addCase(getIngredients.rejected, (state) => {
            state.loading = false
        })
        .addCase(getIngredients.fulfilled, (state, action) => {
            state.loading = false
            state.ingredients = action.payload
            action.payload && action.payload.forEach(ing => {
                state.basket[ing.name] = 0
            })
            action.payload && action.payload.forEach(ing => {
                state.prices[ing.name] = ing.price
            })
        })
    }
})

export const {
    addIngredient,
    removeIngredient
} = ingredientsSlice.actions
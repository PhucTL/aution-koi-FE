import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice ({
    name: "category",
    initialState: {
        categories: {
            allCategories: null,
            isFetching: false,
            error: false
        }
    },

    reducers: {
        getCategoryStart: (state) => {
            state.categories.isFetching = true
        },
        getCategorySuccess: (state, action) => {
            state.categories.isFetching = false,
            state.categories.allCategories = action.payload
        },
        getCategoryFailed: (state) => {
            state.categories.isFetching = false,
            state.categories.error = true
        }
    }
})

export const {
    getCategoryStart,
    getCategorySuccess,
    getCategoryFailed
} = categorySlice.actions

export default categorySlice.reducer
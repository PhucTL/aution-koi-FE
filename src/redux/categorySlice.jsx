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
        getCategoriesStart: (state) => {
            state.categories.isFetching = true
        },
        getCategoriesSuccess: (state, action) => {
            state.categories.isFetching = false,
            state.categories.allCategories = action.payload
        },
        getCategoriesFailed: (state) => {
            state.categories.isFetching = false,
            state.categories.error = true
        }
    }
})

export const {
    getCategoriesStart,
    getCategoriesSuccess,
    getCategoriesFailed
} = categorySlice.actions

export default categorySlice.reducer
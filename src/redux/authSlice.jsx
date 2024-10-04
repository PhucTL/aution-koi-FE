import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice ({
    name: "auth",
    initialState: {
        login: {
            currentToken: null,
            isFetching: false,
            error: false
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
        },
        profile: {
            currentUser: null,
            isFetching: false,
            error: false      
        },
        logout: {
            isFetching: false,
            error: false         
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false,
            state.login.currentToken = action.payload,
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetching = false,
            state.login.error = true
        },

        registerStart: (state) => {
            state.register.isFetching = true
        },
        registerSuccess: (state) => {
            state.register.isFetching = false,
            state.register.error = false,
            state.register.success = true
        },
        registerFailed: (state) => {
            state.register.isFetching = false,
            state.register.error = true,
            state.register.success = false
        },

        getProfileStart: (state) => {
            state.profile.isFetching = true
        },
        getProfileSuccess: (state, action) => {
            state.profile.isFetching = false,
            state.profile.currentUser = action.payload
        },
        getProfileFailed: (state) => {
            state.profile.isFetching = false,
            state.profile.error = true
        },

        logoutStart: (state) => {
            state.logout.isFetching = true
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false,
            state.login.currentToken = null,
            state.profile.currentUser = null,
            state.logout.error = false
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false,
            state.logout.error = true
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,

    registerStart,
    registerSuccess,
    registerFailed,

    getProfileStart,
    getProfileSuccess,
    getProfileFailed,
    
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions

export default authSlice.reducer
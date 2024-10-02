import axios from "axios";
import { getProfileFailed, getProfileStart, getProfileSuccess, loginFailed, loginStart, loginSuccess, logoutStart, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getCategoryFailed, getCategoryStart, getCategorySuccess } from "./categorySlice";

export const loginPayload = async (payload, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", payload)
        dispatch(loginSuccess(res.data))
        getUserProfile(res.data.access_token, dispatch, navigate)
    } catch (err) {
        dispatch(loginFailed())
    } 
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post("https://api.escuelajs.co/api/v1/users/", user)
        dispatch(registerSuccess())
        navigate("/login")
    } catch (err) {
        dispatch(registerFailed())
    }
}

export const getUserProfile = async (accessToken, dispatch, navigate) => {
    dispatch(getProfileStart())
    try{
        const res = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        dispatch(getProfileSuccess(res.data))
        navigate("/")
    } catch (err) {
        dispatch(getProfileFailed())
    }
} 

export const getAllCategories = async (dispatch) => {
    dispatch(getCategoryStart())
    try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/categories/")
        dispatch(getCategorySuccess(res.data))
    } catch (err) {
        dispatch(getCategoryFailed())
    }
}

export const logOut = async (dispatch, navigate) => {
    dispatch(logoutStart())
    try{
        // await axios.
    } catch (err) {

    }
}
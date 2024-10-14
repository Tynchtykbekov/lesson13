 import { createSlice } from "@reduxjs/toolkit";
 export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,

    },
    reducers: {
login: (state) => {
state.isAuth = !state.isAuth

},
logout: (state) => {
state.isAuth = !state.isAuth
}
    }
 })
 export const {login, logout} = authSlice.actions

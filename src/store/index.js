 import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { authSlice } from "./authSlice";
 export const store = configureStore({
    reducer: {
        count: counterSlice.reducer,
        auth: authSlice.reducer
    }

 })
 

// import {legacy_createStore, combineReducers} from 'redux'
// import { countreReducer } from './counterReducer'
// const rootStore = combineReducers({

//     count: countreReducer,
// })
// export const store =  legacy_createStore(rootStore)

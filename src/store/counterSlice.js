import { createSlice } from "@reduxjs/toolkit"
// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         counter: 0,
//         toggle: false
//     },
//     reducers: {
// toggle: (state) => {


// state.toggle = !state.toggle
// },
// increment(state) {
//     state.counter = state.counter + 1
// },
// decrement(state) {
//     state.counter = state.counter - 1
// },
// increase(state, action) {
//     state.counter = state.counter + action.payload
// }


//     }

    

// })

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    toggle: false
    },
    reducers: {
        toggle: (state) => {
state.toggle = !state.toggle
        },
        increment: (state) => {
            state.counter = state.counter + 1
        },
        decrement: (state) => {
            state.counter = state.counter - 1

        },
        increase: (state,action) => {
            state.counter = state.counter + action.payload
        }, 
        decrease: (state, action) => {
            state.counter = state.counter - action.payload
        }
    }
})
// export const actions = counterSlice.actions
export const {toggle, increment, decrement, increase, decrease} = counterSlice.actions 
import {createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "CounterSlice",
    initialState:{
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    },
    reducers:{
        incrementCounter: (state,action)=>{ // {type: 'incrementCounter',payload:{x:10}}
            state.counter = state.counter + action.payload.x;
        },
        incrementEvenCounter: (state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        incrementOddCounter: (state,action)=>{
            state.oddCounter = state.oddCounter + 2;
        }

    }
})
export const {incrementCounter,incrementEvenCounter,incrementOddCounter} = slice.actions;
export default slice.reducer;
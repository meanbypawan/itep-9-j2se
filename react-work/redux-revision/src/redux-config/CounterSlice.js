import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "CounterSlice",
    initialState:{
        evenCounter: 0,
        oddCounter: 1
    },
    reducers:{
        incrementEvenCounter: (state,action)=>{
            state.evenCounter = state.evenCounter + 2;
        },
        incrementOddCounter: (state,action)=>{
            state.oddCounter = state.oddCounter + 2;
        }
    }
});

console.log(slice.reducer);
export const {incrementEvenCounter,incrementOddCounter} = slice.actions;
export default slice.reducer;
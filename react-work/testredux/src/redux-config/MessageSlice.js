import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MessageSlice",
    initialState:{
        m1: "Hello",
        m2: "Welcome"
    }
});

console.log(slice.reducer);
export default slice.reducer;
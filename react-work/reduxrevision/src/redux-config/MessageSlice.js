import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "MessageSlice",
    initialState:{
        m1: "Hello....",
        m2: "Hi........",
        m3: "Welcome...."
    }
});

export default slice.reducer;
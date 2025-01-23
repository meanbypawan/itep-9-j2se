import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  fetchCategory = createAsyncThunk("CategorySlice/fetchCategory",async()=>{
    let response = await axios.get("https://dummyjson.com/products/categories");
    return response.data;
});

const slice = createSlice({
    name:"CategorySlice",
    initialState:{
        categoryList: [],
        isLoading: false,
        error: null
    },
    reducers:{
      removeCategory : (state,action)=>{
        let index =  state.categoryList.findIndex((category)=>{return category.name = action.payload});
        state.categoryList.splice(index,1);
      }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategory.pending,(state,action)=>{
            state.isLoading = true
        }).addCase(fetchCategory.fulfilled,(state,action)=>{
           state.categoryList = action.payload;
           state.isLoading = false;
        }).addCase(fetchCategory.rejected,(state,action)=>{
           state.isLoading = false;
           state.error = "Oops! something went wrong"
        });
    }
});

// console.log(slice.reducer);
export const {removeCategory} = slice.actions;
export default slice.reducer;





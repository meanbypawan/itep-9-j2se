import { createSlice } from "@reduxjs/toolkit";
import Data from "./CategoryJson";
const slice = createSlice({
    name: "CategorySlice",
    initialState:{
        categoryList: Data
    },
    reducers:{
        removeCategory: (state,action)=>{
         if(window.confirm("Do you want to delete it ?")){   
          let slug = action.payload;
          let index = state.categoryList.findIndex((c)=>{return c.slug == slug});
          state.categoryList.splice(index,1);
         }
        }
    }
})
export const {removeCategory} = slice.actions;
export default slice.reducer;
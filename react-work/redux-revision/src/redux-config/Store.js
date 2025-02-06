import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import CategorySlice from "./CategorySlice";
const store = configureStore({
    reducer:{
        DataCounter: CounterSlice,
        CategoryData: CategorySlice
    }
});

//console.log(store.DataCounter);
export default store;
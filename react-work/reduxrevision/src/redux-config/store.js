import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer:{
        WishingMessages: MessageSlice,
        Category: CategorySlice
    }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer:{
        WishingMessages: MessageSlice,
        DataCounter: CounterSlice
    }
});

/*
 Store is state container

 WishingMessage: {m1:"Hello", m2: "Welcome"}
 DataCounter: {
        counter: 100,
        evenCounter: 0,
        oddCounter: 1
    }
 */
export default store;
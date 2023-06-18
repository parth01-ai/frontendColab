import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slicer/reserveSlicer";

const store = configureStore({
    reducer,
});

export default store;
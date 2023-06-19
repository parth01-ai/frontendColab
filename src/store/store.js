import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slicer/reserveSlicer";
import BusReducer from "../slicer/BusRedux/busesSlice"

const store = configureStore({
    reducer: {
        seat: reducer,
        bus : BusReducer
      },
});

export default store;
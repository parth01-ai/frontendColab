import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
    seats : [
        { id: 1, seatNumber: '1AW', isReserved: false, isSelected: false },
        { id: 2, seatNumber: '2A', isReserved: false, isSelected: false },
        { id: 3, seatNumber: '3A', isReserved: false, isSelected: false },
        { id: 4, seatNumber: '1BW', isReserved: false, isSelected: false },
        { id: 5, seatNumber: '2B', isReserved: false, isSelected: false },
    ]
};

export const reserveSlicer = createSlice({
    name :  'RESERVE',
    initialState,
    reducers : {
        setLoginState(state , action){
            state.loginState = !state.loginState
        },
    }
});

export const { setLoginState } = reserveSlicer.actions;
export default reserveSlicer.reducer;
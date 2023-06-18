import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginState : false,
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
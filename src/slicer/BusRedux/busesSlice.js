import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { busService } from "./busesService";

export const getBuses = createAsyncThunk("bus/get", async (thunkAPI) => {
  try {
    return await busService.getBuses();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  Bus: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const busesSlice = createSlice({
  name: "Bus",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBuses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBuses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Bus = action.payload;
      })
      .addCase(getBuses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default busesSlice.reducer;

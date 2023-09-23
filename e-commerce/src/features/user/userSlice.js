import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchLoggedInUserOrders } from './userAPI';

const initialState = {
  userOrders:[],
  status: 'idle',
};

export const fetchLoggedInUserOrdersAsync= createAsyncThunk(
  'user/fetchLoggedInUser',
 
  async (id) => {
    console.log(id);
    const response = await fetchLoggedInUserOrders(id);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLoggedInUserOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userOrders = action.payload;
        console.log(state.userOrders);
      });
  },
});

export const selectUserOrders = (state)=>state.user.userOrders;

export const { increment } = userSlice.actions;

export default userSlice.reducer;

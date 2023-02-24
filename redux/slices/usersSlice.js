import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLoading: false
  },
  reducers: {
    getUsers: (state) => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action) => {
        state.data = action.payload
        state.isLoading = false
    }
  },
});

export const { getUsers, getUsersSuccess } = usersSlice.actions;

export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users : [],
        loading : false,
    },
    reducers :{
        fetchUserData : (state) => {
            state.loading = true;
        },
        fetchUserDataSuccess : (state,action) => {
            state.users = action.payload;
            state.loading = false;
        },
        fetchUserDataFailure : (state) => {
            state.loading = false;
        },
    }
})

export const { fetchUserData,fetchUserDataSuccess,fetchUserDataFailure } = usersSlice.actions;

export default usersSlice.reducer;
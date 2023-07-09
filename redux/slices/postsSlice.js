import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts : [],
        loading : false,
    },
    reducers :{
        fetchPostData : (state) => {
            state.loading = true;
        },
        fetchPostDataSuccess : (state,action) => {
            state.users = action.payload;
            state.loading = false;
        },
        fetchPostDataFailure : (state) => {
            state.loading = false;
        },
    }
})

export const { fetchPostData,fetchPostDataSuccess,fetchPostDataFailure } = postsSlice.actions;

export default postsSlice.reducer;
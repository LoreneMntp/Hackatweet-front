import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const tweetSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {
        addTweet: (state, action) => {
            state.value.push(action.payload);
        },
        initTweet: (state, action) => {
            state.value = action.payload;
        },
        removeTweet: (state, action) => {
            state.value.filter((tweet) => tweet._id != action.payload.tweetID);
        },
    },
});

export const { addTweet, removeTweet, initTweet } = tweetSlice.actions;
export default tweetSlice.reducer;

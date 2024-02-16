import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const trendSlice = createSlice({
    name: "trends",
    initialState,
    reducers: {
        addTrend: (state, action) => {
            state.value.push(action.payload);
        },
        initTrends: (state, action) => {
            state.value = action.payload;
        },
        removeTweet: (state, action) => {
            state.value.filter((tweet) => tweet._id != action.payload.tweetID);
        },
    },
});

export const { addTrend, initTrends, removeTweet } = trendSlice.actions;
export default trendSlice.reducer;

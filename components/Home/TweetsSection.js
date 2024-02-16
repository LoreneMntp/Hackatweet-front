import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import { useDispatch, useSelector } from "react-redux";
import { initTweet } from "../../reducers/tweets";
export default function TweetsSection() {
    const tweets = useSelector((state) => state.tweets.value);
    const usersInfos = useSelector((state) => state.users.value);
    //console.log(tweets);
    const dispatch = useDispatch();
    async function getTweets() {
        const res = await fetch(
            "https://hackatweet-backend-brown.vercel.app/tweets/getTweets"
        );
        const data = await res.json();
        //console.log("data from api", data.tweets);
        dispatch(initTweet(data.tweets));
    }

    useEffect(() => {
        getTweets();
    }, []);

    return (
        tweets &&
        tweets

            .slice()
        .reverse()
            .map((tweet) => {
                return <Tweet {...tweet} />;
            })
    );
}

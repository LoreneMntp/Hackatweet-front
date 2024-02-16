import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { initTweet } from "../../reducers/tweets";
import Link from "next/link";
import moment from "moment";
export default function Tweet(props) {
    //console.log("tweet props", props);
    //console.log(props.tweetedBy.username);
    const usersInfos = useSelector((state) => state.users.value);
    console.log(usersInfos);
    const dispatch = useDispatch();
    const isLiked = props.likedBy.some(
        (user) => user.username === usersInfos.username
    );

    const time = moment(props.createdAt).fromNow();

    const formatHashtags = props.content.split(/\s+/).map((word, index) => {
        if (word.startsWith("#")) {
            return (
                <Link href={`/trends/${word.substring(1)}`}>
                    <span
                        key={index}
                        className="text-sky-400 font-bold cursor-pointer"
                    >
                        {word}{" "}
                    </span>
                </Link>
            );
        } else {
            return word + " ";
        }
    });

    async function handleDelete() {
        const res = await fetch(
            "https://hackatweet-backend-brown.vercel.app/tweets/removeTweet",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usersInfos.username,
                    token: usersInfos.token,
                    tweetId: props._id,
                }),
            }
        );
        const data = await res.json();

        if (data.result === true) {
            dispatch(initTweet(data.tweets));
        } else {
            alert(data.error);
        }
    }
    async function handleClickLikeTweet() {
        const res = await fetch(
            "https://hackatweet-backend-brown.vercel.app/tweets/likeTweet",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usersInfos.username,
                    token: usersInfos.token,
                    tweetId: props._id,
                }),
            }
        );
        const data = await res.json();

        if (data.result === true) {
            dispatch(initTweet(data.tweets));
        } else {
            alert(data.error);
        }
    }
    return (
        <div className="border-b border-slate-400 flex flex-col py-4 pl-4 gap-4">
            <div className="flex items-center ">
                <img
                    src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${props.tweetedBy.username}`}
                    alt="avatar"
                    className="h-[35px] rounded-full"
                />
                <span className="text-white font-bold text-base ml-4">
                    {props.tweetedBy.username.charAt(0).toUpperCase() +
                        props.tweetedBy.username.slice(1)}
                </span>
                <span className="text-slate-500 ml-2">
                    {`@` + props.tweetedBy.username}
                </span>
                <span className="text-slate-500 ml-2">-</span>
                <span className="text-slate-500 ml-2">{time}</span>
            </div>
            <div className="">
                <p className="text-white text-sm">{formatHashtags}</p>
            </div>
            <div className="flex gap-2 items-center">
                <FaHeart
                    className={
                        isLiked
                            ? "text-red-600 cursor-pointer"
                            : "text-white cursor-pointer"
                    }
                    onClick={handleClickLikeTweet}
                />
                <span className="text-white text-sm">
                    {props.likedBy.length}
                </span>
                {props.tweetedBy.username === usersInfos.username && (
                    <FaTrash
                        className="text-white hover:text-sky-500 hover:cursor-pointer"
                        onClick={handleDelete}
                    />
                )}
            </div>
        </div>
    );
}

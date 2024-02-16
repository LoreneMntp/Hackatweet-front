import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initTweet } from "../../reducers/tweets";
export default function AddTweet() {
    const [inputTweet, setInputTweet] = useState("");
    const dispatch = useDispatch();
    const usersInfos = useSelector((state) => state.users.value);
    function handleChangeInputTweet(event) {
        setInputTweet(event.target.value);
    }

    async function handleClickAddTweet() {
        const res = await fetch("http://localhost:3000/tweets/addTweet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usersInfos.username,
                token: usersInfos.token,
                content: inputTweet,
            }),
        });
        const data = await res.json();

        if (data.result === true) {
            dispatch(initTweet(data.tweets));
            setInputTweet("");
        } else {
            alert(data.error);
            setInputTweet("");
        }
    }
    return (
        <div className="flex justify-center flex-col items-center">
            <textarea
                className="w-2/3 border-b border-white bg-transparent mb-2 text-white"
                placeholder="What's up?"
                value={inputTweet}
                onChange={handleChangeInputTweet}
                maxLength={280}
            />
            <div className="w-2/3 flex justify-end items-center mt-2">
                <span className="text-white font-medium">
                    {inputTweet.length}/280
                </span>
                <button
                    className="ml-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full text-sm"
                    onClick={handleClickAddTweet}
                >
                    Tweet
                </button>
            </div>
        </div>
    );
}

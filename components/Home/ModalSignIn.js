import { FaTwitter } from "react-icons/fa";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/users";

export default function ModalSignIn({ showModalSignIn, setShowModalSignIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function handleSubmitSignIn() {
        if (username && password) {
            const res = await fetch(
                "https://hackatweet-backend-brown.vercel.app/users/signin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
            );

            const data = await res.json();

            if (data.result === true) {
                dispatch(
                    login({
                        username: username,
                        token: data.token,
                        name: data.name,
                    })
                );
                setPassword("");
                setUsername("");
            } else {
                alert(data.error);
            }
        }
    }

    return (
        showModalSignIn && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
                <div className="w-500 bg-slate-800 rounded-lg p-10 flex flex-col justify-center items-center gap-3">
                    <FaTwitter size={50} fill="white" className="rotate-180" />
                    <h2 className="text-white font-bold text-xl">
                        Create your hackatweet account
                    </h2>

                    <input
                        type="text"
                        required
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-transparent border border- rounded-sm w-200 py-1 px-2 text-white placeholder:text-slate-400"
                    />
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent border border- rounded-sm w-200 py-1 px-2 text-white placeholder:text-slate-400"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleSubmitSignIn}
                            className="w-200 rounded-full bg-sky-500 text-white hover:bg-sky-600 font-bold text-sm py-1 px-2"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setShowModalSignIn(false)}
                            className="w-200 rounded-full bg-white hover:bg-slate-400 text-slate-950 font-bold text-sm py-1 px-2"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

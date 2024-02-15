import React from "react";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";
import ModalSignUp from "../Home/ModalSignUp";
import ModalSignIn from "./ModalSignIn";
export default function HeroPage() {
    const [showModalSignUp, setShowModalSignUp] = useState(false);
    const [showModalSignIn, setShowModalSignIn] = useState(false);
    return (
        <div className="min-h-screen flex flex-col">
            <ModalSignUp
                showModalSignUp={showModalSignUp}
                setShowModalSignUp={setShowModalSignUp}
            />
            <ModalSignIn
                showModalSignIn={showModalSignIn}
                setShowModalSignIn={setShowModalSignIn}
            />
            <div className="flex-grow flex">
                <div className="w-1/2 bg-base-300 flex  items-center bgimg"></div>
                <div className="w-1/2 bg-[#0f172a] flex flex-col  pl-20">
                    <div>
                        <FaTwitter
                            size={100}
                            className="rotate-180 mt-10"
                            fill="white"
                        />
                    </div>
                    <div className="text-white">
                        <h1 className="text-7xl font-bold mt-40">
                            See what's happening
                        </h1>
                        <h2 className="font-medium text-4xl mt-8">
                            Join Hackatweet today
                        </h2>
                        <div className="flex flex-col gap-4 mt-4">
                            <button
                                className="bg-sky-500 hover:bg-sky-700 duration-300 w-[180px] h-[30px] rounded-full font-bold text-sm"
                                onClick={() => setShowModalSignUp(true)}
                            >
                                SignUp
                            </button>
                            <span className="text-white font-bold">
                                Already have an account ?{" "}
                            </span>
                            <button
                                onClick={() => setShowModalSignIn(true)}
                                className="bg-sky-500 border border-white text-sky-500 hover:text-sky-800 bg-transparent w-[180px] h-[30px] rounded-full font-bold text-sm"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

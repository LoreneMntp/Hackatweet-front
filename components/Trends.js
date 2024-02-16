import { useSelector } from "react-redux";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import TweetsByTrendSection from "./Trends/TweetsByTrendSection";
import { logout } from "../reducers/users";
import { useDispatch } from "react-redux";
import TrendsSection from "../components/Home/TrendsSection";
import { initTweet } from "../reducers/tweets";
import InputTrend from "../components/Trends/InputTrend";
import { useRouter } from "next/router";
export default function Trends({ trend }) {
    const usersInfos = useSelector((state) => state.users.value);
    const router = useRouter();
    if (!usersInfos.token) {
        router.push(`/`);
    }
    const dispatch = useDispatch();
    async function getTweetByTrend() {
        const res = await fetch(
            `http://localhost:3000/tweets/getTweetsByTrend/${trend}`
        );
        const data = await res.json();
        if (data.result === true) {
            dispatch(initTweet(data.tweets[0].tweets));
        } else {
            alert(data.error);
        }
    }
    useEffect(() => {
        getTweetByTrend();
    }, [trend]);
    return (
        <div className="flex flex-grow bg-[#0f172a] h-screen">
            <div className="w-3/12 flex flex-col justify-between border-r border-slate-400">
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <div className="flex justify-center items-center hover:cursor-pointer ">
                            <FaTwitter
                                size={50}
                                className="rotate-180 mt-2 ml-2 hover:text-slate-200 text-white cursor-pointer"
                            />

                            <h1 className="text-white hover:text-slate-200 font-bold text-3xl ml-2">
                                HACKATWEET
                            </h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <div className="flex mb-2 mx-4 gap-2 items-center">
                        <img
                            src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${usersInfos.username}`}
                            alt="avatar"
                            className="h-[35px] rounded-full"
                        />
                        <div>
                            <div className="flex flex-col">
                                <span className="text-white text-base font-bold">
                                    {usersInfos.username}
                                </span>
                                <span className="text-slate-400">
                                    {`@` + usersInfos.username}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button
                        className="border border-white rounded-full w-[15rem] text-white font-bold"
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="w-6/12 flex flex-col overflow-scroll py-2">
                <div className="border-b border-slate-400 px-4 py-8">
                    <h2 className="text-white font-bold text-2xl ">Hashtag</h2>
                    <InputTrend trend={trend} />
                </div>
                <div>
                    <TweetsByTrendSection trend={trend} />
                </div>
            </div>
            <div className="w-3/12 flex flex-col justify-between border-l border-gray-500 py-2">
                <div className="border-b border-slate-400 px-4 py-8">
                    <h2 className="text-white font-bold text-2xl ">Trends</h2>
                    <TrendsSection />
                </div>
            </div>
        </div>
    );
}

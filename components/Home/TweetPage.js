import { useSelector } from "react-redux";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AddTweet from "./AddTweet";
import { logout } from "../../reducers/users";
import { useDispatch } from "react-redux";
import TweetsSection from "./TweetsSection";
import TrendsSection from "./TrendsSection";
import { initTrends } from "../../reducers/trends";
export default function TweetPage() {
    const usersInfos = useSelector((state) => state.users.value);
    //console.log(usersInfos);
    const tweets = useSelector((state) => state.tweets.value);
    const dispatch = useDispatch();
    async function getTrends() {
        const res = await fetch(
            "https://hackatweet-backend-brown.vercel.app/tweets/getTrends"
        );
        const data = await res.json();
        //console.log(data);
        if (data.result === true) {
            dispatch(initTrends(data.trends));
            //console.log("fetch trends", data.trends);
        } else {
            alert(data.error);
        }
    }
    useEffect(() => {
        getTrends();
    }, [tweets]);
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
                <div className="w-full bg-slate-900">
                    <div className="flex gap-2 items-center ">
                        <img
                            src={`https://api.dicebear.com/7.x/big-ears-neutral/svg?seed=${usersInfos.username}`}
                            alt="avatar"
                            className="h-[35px] rounded-full"
                        />
                        <div>
                            <div className="flex flex-col">
                                <span className="text-white text-base font-bold">
                                    {usersInfos.name.charAt(0).toUpperCase() +
                                        usersInfos.name.slice(1)}
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
                    <h2 className="text-white font-bold text-2xl ">Home</h2>
                    <AddTweet />
                </div>
                <div>
                    <TweetsSection />
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

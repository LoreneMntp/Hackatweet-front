import { useSelector } from "react-redux";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import AddTweet from "./AddTweet";
import { logout } from "../../reducers/users";
import { useDispatch } from "react-redux";
export default function TweetPage() {
    const usersInfos = useSelector((state) => state.users.value);
    const dispatch = useDispatch();
    useEffect(() => {}, []);
    return (
        <div className="flex flex-grow bg-[#0f172a] h-screen">
            <div className="w-3/12 flex flex-col justify-between">
                <div>
                    <Link href="/">
                        <FaTwitter
                            size={50}
                            className="rotate-180 mt-2 ml-2 hover:text-slate-200 text-white cursor-pointer"
                        />
                    </Link>
                </div>
                <div>
                    <div className="flex mb-2 mx-4 gap-2 items-center">
                        <img
                            src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${usersInfos.username}`}
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
            <div className="w-6/12 flex flex-col bg-slate-800 overflow-scroll px-4 py-2">
                <h2 className="text-white font-bold text-2xl ">Home</h2>
                <AddTweet />
            </div>
            <div className="w-3/12 flex flex-col justify-between bg-orange-400"></div>
        </div>
    );
}

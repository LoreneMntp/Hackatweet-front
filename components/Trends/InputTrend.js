import { useState } from "react";
import { useRouter } from "next/router";

export default function InputTrend({ trend }) {
    const [inputTrend, setInputTrend] = useState(trend);
    const router = useRouter();

    function handleClickSearch() {
        router.push(`/trends/${inputTrend}`);
    }

    return (
        <div className="flex justify-center items-center mt-4">
            <input
                className="w-2/3 border p-1 border-white bg-transparent rounded-md text-slate-300"
                placeholder="Search: #hackatweet"
                type="text"
                value={inputTrend}
                onChange={(e) => setInputTrend(e.target.value)}
            />
            <div className="">
                <button
                    className="ml-2 bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full text-sm"
                    onClick={handleClickSearch}
                >
                    Search #
                </button>
            </div>
        </div>
    );
}

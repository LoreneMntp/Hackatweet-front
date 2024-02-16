import Tweet from "../Home/Tweet";
import { useSelector } from "react-redux";
import TweetTrend from "./TweetTrend";

export default function TweetsByTrendSection(props) {
    // Récupérez les données des tweets depuis le state
    const tweets = useSelector((state) => state.tweets.value);

    //console.log("DATA TREND SECTION =>", tweets);

    return (
        <div>
            {tweets.length > 0 ? (
                tweets.reverse().map((tweet) => (
                    <TweetTrend
                        key={tweet._id}
                        {...tweet}
                        trend={props.trend}
                    />
                ))
            ) : (
                <p className="text-white font-bold p-2">
                    No result for: #{props.trend}{" "}
                </p>
            )}
        </div>
    );
}

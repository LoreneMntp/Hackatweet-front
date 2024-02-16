import React, { useState, useEffect } from "react";
import TrendTag from "./TrendTag";
import { useSelector } from "react-redux";
export default function TrendsSection() {
    const trends = useSelector((state) => state.trends.value);
    //console.log(trends);

    return (
        <div className="bg-slate-800 p-2 rounded-sm flex flex-col gap-4">
            {trends.length > 0 ? (
                trends.map((trend) => {
                    const count = trend.tweets.length;
                    return <TrendTag title={trend.name} count={count} />;
                })
            ) : (
                <p className="text-white font-bold p-2">No trends.</p>
            )}
        </div>
    );
}

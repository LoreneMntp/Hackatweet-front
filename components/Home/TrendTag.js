import React, { useState } from "react";
import Link from "next/link";
export default function TrendTag({ title, count }) {
    const formatedTrend = title.substring(1);
    return (
        <Link href={`/trends/${formatedTrend}`}>
            <div className="rounded-md text-white hover:bg-slate-700 duration-150 hover:cursor-pointer p-2">
                <div className="flex flex-col">
                    <span className="text-lg font-bold">{title}</span>
                    <span className="text-sm text-slate-400">
                        {count <= 1 ? count + " tweet" : count + " tweets"}
                    </span>
                </div>
            </div>
        </Link>
    );
}

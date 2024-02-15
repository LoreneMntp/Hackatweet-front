import React, { useState } from "react";

export default function AddTweet() {
    return (
        <div>
            <input
                className="w-full border border-white bg-transparent"
                placeholder="What's up?"
            />
        </div>
    );
}

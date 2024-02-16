import React, { useState } from "react";
import Trends from "../../components/Trends";
import { useRouter } from "next/router";

export default function TrendsPage() {
    const router = useRouter();
    const trend = router.query.trend;
    console.log(trend);
    return <Trends trend={trend} />;
}

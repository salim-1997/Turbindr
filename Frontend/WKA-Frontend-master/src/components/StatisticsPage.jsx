import React from "react";
import FirstStat from "./stats/FirstStat";
import SecondStat from './stats/SecondStat';
import ThirdStat from './stats/ThirdStat';
function StatisticsPage() {
    return <div style={{ textAlign: "center" }}>
        <FirstStat />
        <SecondStat />
        <ThirdStat />
    </div>
};

export default StatisticsPage;
import React from "react";
import EChartsReact from "echarts-for-react";
import {barChart, stackedAreaChart} from "mocks";
export default function Chart() {
    return (
        <div className="flex space-x-20 h-[500px]">
            <EChartsReact
                option={stackedAreaChart}
                className="flex !h-full w-full [&>*]:!h-full"
                notMerge
                lazyUpdate
            />
            <EChartsReact
                option={barChart}
                className="flex !h-full w-full [&>*]:!h-full"
                notMerge
                lazyUpdate
            />
        </div>
    )
}
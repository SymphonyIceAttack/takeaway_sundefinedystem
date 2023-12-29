'use client'
import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
} from 'recharts'
import { PriceAnalysisDataItemtype } from '../../reqDataAnalysis'

interface Props {
    PriceAnalysisData: PriceAnalysisDataItemtype[]
}
const index: React.FC<Props> = ({ PriceAnalysisData }) => {
    return (
        <ResponsiveContainer className="h-full w-full">
            {PriceAnalysisData.length > 0 ? (
                <AreaChart
                    data={PriceAnalysisData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Area
                        label={'销售量'}
                        type="monotone"
                        dataKey="soldTotal"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                </AreaChart>
            ) : (
                <></>
            )}
        </ResponsiveContainer>
    )
}

export default index

'use client'
import React, { useEffect, useState } from 'react'

import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

import { analyzeSalesItemType } from '../../reqDataAnalysis'

interface Props {
    analyzeSales: analyzeSalesItemType[]
}

const index: React.FC<Props> = ({ analyzeSales }) => {
    return (
        <ResponsiveContainer className="  h-full w-full">
            {analyzeSales.length > 0 ? (
                <LineChart data={analyzeSales}>
                    <XAxis
                        dataKey="sold_total_last_at"
                        interval="preserveStartEnd"
                        tick={{ transform: 'translate(0, 6)' }}
                        ticks={[
                            analyzeSales[0]['sold_total_last_at'],
                            analyzeSales[analyzeSales.length - 1][
                                'sold_total_last_at'
                            ],
                        ]}
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={60} />
                    <Line
                        dot={false}
                        type="monotone"
                        dataKey="mean"
                        stroke="#ff1053"
                        strokeWidth={3}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        name="均值"
                    />
                </LineChart>
            ) : (
                <></>
            )}
        </ResponsiveContainer>
    )
}

export default index

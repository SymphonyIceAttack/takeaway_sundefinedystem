'use client'

import React from 'react'
import { AreaSalesItemType } from '../../reqDataAnalysis'
import {
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    Legend,
    Cell,
} from 'recharts'

interface Props {
    AreaSales: AreaSalesItemType[]
}
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const valueFormatter = (number: number) =>
    `$ ${Intl.NumberFormat('ja-JP').format(number).toString()}`
const index: React.FC<Props> = ({ AreaSales }) => {
    return (
        <ResponsiveContainer className="h-full w-full">
            {AreaSales.length > 0 ? (
                <PieChart>
                    <Legend verticalAlign="top" height={36} />
                    <Pie
                        className="stroke-tremor-background dark:stroke-dark-tremor-background"
                        data={AreaSales}
                        dataKey="sum"
                        nameKey="AreaTitle"
                        cx="50%"
                        cy="50%"
                        outerRadius={'100%'}
                        fill="#8884d8"
                        strokeLinejoin="round"
                        label={renderCustomizedLabel}
                        legendType="line">
                        {AreaSales.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        wrapperStyle={{ outline: 'none' }}
                        formatter={valueFormatter}
                    />
                </PieChart>
            ) : (
                <></>
            )}
        </ResponsiveContainer>
    )
}

export default index

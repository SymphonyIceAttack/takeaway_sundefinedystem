'use client'
import React from 'react'
import TakeDataTitle from './Components/TakeDataTitle'

import { useDataAnalysisHook } from './useDataAnalysis.hook'
import AnalyaSaleLineChart from './Components/AnalyaSaleLineChart'
import AreaSalesPipChart from './Components/AreaSalesPipChart'
import PriceChart from './Components/PriceChart'
const page = () => {
    const [analyzeSales, AreaSales, PriceAnalysisData, AllProductList] =
        useDataAnalysisHook()
    return (
        <div className={'p-4'}>
            <TakeDataTitle />
            <div className={'flex'}>
                <div className={'h-48 flex-1'}>
                    <AnalyaSaleLineChart analyzeSales={analyzeSales} />
                </div>
                <div className={'h-48 flex-1'}>
                    <AreaSalesPipChart AreaSales={AreaSales} />
                </div>
                <div className={'h-48 flex-1'}>
                    <PriceChart PriceAnalysisData={PriceAnalysisData} />
                </div>
            </div>
        </div>
    )
}

export default page

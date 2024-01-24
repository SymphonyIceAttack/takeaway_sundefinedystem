'use client'
import React from 'react'
import TakeDataTitle from './Components/TakeDataTitle'

import { useDataAnalysisHook } from './useDataAnalysis.hook'
import AnalyaSaleLineChart from './Components/AnalyaSaleLineChart'
import AreaSalesPipChart from './Components/AreaSalesPipChart'
import PriceChart from './Components/PriceChart'
import { Skeleton } from '@nextui-org/react'
const page = () => {
    const [
        isLoading,
        analyzeSales,
        AreaSales,
        PriceAnalysisData,
        AllProductList,
    ] = useDataAnalysisHook()
    return (
        <div className={'p-4'}>
            <TakeDataTitle />
            <div className={'flex flex-col gap-4'}>
                <div className={'h-48  '}>
                    {isLoading ? (
                        <Skeleton className="h-[100%]  rounded-lg"></Skeleton>
                    ) : (
                        <>
                            <div className="flex-1 text-center">
                                销售量随时间曲线
                            </div>
                            <AnalyaSaleLineChart analyzeSales={analyzeSales} />
                        </>
                    )}
                </div>
                <div className={'h-48 '}>
                    {isLoading ? (
                        <Skeleton className="h-[100%]  rounded-lg"></Skeleton>
                    ) : (
                        <>
                            <div className="flex-1 text-center">
                                各区域的销售额占比
                            </div>
                            <AreaSalesPipChart AreaSales={AreaSales} />
                        </>
                    )}
                </div>
                <div className={'h-48 '}>
                    {isLoading ? (
                        <Skeleton className="h-[100%]  rounded-lg"></Skeleton>
                    ) : (
                        <>
                            <PriceChart PriceAnalysisData={PriceAnalysisData} />
                            <div className="flex-1 text-center">
                                价格销量分布图
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default page

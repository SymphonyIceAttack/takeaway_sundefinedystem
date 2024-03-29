'use client'
import { AreaStringEnum, AreaTypeEnum } from '@/utils/SwitchAreaType'
import MerchFilter from './Components/MerchFilter'
import TableData from './Components/TableData'
import InteractionModal from './Components/InteractionModal'
import Chart from './Components/Chart'
import React, { useEffect, useState } from 'react'
import { useProductList } from './useProductList.hook'
import { useFilterArraySelect } from './useFilterArraySelect.hook'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { useChartArrayHook } from './useChartArray.hook'
import { useInteraction } from './useInteraction.hook'

const page = () => {
    const [UserPayLoad] = useRouterGuard()

    const [
        AreaTypeArray,
        MerchantArray,
        SelectAreaId,
        SelectMerCnantId,
        AreaId,
        MerChantId,
    ] = useFilterArraySelect()

    const [
        ProductList,
        TotalListConount,
        setinitPageNumber,
        isProductListLoading,
    ] = useProductList(MerChantId, AreaId)

    const [ChartArray, TotalPrice, AddChartItem, DeleteChartItem, CreateOrder] =
        useChartArrayHook()

    const [
        isInteractionModalShow,
        ShowUserInteraction,
        DidUserInteraction,
        RequserInteraction,
    ] = useInteraction()

    return (
        <div className="flex">
            <div className="flex  w-96 flex-col items-center gap-4 ">
                <div className="mt-2 w-full text-center text-[30px] font-bold">
                    筛选条件
                </div>
                <MerchFilter
                    selectId={AreaId}
                    Array={AreaTypeArray}
                    titleContent={'选择校区'}
                    onSelectionChange={SelectAreaId}
                />
                <MerchFilter
                    selectId={MerChantId}
                    onSelectionChange={SelectMerCnantId}
                    Array={MerchantArray.map((item) => ({
                        key: item.id,
                        value: item.store_title,
                    }))}
                    titleContent={'选择商家'}
                />
                <Chart
                    CreateOrder={CreateOrder}
                    TotalPrice={TotalPrice}
                    ChartArray={ChartArray}
                    DeleteChartItem={DeleteChartItem}
                />
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-4">
                <TableData
                    ShowUserInteraction={ShowUserInteraction}
                    AddChartItem={AddChartItem}
                    ProductList={ProductList}
                    isLoading={isProductListLoading}
                    total={TotalListConount}
                    SetPage={setinitPageNumber}
                />
            </div>
            <InteractionModal
                RequserInteraction={RequserInteraction}
                isOpen={isInteractionModalShow}
                onClose={DidUserInteraction}
                onOpenChange={() => {
                    isInteractionModalShow && DidUserInteraction()
                }}
            />
        </div>
    )
}

export default page

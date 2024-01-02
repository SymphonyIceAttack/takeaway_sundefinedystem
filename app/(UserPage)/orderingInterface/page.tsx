'use client'
import { AreaStringEnum, AreaTypeEnum } from '@/utils/SwitchAreaType'
import MerchFilter from './Components/MerchFilter'
import TableData from './Components/TableData'
import React, { useEffect, useState } from 'react'
import { useProductList } from './useProductList.hook'
import { useFilterArraySelect } from './useFilterArraySelect.hook'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'

const page = () => {
    const [UserPayLoad] = useRouterGuard()

    console.log(UserPayLoad)

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
    return (
        <div className="flex">
            <div className="flex w-96 flex-col items-center gap-4">
                <div className="w-full text-center text-[30px] font-bold">
                    筛选条件
                </div>
                <MerchFilter
                    Array={AreaTypeArray}
                    titleContent={'选择校区'}
                    onSelectionChange={SelectAreaId}
                />
                <MerchFilter
                    onSelectionChange={SelectMerCnantId}
                    Array={MerchantArray.map((item) => ({
                        key: item.id,
                        value: item.store_title,
                    }))}
                    titleContent={'选择商家'}
                />
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-4">
                <TableData
                    ProductList={ProductList}
                    isLoading={isProductListLoading}
                    total={TotalListConount}
                    SetPage={setinitPageNumber}
                />
            </div>
        </div>
    )
}

export default page

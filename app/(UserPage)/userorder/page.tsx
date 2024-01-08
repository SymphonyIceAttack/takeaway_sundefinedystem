'use client'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import React from 'react'
import TitleSearch from './Components/TitleSearch'
import OrderTable from './Components/OrderTable'
import { useStatusListFilter } from './useStatusListFilter.hook'
import { useOrderList } from './useOrderList.hook'
const page = () => {
    const [UserPayLoad] = useRouterGuard()

    const [SelectStatusList, SelectStatus, SelectStatusChange] =
        useStatusListFilter()
    const [OrderList, TotalListConount, setinitPageNumber, isOrderListLoading] =
        useOrderList(SelectStatus)

    return (
        <div>
            <TitleSearch
                onSelectionChange={SelectStatusChange}
                SelectStatusList={SelectStatusList}
            />
            <OrderTable
                OrderList={OrderList}
                total={TotalListConount}
                SetPage={setinitPageNumber}
                isLoading={isOrderListLoading}
            />
        </div>
    )
}

export default page

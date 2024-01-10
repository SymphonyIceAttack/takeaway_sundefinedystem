'use client'
import React from 'react'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import TitleSearch from './Components/TitleSearch'
import OrderTable from './Components/OrderTable'
import { useStatusListFilter } from './useStatusListFilter.hook'
import { useOrderList } from './useOrderList.hook'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter()
    const [UserPayLoad] = useRouterGuard()
    const [SelectStatusList, SelectStatus, SelectStatusChange] =
        useStatusListFilter()
    const [OrderList, TotalListConount, setinitPageNumber, isOrderListLoading] =
        useOrderList(SelectStatus)

    const ViewDetailList = (orderId: string) => {
        router.push(`/userorder/${orderId}`)
    }
    return (
        <div>
            <TitleSearch
                onSelectionChange={SelectStatusChange}
                SelectStatusList={SelectStatusList}
            />
            <OrderTable
                ViewDetailList={ViewDetailList}
                OrderList={OrderList}
                total={TotalListConount}
                SetPage={setinitPageNumber}
                isLoading={isOrderListLoading}
            />
        </div>
    )
}

export default page

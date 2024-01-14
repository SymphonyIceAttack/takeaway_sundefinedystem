'use client'
import React from 'react'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import TitleSearch from './Components/TitleSearch'
import OrderTable from './Components/OrderTable'
import { useStatusListFilter } from './useStatusListFilter.hook'
import { useOrderList } from './useOrderList.hook'
import { useRouter } from 'next/navigation'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [UserPayLoad] = useRouterGuard()
    const [SelectStatusList, SelectStatus, SelectStatusChange] =
        useStatusListFilter()
    const [
        OrderList,
        TotalListConount,
        setinitPageNumber,
        isOrderListLoading,
        setisOrderListLoading,
    ] = useOrderList(SelectStatus)

    const ViewDetailList = (orderId: string) => {
        router.push(`/userorder/${orderId}`)
    }
    const OrderReceive = async (OrderId: string) => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/shop/OrderReceived?OrderId=${OrderId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        )
        const result = await res.json()
        const code = res.status
        code === 201 && setisOrderListLoading(true)
        code === 201 && toast('接单成功')
        code !== 201 && toast('接单失败')
    }
    const OrderFinish = async (OrderId: string) => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/shop/OrderFinish?OrderId=${OrderId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        )
        const result = await res.json()
        const code = res.status
        code === 201 && setisOrderListLoading(true)
        code === 201 && toast('订单完成')
        code !== 201 && toast('完成失败')
    }

    return (
        <div>
            <TitleSearch
                onSelectionChange={SelectStatusChange}
                SelectStatusList={SelectStatusList}
            />
            <OrderTable
                OrderFinish={OrderFinish}
                OrderReceive={OrderReceive}
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

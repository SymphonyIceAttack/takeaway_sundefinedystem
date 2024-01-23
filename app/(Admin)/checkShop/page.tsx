'use client'
import React from 'react'
import ShopSettleTable from './Components/ShopSettleTable'
import ReviewSearch from './Components/ReviewSearch'
import { useShopSettleList } from './useShopSettleList.hook'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { useIsReviewListFilter } from './useIsReviewListFilter.hook'
import { SettleStatusEnum } from '@/types/shop.type'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'

const page = () => {
    const [UserPayLoad] = useRouterGuard()
    const [isReviewList, isReview, SelectStatusChange] = useIsReviewListFilter()
    const [
        ShopSettleList,
        TotalListConount,
        setinitPageNumber,
        isShopSettleListLoading,
        setisShopSettleListLoading,
    ] = useShopSettleList(isReview)

    const CheckShop = async (account: string, status: SettleStatusEnum) => {
        const token = localStorage.getItem(TokenConstant) || ''
        await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/admin/CheckShop?account=${account}&status=${status}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        ).then((res) => res.json())

        toast('入驻审核成功')

        setisShopSettleListLoading(true)
    }

    return (
        <div>
            <div className="flex-1   px-4 py-1">
                <ReviewSearch
                    isReview={isReview}
                    isReviewList={isReviewList}
                    onSelectionChange={SelectStatusChange}
                />
            </div>
            <div className="mt-4   flex-1 px-4 py-1">
                <ShopSettleTable
                    CheckShop={CheckShop}
                    ShopSettleList={ShopSettleList}
                    total={TotalListConount}
                    SetPage={setinitPageNumber}
                    isLoading={isShopSettleListLoading}
                />
            </div>
        </div>
    )
}

export default page

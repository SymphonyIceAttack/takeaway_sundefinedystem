'use client'
import React, { useCallback, useEffect, useState } from 'react'
import DishesItem from './Components/DishesItem'
import LoadingDishItem from './Components/LoadingDishItem'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { TokenConstant } from '@/types/Token.constant'
import {
    recommendItemType,
    usereqRecommendList,
} from './usereqRecommendList.hook'
import { toast } from 'react-toastify'
const page = () => {
    const [UserPayLoad] = useRouterGuard()
    const [recommendList, isLoading] = usereqRecommendList()

    const OrderProduct = async (recommendItem: recommendItemType) => {
        const token = localStorage.getItem(TokenConstant) || ''
        await fetch(`${process.env.NEXT_PUBLIC_API_Backed}/order/CreateOrder`, {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mer_id: recommendItem.mer_id,
                Dishes: [
                    {
                        product_id: recommendItem.id,
                        number: 1,
                    },
                ],
            }),
        })

        toast('下单成功')
    }

    return (
        <div className="flex flex-wrap justify-start gap-4">
            {isLoading ? (
                <>
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                    <LoadingDishItem />
                </>
            ) : (
                recommendList.map((item) => (
                    <DishesItem
                        OrderProduct={OrderProduct}
                        key={item.id}
                        item={item}
                    />
                ))
            )}
        </div>
    )
}

export default page

'use client'
import React, { useCallback, useEffect, useState } from 'react'
import DishesItem from './Components/DishesItem'
import LoadingDishItem from './Components/LoadingDishItem'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { TokenConstant } from '@/types/Token.constant'
const page = () => {
    const [UserPayLoad] = useRouterGuard()
    const reqRecommendList = useCallback(async () => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/recommend/userRecommend`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        )
    }, [])

    useEffect(() => {
        reqRecommendList()
    }, [reqRecommendList])

    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setisLoading(false)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

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
                <>
                    <DishesItem />
                    <DishesItem />
                    <DishesItem />
                    <DishesItem />
                    <DishesItem />
                    <DishesItem />
                </>
            )}
        </div>
    )
}

export default page

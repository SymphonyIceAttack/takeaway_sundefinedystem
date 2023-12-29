'use client'
import React, { useEffect, useState } from 'react'
import DishesItem from './Components/DishesItem'
import LoadingDishItem from './Components/LoadingDishItem'
const page = () => {
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

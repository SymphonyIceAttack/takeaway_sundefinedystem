'use client'
import { Button } from '@nextui-org/react'
import React from 'react'

const index = () => {
    return (
        <div className="bg-white flex justify-center items-center h-[80vh]">
            <div className="felx flex-col justify-center items-center">
                <div className="text-center text-3xl font-bold tracking-tighter text-[50px]">
                    美味的食物，快速交付
                </div>
                <div className="mx-auto max-w-[700px] text-gray-500 mt-4 text-[25px] text-center">
                    没时间做饭？ 没问题！ 我们将您最喜欢的菜肴送到您家门口。
                </div>
                <div className="flex justify-center items-center mt-4 ">
                    <Button className="bg-black text-white">现在下单</Button>
                </div>
            </div>
        </div>
    )
}

export default index

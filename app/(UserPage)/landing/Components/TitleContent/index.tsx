'use client'
import { Button, Link } from '@nextui-org/react'
import React from 'react'
interface Props {
    GoToOrder: () => void
}
const index = ({ GoToOrder }: Props) => {
    return (
        <div className="flex h-[100vh] items-center justify-center bg-white">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center  text-[50px] font-bold tracking-tighter">
                    美味的食物，快速交付
                </div>
                <div className="mx-auto mt-4 max-w-[700px] text-center text-[25px] text-gray-500">
                    没时间做饭？ 没问题！ 我们将您最喜欢的菜肴送到您家门口。
                </div>
                <div className="mt-4 flex items-center justify-center ">
                    <Button className="bg-black text-white" onClick={GoToOrder}>
                        现在下单
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index

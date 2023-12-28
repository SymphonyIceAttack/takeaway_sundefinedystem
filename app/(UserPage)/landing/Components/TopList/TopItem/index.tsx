'use client'
import { Chip } from '@nextui-org/react'
import React from 'react'

const index = () => {
    return (
        <div className="mx-8 box-border flex-1 rounded-lg border-[1px] border-solid border-black bg-white  p-8 shadow-md">
            <div className="text-[25px] font-bold text-black">餐品名称</div>
            <div className="flex flex-col ">
                <Chip color="success" className="mt-4">
                    今日销量:123
                </Chip>
                <Chip color="secondary" className="mt-4">
                    来源:xxx
                </Chip>
            </div>
        </div>
    )
}

export default index

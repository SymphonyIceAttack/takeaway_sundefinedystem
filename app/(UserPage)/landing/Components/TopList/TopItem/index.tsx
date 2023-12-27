'use client'
import { Chip } from '@nextui-org/react'
import React from 'react'

const index = () => {
    return (
        <div className="flex-1 p-8 box-border mx-8 bg-white border-1 border-solid border-black  shadow-md rounded-lg">
            <div className="text-black text-[25px] font-bold">餐品名称</div>
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

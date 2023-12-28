import React from 'react'
import { LiaCopyrightSolid } from 'react-icons/lia'
const index = () => {
    return (
        <div className="flex h-12 items-center justify-between bg-white">
            <div className="flex items-center  px-8 ">
                <LiaCopyrightSolid />
                <span>外卖服务 版权所有</span>
            </div>
            <div className="flex items-center px-8 ">
                <span className="mx-4">服务条款</span>
                <span className="mx-4">隐私</span>
            </div>
        </div>
    )
}

export default index

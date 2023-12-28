'use client'
import { AreaStringEnum } from '@/utils/SwitchAreaType'
import MerchFilter from './Components/MerchFilter'
import TableData from './Components/TableData'
import React from 'react'

const page = () => {
    const MerchantArray = ['test', 'asdf', 'sadf', 'uiyig']
    const AreaTypeArray: AreaStringEnum[] = [
        AreaStringEnum.HangZhouWan,
        AreaStringEnum.HeadquarterBei,
        AreaStringEnum.HeadquarterNan,
        AreaStringEnum.XiangShan,
    ]

    return (
        <div className="flex">
            <div className="flex w-96 flex-col items-center gap-4">
                <div className="w-full text-center text-[30px] font-bold">
                    筛选条件
                </div>
                <MerchFilter Array={AreaTypeArray} titleContent={'选择校区'} />
                <MerchFilter Array={MerchantArray} titleContent={'选择商家'} />
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-4">
                <TableData />
            </div>
        </div>
    )
}

export default page

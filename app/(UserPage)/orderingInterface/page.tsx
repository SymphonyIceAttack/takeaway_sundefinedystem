'use client'
import { AreaStringEnum, AreaTypeEnum } from '@/utils/SwitchAreaType'
import MerchFilter from './Components/MerchFilter'
import TableData from './Components/TableData'
import React, { useEffect, useState } from 'react'
import { useMerchantArray } from './useMerchantArray.hook'
import { useProductList } from './useProductList.hook'

const page = () => {
    const AreaTypeArray: { key: string; value: string }[] = [
        { key: AreaTypeEnum.HangZhouWan, value: AreaStringEnum.HangZhouWan },
        {
            key: AreaTypeEnum.HeadquarterBei,
            value: '本部',
        },
        { key: AreaTypeEnum.XiangShan, value: AreaStringEnum.XiangShan },
    ]

    const [AreaId, setAreaId] = useState<null | string>(null)

    const SelectAreaId = (AreaId: string) => {
        setAreaId(AreaId)
    }
    const [MerchantArray] = useMerchantArray()

    const [MerChantId, setMerChantId] = useState<null | string>(null)

    useEffect(() => {
        setMerChantId(null)
    }, [AreaId])

    const SelectMerCnantId = (MerChantId: string) => {
        setMerChantId(MerChantId)
    }

    useProductList(MerChantId,AreaId)

    return (
        <div className="flex">
            <div className="flex w-96 flex-col items-center gap-4">
                <div className="w-full text-center text-[30px] font-bold">
                    筛选条件
                </div>
                <MerchFilter
                    Array={AreaTypeArray}
                    titleContent={'选择校区'}
                    onSelectionChange={SelectAreaId}
                />
                <MerchFilter
                    onSelectionChange={SelectMerCnantId}
                    Array={MerchantArray.filter((item) => {
                        return (
                            item.area_id === AreaId ||
                            AreaId === '' ||
                            AreaId === null
                        )
                    }).map((item) => ({
                        key: item.id,
                        value: item.store_title,
                    }))}
                    titleContent={'选择商家'}
                />
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-4">
                <TableData />
            </div>
        </div>
    )
}

export default page

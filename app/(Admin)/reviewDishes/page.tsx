'use client'
import { AreaStringEnum, AreaTypeEnum } from '@/utils/SwitchAreaType'
import MerchFilter from './Components/MerchFilter'
import TableData from './Components/TableData'
import ReviewSearch from './Components/ReviewSearch'
import React, { useEffect, useState } from 'react'
import { useProductList } from './useProductList.hook'
import { useFilterArraySelect } from './useFilterArraySelect.hook'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { useIsReviewListFilter } from './useIsReviewListFilter.hook'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'

const page = () => {
    const [UserPayLoad] = useRouterGuard()
    const [isReviewList, isReview, SelectStatusChange] = useIsReviewListFilter()
    const [
        AreaTypeArray,
        MerchantArray,
        SelectAreaId,
        SelectMerCnantId,
        AreaId,
        MerChantId,
    ] = useFilterArraySelect()

    const [
        ProductList,
        TotalListConount,
        setinitPageNumber,
        isProductListLoading,
        setisProductListLoading,
    ] = useProductList(MerChantId, AreaId, isReview)
    const ReViewProduct = async (productId: string, isApprove: 0 | 1) => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_Backed
            }/admin/ReViewProduct?ProuctId=${productId}&isApprove=${
                isApprove ? 1 : 0
            }`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        )
        toast('审批成功')
        setisProductListLoading(true)
    }

    return (
        <div className="">
            <div className="flex    items-center gap-4  px-4 py-1">
                <MerchFilter
                    selectId={AreaId}
                    Array={AreaTypeArray}
                    titleContent={'选择校区'}
                    onSelectionChange={SelectAreaId}
                />
                <MerchFilter
                    selectId={MerChantId}
                    onSelectionChange={SelectMerCnantId}
                    Array={MerchantArray.map((item) => ({
                        key: item.id,
                        value: item.store_title,
                    }))}
                    titleContent={'选择商家'}
                />
                <ReviewSearch
                    isReview={isReview}
                    isReviewList={isReviewList}
                    onSelectionChange={SelectStatusChange}
                />
            </div>
            <div className="   flex-1   px-4 py-1">
                <TableData
                    ReViewProduct={ReViewProduct}
                    ProductList={ProductList}
                    isLoading={isProductListLoading}
                    total={TotalListConount}
                    SetPage={setinitPageNumber}
                />
            </div>
        </div>
    )
}

export default page

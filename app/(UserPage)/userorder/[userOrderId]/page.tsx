'use client'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import React from 'react'
import OrderDetailTable from './Components/OrderDetailTable'
import { useOrderDetailList } from './useOrderDetailList.hook'
type RouterParamsTypes = {
    params: {
        userOrderId: string
    }
}

const page = ({ params: { userOrderId } }: RouterParamsTypes) => {
    const [UserPayLoad] = useRouterGuard()

    const [OrderDetailList] = useOrderDetailList(userOrderId)

    return (
        <div className="pt-12">
            <div className="mx-auto my-4 w-[50%] text-center text-[20px]">
                订单号:{userOrderId}
            </div>
            <OrderDetailTable OrderDetailList={OrderDetailList} />
            <div className="mx-auto my-4 flex w-[50%]  justify-end text-[20px]">
                <span className="w-[50%] text-center">
                    总价:
                    {OrderDetailList.reduce(
                        (preValue, item) =>
                            preValue + item.product.goods_price_sale,
                        0
                    )}
                </span>
            </div>
        </div>
    )
}

export default page

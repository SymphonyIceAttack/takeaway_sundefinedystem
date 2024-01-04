import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import ChartItem from './ChartItem'
import { ChartItemType } from '../../useChartArray.hook'
interface Props {
    ChartArray: ChartItemType[]
    DeleteChartItem: (ChartItem: ChartItemType) => void
    TotalPrice: number
    CreateOrder: () => void
}
const index = ({
    ChartArray,
    DeleteChartItem,
    TotalPrice,
    CreateOrder,
}: Props) => {
    return (
        <div className=" mt-4  w-[100%] max-w-[20rem] rounded-xl border-2 border-solid border-gray-200 ">
            <div className="text-center text-[30px] font-bold">购物车</div>
            <div className="max-h-[20rem] overflow-scroll">
                {ChartArray.map((item) => (
                    <ChartItem
                        key={item.productId}
                        ChartItem={item}
                        DeleteChartItem={DeleteChartItem}
                    />
                ))}
            </div>
            <Divider
                orientation="horizontal"
                className="mx-auto my-4 w-[90%]"
            />
            <div className="my-4 box-border flex items-center justify-between px-8">
                <span className="text-center text-[20px] font-bold">总价</span>
                <span className="text-center text-[20px] font-bold">
                    {TotalPrice}
                </span>
            </div>
            <div className="my-8 flex items-center">
                <Button
                    className="mx-auto w-[80%] bg-black text-white"
                    onClick={CreateOrder}>
                    下单
                </Button>
            </div>
        </div>
    )
}

export default index

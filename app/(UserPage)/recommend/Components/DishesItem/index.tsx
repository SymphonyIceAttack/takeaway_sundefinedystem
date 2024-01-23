'use client'
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Chip,
    Button,
} from '@nextui-org/react'
import { IoIosStarOutline } from 'react-icons/io'
import { recommendItemType } from '../../usereqRecommendList.hook'
interface Props {
    item: recommendItemType
    OrderProduct: (recommendItem: recommendItemType) => Promise<void>
}
const index = ({ item, OrderProduct }: Props) => {
    return (
        <Card className="m-4 box-border w-[30%] p-4">
            <CardHeader className="flex items-center justify-between gap-3 ">
                <div className="text-[30px] font-bold">{item.goods_title}</div>
                <Chip color="success" className="">
                    {item.store_title}
                </Chip>
            </CardHeader>

            <CardBody className="flex flex-row items-center gap-4">
                <IoIosStarOutline size={30} className={'text-yellow-500'} />
                <span className={'text-[20px]'}>{item.score}</span>
            </CardBody>

            <CardFooter>
                <Button
                    className="bg-blue-500 text-white"
                    radius="md"
                    onClick={() => {
                        OrderProduct(item)
                    }}>
                    点餐
                </Button>
            </CardFooter>
        </Card>
    )
}

export default index

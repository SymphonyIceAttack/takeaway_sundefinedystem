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
interface Props {}
const index = () => {
    return (
        <Card className="m-4 box-border w-[30%] p-4">
            <CardHeader className="flex items-center justify-between gap-3 ">
                <div className="text-[30px] font-bold">菜品名称</div>
                <Chip color="success" className="">
                    商家
                </Chip>
            </CardHeader>

            <CardBody className="flex flex-row items-center gap-4">
                <IoIosStarOutline size={30} className={'text-yellow-500'} />
                <span className={'text-[20px]'}>4.5</span>
            </CardBody>

            <CardFooter>
                <Button className="bg-blue-500 text-white" radius="md">
                    点餐
                </Button>
            </CardFooter>
        </Card>
    )
}

export default index

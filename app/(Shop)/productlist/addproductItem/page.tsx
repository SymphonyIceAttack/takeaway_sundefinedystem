'use client'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useShopDetail } from './useShopDetail.hook'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const [UserPayLoad] = useRouterGuard()
    const [ShopDetail] = useShopDetail()

    const [name, setname] = useState('')
    const [price, setprice] = useState(0)

    const AddProduct = async () => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/shop/createProduct`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
                body: JSON.stringify({
                    goods_price_sale: price,
                    goods_title: name,
                }),
            }
        )
        toast('新增成功')
        router.back()
    }

    return (
        <div>
            <div className="mx-auto mt-2 box-border w-[95%] p-4">
                <Button
                    onClick={() => {
                        router.back()
                    }}>
                    返回
                </Button>
            </div>

            <form
                className="mx-auto mt-2 box-border flex w-[95%] flex-col gap-4 p-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    AddProduct()
                }}>
                <div className="flex gap-4">
                    <Input
                        disabled
                        size={'md'}
                        variant="bordered"
                        label="商店名称"
                        value={ShopDetail?.store_title}
                    />
                    <Input
                        disabled
                        size={'md'}
                        variant="bordered"
                        label="所属校区"
                        value={ShopDetail?.area_title}
                    />
                </div>
                <Input
                    isRequired
                    name="name"
                    size={'md'}
                    variant="bordered"
                    label="菜品名称"
                    value={name}
                    onValueChange={(e) => setname(e)}
                />
                <Input
                    min={0}
                    isRequired
                    name="price"
                    size={'md'}
                    variant="bordered"
                    type="number"
                    label="菜品单价"
                    value={price + ''}
                    onValueChange={(e) => setprice(parseInt(e))}
                />
                <div className="mx-auto mt-8 w-[50%]">
                    <Button
                        className="mx-auto w-[100%]"
                        radius="sm"
                        type="submit">
                        新增
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default page

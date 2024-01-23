'use client'
import { AreaStringEnum, SwitchAreaTypetoString } from '@/utils/SwitchAreaType'
import { AreaTypeEnum } from '@/utils/SwitchAreaType'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const router = useRouter()
    const IdentityArray: { value: AreaTypeEnum; label: AreaStringEnum }[] = [
        { value: AreaTypeEnum.HangZhouWan, label: AreaStringEnum.HangZhouWan },
        {
            value: AreaTypeEnum.HeadquarterBei,
            label: AreaStringEnum.HeadquarterBei,
        },
        {
            value: AreaTypeEnum.HeadquarterNan,
            label: AreaStringEnum.HeadquarterNan,
        },
        { value: AreaTypeEnum.XiangShan, label: AreaStringEnum.XiangShan },
    ]
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')
    const [identity, setidentity] = useState<AreaTypeEnum>(
        AreaTypeEnum.HangZhouWan
    )
    const [storeTitle, setStoreTitle] = useState('')

    const createShopSettle = async () => {
        await fetch(
            `${process.env.NEXT_PUBLIC_API_Backed}/shop-settle/createShopSettle`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    account: account,
                    password: password,
                    store_title: storeTitle,
                    area_id: identity,
                    area_title: SwitchAreaTypetoString(identity),
                }),
            }
        ).then((res) => res.json())
        toast('申请生成等待审批')
        router.push('/login')
    }

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <form
                className="w-[35%] rounded-lg border-[1px] border-solid border-rose-300 py-12 shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault()
                    createShopSettle()
                }}>
                <div className="mt-4 text-center text-[40px] font-bold">
                    商家入驻
                </div>
                <div className="mx-auto mt-8 flex w-[80%] flex-col items-center gap-8">
                    <Input
                        isRequired
                        size={'md'}
                        variant="bordered"
                        label="账号"
                        value={account}
                        onChange={(e) => {
                            setaccount(e.target.value)
                        }}
                    />
                    <Input
                        isRequired
                        size={'md'}
                        variant="bordered"
                        type="password"
                        label="密码"
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                    />
                    <Select
                        label="选择区域"
                        isRequired
                        className=""
                        onChange={(e) => {
                            setidentity(e.target.value as AreaTypeEnum)
                        }}>
                        {IdentityArray.map((Identity) => (
                            <SelectItem
                                key={Identity.value}
                                value={Identity.value}>
                                {Identity.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Input
                        isRequired
                        size={'md'}
                        variant="bordered"
                        label="商家名称"
                        value={storeTitle}
                        onChange={(e) => {
                            setStoreTitle(e.target.value)
                        }}
                    />
                </div>
                <div className="mx-auto mt-8 w-[80%]">
                    <Button
                        className="w-full bg-black text-white"
                        radius="sm"
                        type="submit">
                        入驻
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default page

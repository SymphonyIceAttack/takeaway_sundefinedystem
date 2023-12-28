'use client'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'

const page = () => {
    const IdentityArray: { value: string; label: string }[] = [
        { value: '老师', label: '老师' },
        { value: '学生', label: '学生' },
        { value: '校园职工', label: '校园职工' },
    ]
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')
    const [identity, setidentity] = useState('')

    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="w-[35%] py-12 border-solid border-rose-300 border-1 rounded-lg shadow-lg">
                <div className="text-[40px] font-bold text-center mt-4">
                    注册
                </div>
                <form className="mt-8 w-[80%] flex flex-col items-center gap-8 mx-auto">
                    <Input
                        size={'md'}
                        variant="bordered"
                        label="账号"
                        value={account}
                        onChange={(e) => {
                            setaccount(e.target.value)
                        }}
                    />
                    <Input
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
                        label="选择身份"
                        className=""
                        onChange={(e) => {
                            setidentity(e.target.value)
                        }}>
                        {IdentityArray.map((Identity) => (
                            <SelectItem
                                key={Identity.value}
                                value={Identity.value}>
                                {Identity.label}
                            </SelectItem>
                        ))}
                    </Select>
                </form>
                <div className="w-[80%] mx-auto mt-8">
                    <Button className="w-full bg-black text-white" radius="sm">
                        注册
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page

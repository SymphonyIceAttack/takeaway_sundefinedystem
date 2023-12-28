'use client'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

const page = () => {
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <div className="w-[35%] rounded-lg border-[1px] border-solid border-rose-300 py-12 shadow-lg">
                <div className="mt-4 text-center text-[40px] font-bold">
                    登录
                </div>
                <div className="mx-auto mt-8 flex w-[80%] flex-col items-center gap-8">
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
                </div>
                <div className="mx-auto mt-8 w-[80%]">
                    <Button className="w-full bg-black text-white" radius="sm">
                        登录
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page

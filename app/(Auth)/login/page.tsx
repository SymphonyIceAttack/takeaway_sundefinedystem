'use client'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

const page = () => {
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')

    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="w-[35%] py-12 border-solid border-rose-300 border-1 rounded-lg shadow-lg">
                <div className="text-[40px] font-bold text-center mt-4">
                    登录
                </div>
                <div className="mt-8 w-[80%] flex flex-col items-center gap-8 mx-auto">
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
                <div className="w-[80%] mx-auto mt-8">
                    <Button className="w-full bg-black text-white" radius="sm">
                        登录
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page

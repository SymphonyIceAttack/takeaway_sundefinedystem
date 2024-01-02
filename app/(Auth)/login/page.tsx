'use client'
import { TokenConstant } from '@/types/Token.constant'
import { Button, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const router = useRouter()
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')
    const LoginSubmit = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_Backed}/users/Login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account, password }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.statusCode === 201) {
                    localStorage.setItem(
                        TokenConstant,
                        `Bearer ${res.access_token}`
                    )
                    router.push('/')
                } else {
                    console.log(res.statusCode)
                }
            })
    }
    return (
        <div className="flex h-[100vh] items-center justify-center">
            <form
                className="w-[35%] rounded-lg border-[1px] border-solid border-rose-300 py-12 shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault()
                    LoginSubmit()
                }}>
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
                    <Button
                        className="w-full bg-black text-white"
                        radius="sm"
                        type="submit">
                        登录
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default page

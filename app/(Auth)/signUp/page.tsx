'use client'
import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const router = useRouter()
    const IdentityArray: { value: string; label: string }[] = [
        { value: '老师', label: '老师' },
        { value: '学生', label: '学生' },
        { value: '校园职工', label: '校园职工' },
    ]
    const [account, setaccount] = useState('')
    const [password, setpassword] = useState('')
    const [identity, setidentity] = useState('')

    const SignUpSubmit = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_Backed}/users/SignUp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account, password, identity }),
        })
            .then((res) => res.status)
            .then((status) => {
                status === 201 && router.push('/login')
            })
    }

    return (
        <div className="flex h-[100vh] items-center justify-center">
            <form
                className="w-[35%] rounded-lg border-[1px] border-solid border-rose-300 py-12 shadow-lg"
                onSubmit={(e) => {
                    e.preventDefault()
                    SignUpSubmit()
                }}>
                <div className="mt-4 text-center text-[40px] font-bold">
                    注册
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
                        label="选择身份"
                        isRequired
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
                </div>
                <div className="mx-auto mt-8 w-[80%]">
                    <Button
                        className="w-full bg-black text-white"
                        radius="sm"
                        type="submit">
                        注册
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default page

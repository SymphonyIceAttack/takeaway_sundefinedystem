'use client'
import React from 'react'
import TitleContent from './Components/TitleContent'
import TopList from './Components/TopList'
import Footer from './Components/Footer'
import { useRouter } from 'next/navigation'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'
const page = () => {
    const router = useRouter()

    const GoToOrder = () => {
        const token = localStorage.getItem(TokenConstant) || ''
        fetch(`${process.env.NEXT_PUBLIC_API_Backed}/users/checkLogin`, {
            headers: { authorization: token },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.statusCode === 201) {
                    router.push('/orderingInterface')
                } else {
                    toast('登录验证过期')
                    router.push('/login')
                }
            })
    }

    return (
        <div className="">
            <TitleContent GoToOrder={GoToOrder} />
            <div className="bg-gray-100 px-8 pb-12 pt-4">
                <div className="mb-4 text-[50px] text-black ">今日榜首</div>
                <TopList />
            </div>
            <Footer />
        </div>
    )
}

export default page

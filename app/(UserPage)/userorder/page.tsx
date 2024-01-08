'use client'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import React from 'react'
import TitleSearch from './Components/TitleSearch'
const page = () => {
    const [UserPayLoad] = useRouterGuard()
    return (
        <div>
            <TitleSearch />
        </div>
    )
}

export default page

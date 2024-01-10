import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import React from 'react'

const page = () => {
    const [UserPayLoad] = useRouterGuard()

    return <div>orderdeal</div>
}

export default page

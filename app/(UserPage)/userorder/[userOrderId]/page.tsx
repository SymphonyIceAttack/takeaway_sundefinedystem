import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import React from 'react'
type RouterParamsTypes = {
    userOrderId: string
}

const page = ({ userOrderId }: RouterParamsTypes) => {
    const [UserPayLoad] = useRouterGuard()

    return <div>page</div>
}

export default page

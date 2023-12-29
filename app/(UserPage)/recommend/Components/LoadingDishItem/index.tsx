'use client'

import { Card, Skeleton } from '@nextui-org/react'
import React from 'react'

const index = () => {
    return (
        <Card className="m-4 box-border w-[30%] p-4" radius="lg">
            <div className={'flex items-center justify-between'}>
                <Skeleton className="h-12 w-[50%] rounded-lg"></Skeleton>
                <Skeleton className="h-12 w-[20%] rounded-lg"></Skeleton>
            </div>
            <div className="mt-4 flex items-center gap-4 pl-1">
                <Skeleton className="h-12 w-[20%] rounded-lg"></Skeleton>
                <Skeleton className="h-12 w-[20%] rounded-lg"></Skeleton>
            </div>
            <div className={'mt-4 flex items-center gap-4 pl-1'}>
                <Skeleton className="h-12 w-[20%] rounded-lg"></Skeleton>
            </div>
        </Card>
    )
}

export default index

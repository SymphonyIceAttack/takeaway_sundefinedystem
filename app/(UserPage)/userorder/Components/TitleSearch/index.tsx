import { Input } from '@nextui-org/react'
import React from 'react'
import { GoSearch } from 'react-icons/go'

const index = () => {
    return (
        <div className="mt-4 flex flex-row-reverse items-center justify-between px-8">
            <Input
                className="max-w-[20rem]"
                placeholder="搜索订单"
                startContent={<GoSearch size={25} />}
            />
        </div>
    )
}

export default index

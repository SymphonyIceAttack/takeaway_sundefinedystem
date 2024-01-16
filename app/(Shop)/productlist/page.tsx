'use client'
import React from 'react'
import { useProductList } from './useProductList.hook'
import ProductTable from './Components/ProductTable'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const page = () => {
    const [UserPayLoad] = useRouterGuard()
    const router = useRouter()
    const [
        ProductList,
        TotalListConount,
        setinitPageNumber,
        isProductListLoading,
        setisProductListLoading,
    ] = useProductList()

    return (
        <div>
            <div className="mx-auto mt-2 box-border w-[95%] p-4">
                <div>
                    <Button as={Link} href="/productlist/addproductItem">
                        新增菜品
                    </Button>
                </div>
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-4">
                <ProductTable
                    ProductList={ProductList}
                    total={TotalListConount}
                    SetPage={setinitPageNumber}
                    isLoading={isProductListLoading}
                />
            </div>
        </div>
    )
}

export default page

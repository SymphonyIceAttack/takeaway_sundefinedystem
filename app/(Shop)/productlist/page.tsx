'use client'
import React from 'react'
import { useProductList } from './useProductList.hook'
import ProductTable from './Components/ProductTable'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { TokenConstant } from '@/types/Token.constant'
import { toast } from 'react-toastify'
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

    const changeProductStaus = async (
        productId: string,
        isShelvesShow: boolean
    ) => {
        const token = localStorage.getItem(TokenConstant) || ''
        const res = await fetch(
            `${
                process.env.NEXT_PUBLIC_API_Backed
            }/shop/changeProductStatus?isShelvesShow=${
                isShelvesShow ? 1 : 0
            }&productId=${productId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: token,
                },
            }
        )
        toast('修改成功')
        setisProductListLoading(true)
    }

    return (
        <div>
            <div className="mx-auto box-border w-[95%] p-3">
                <div>
                    <Button as={Link} href="/productlist/addproductItem">
                        新增菜品
                    </Button>
                </div>
            </div>
            <div className=" box-border  max-h-[calc(100vh-80px)]  flex-1  overflow-scroll  p-3">
                <ProductTable
                    changeProductStaus={changeProductStaus}
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

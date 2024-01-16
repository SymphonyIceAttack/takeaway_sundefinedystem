import React from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
    Button,
    Pagination,
    Spinner,
} from '@nextui-org/react'

import { ProductItemType } from '@/types/product.type'

type ColumnType =
    | {
          key: keyof ProductItemType
          label: string
      }
    | {
          key: 'action'
          label: '操作'
      }
const columns: ColumnType[] = [
    {
        key: 'store_title',
        label: '商店',
    },
    {
        key: 'goods_title',
        label: '商品名称',
    },
    {
        key: 'sold_total_all',
        label: '销量',
    },

    {
        key: 'goods_price_sale',
        label: '单价',
    },

    {
        key: 'action',
        label: '操作',
    },
]
const SwitchActions = (item: ProductItemType) => {
    return <div className="flex justify-center gap-4"></div>
}
interface Props {
    ProductList: ProductItemType[]
    total: number
    SetPage: (page: number) => void
    isLoading: boolean
}
const index = ({ ProductList, total, SetPage, isLoading }: Props) => {
    return (
        <>
            <Table aria-label="xx" className=" mx-auto mt-2 w-[95%]">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn
                            key={column.key}
                            style={{
                                textAlign:
                                    column.key === 'action'
                                        ? 'center'
                                        : 'start',
                            }}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody
                    isLoading={isLoading}
                    loadingContent={<Spinner label="Loading..." />}>
                    {/* 这里会产生闭包陷阱，ProductList.map()可以避免发生闭包*/}
                    {ProductList.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.store_title}</TableCell>
                            <TableCell>{item.goods_title}</TableCell>
                            <TableCell>{item.sold_total_all}</TableCell>
                            <TableCell>{item.goods_price_sale}</TableCell>
                            <TableCell>{SwitchActions(item)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination
                className="mt-4 flex w-[100%]"
                size="lg"
                classNames={{ wrapper: 'gap-4 max-w-none mx-auto' }}
                showControls
                total={Math.ceil(total / 10)}
                initialPage={1}
                onChange={SetPage}
            />
        </>
    )
}

export default index

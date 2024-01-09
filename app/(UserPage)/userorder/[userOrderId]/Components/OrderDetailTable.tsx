import React from 'react'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from '@nextui-org/react'
import { OrderDetailItemType } from '../useOrderDetailList.hook'

const columns = [
    {
        key: 'name',
        label: '名称',
    },
    {
        key: 'price',
        label: '价格',
    },
]
interface Props {
    OrderDetailList: OrderDetailItemType[]
}
export default function OrderDetailTable({ OrderDetailList }: Props) {
    return (
        <Table aria-label="xxx" className="mx-auto w-[50%]">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
            </TableHeader>
            <TableBody items={OrderDetailList}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.product.goods_title}</TableCell>
                        <TableCell>{item.product.goods_price_sale}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

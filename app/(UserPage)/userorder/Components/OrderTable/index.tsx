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
import { OrderItemType } from '@/types/order.type'
import { OrderItemTypeShow } from '../../useOrderList.hook'
function formatDateToYYYYMMDD(inputDate: string) {
    const date = new Date(inputDate)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}
type ColumnType =
    | {
          key: keyof OrderItemType
          label: string
      }
    | {
          key: 'store_title'
          label: '商店'
      }
    | {
          key: 'action'
          label: '操作'
      }
const columns: ColumnType[] = [
    {
        key: 'id',
        label: '订单ID',
    },
    {
        key: 'store_title',
        label: '商店',
    },
    {
        key: 'create_time',
        label: '下单时间',
    },
    {
        key: 'number',
        label: '数量',
    },
    {
        key: 'totalPrice',
        label: '价格',
    },
    {
        key: 'status',
        label: '状态',
    },
    {
        key: 'action',
        label: '操作',
    },
]
const SwitchActions = (
    item: OrderItemTypeShow,
    ViewDetailList: (orderId: string) => void
) => {
    return (
        <div className="flex justify-center gap-4">
            <Button
                onClick={() => {
                    ViewDetailList(item.id)
                }}>
                详情
            </Button>
        </div>
    )
}
interface Props {
    ViewDetailList: (orderId: string) => void
    OrderList: OrderItemTypeShow[]
    total: number
    SetPage: (page: number) => void
    isLoading: boolean
}
const index = ({
    OrderList,
    total,
    SetPage,
    isLoading,
    ViewDetailList,
}: Props) => {
    return (
        <>
            <Table aria-label="xx" className=" mx-auto mt-8 w-[95%]">
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
                    {OrderList.map((item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => (
                                <TableCell>
                                    {columnKey !== 'action' &&
                                        columnKey !== 'store_title' &&
                                        columnKey !== 'create_time' &&
                                        getKeyValue(item, columnKey)}
                                    {columnKey === 'action' &&
                                        SwitchActions(item, ViewDetailList)}
                                    {columnKey === 'store_title' &&
                                        item.shop.store_title}
                                    {columnKey === 'create_time' &&
                                        formatDateToYYYYMMDD(item.create_time)}
                                </TableCell>
                            )}
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

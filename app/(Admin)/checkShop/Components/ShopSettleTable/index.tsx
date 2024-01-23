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

import { SettleStatusEnum, ShopSettleItemType } from '@/types/shop.type'

type ColumnType =
    | {
          key: keyof ShopSettleItemType
          label: string
      }
    | {
          key: 'action'
          label: '操作'
      }
const columns: ColumnType[] = [
    {
        key: 'store_title',
        label: '商店名称',
    },
    {
        key: 'area_title',
        label: '区域名称',
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
    item: ShopSettleItemType,
    CheckShop: (account: string, status: SettleStatusEnum) => Promise<void>
) => {
    return (
        <div className="flex justify-center gap-4">
            {item.status === SettleStatusEnum.pending && (
                <Button
                    onClick={() => {
                        CheckShop(item.account, SettleStatusEnum.Finish)
                    }}>
                    审批
                </Button>
            )}
        </div>
    )
}
interface Props {
    ShopSettleList: ShopSettleItemType[]
    total: number
    SetPage: (page: number) => void
    isLoading: boolean
    CheckShop: (account: string, status: SettleStatusEnum) => Promise<void>
}
const index = ({
    ShopSettleList,
    total,
    SetPage,
    isLoading,
    CheckShop,
}: Props) => {
    return (
        <>
            <Table aria-label="xx" className=" mx-auto w-[95%]">
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
                    {ShopSettleList.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.store_title}</TableCell>
                            <TableCell>{item.area_title}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>
                                {SwitchActions(item, CheckShop)}
                            </TableCell>
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

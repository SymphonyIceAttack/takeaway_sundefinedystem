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
        key: 'goods_title',
        label: '名称',
    },
    {
        key: 'AreaTitle',
        label: '校区',
    },
    {
        key: 'store_title',
        label: '店家',
    },

    {
        key: 'allowShopControl',
        label: '审核状态',
    },
    {
        key: 'action',
        label: '操作',
    },
]
const SwitchActions = (
    item: ProductItemType,
    ReViewProduct: (productId: string, isApprove: 0 | 1) => Promise<void>
) => {
    return (
        <div className="flex justify-center gap-4">
            {item.allowShopControl ? (
                <Button
                    onClick={() => {
                        ReViewProduct(item.id, 0)
                    }}>
                    撤回
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        ReViewProduct(item.id, 1)
                    }}>
                    批准
                </Button>
            )}
        </div>
    )
}
interface Props {
    ReViewProduct: (productId: string, isApprove: 0 | 1) => Promise<void>

    ProductList: ProductItemType[]
    total: number
    SetPage: (page: number) => void
    isLoading: boolean
}
const index = ({
    ProductList,
    total,
    SetPage,
    isLoading,
    ReViewProduct,
}: Props) => {
    return (
        <>
            <Table aria-label="xx">
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
                            <TableCell>{item.goods_title}</TableCell>
                            <TableCell>{item.AreaTitle}</TableCell>
                            <TableCell>{item.store_title}</TableCell>
                            <TableCell>
                                {item.allowShopControl ? '已审核' : '未审核'}
                            </TableCell>
                            <TableCell>
                                {SwitchActions(item, ReViewProduct)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination
                className="mt-1 flex w-[100%]"
                size="lg"
                classNames={{ wrapper: 'gap-4 max-w-none mx-auto' }}
                showControls
                boundaries={3}
                total={Math.ceil(total / 10)}
                initialPage={1}
                onChange={SetPage}
            />
        </>
    )
}

export default index

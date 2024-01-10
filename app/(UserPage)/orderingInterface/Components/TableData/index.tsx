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
        key: 'sold_total_all',
        label: '销量',
    },
    {
        key: 'action',
        label: '操作',
    },
]
const SwitchActions = (
    item: ProductItemType,
    AddChartItem: (ProductItem: ProductItemType) => void
) => {
    return (
        <div className="flex justify-center gap-4">
            <Button
                onClick={() => {
                    AddChartItem(item)
                }}>
                点餐
            </Button>
            <Button>反馈</Button>
        </div>
    )
}
interface Props {
    AddChartItem: (ProductItem: ProductItemType) => void
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
    AddChartItem,
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
                            {(columnKey) => (
                                <TableCell>
                                    {columnKey !== 'action'
                                        ? getKeyValue(item, columnKey)
                                        : SwitchActions(item, AddChartItem)}
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
                boundaries={3}
                total={Math.ceil(total / 10)}
                initialPage={1}
                onChange={SetPage}
            />
        </>
    )
}

export default index

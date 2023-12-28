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
} from '@nextui-org/react'

interface RowType {
    key: string
    name: string
    area: string
    shop: string
    number: number
}

const rows: RowType[] = [
    {
        key: '1',
        name: 'Tony Reichert',
        area: 'CEO',
        shop: 'Active',
        number: 12324,
    },
    {
        key: '2',
        name: 'Zoey Lang',
        area: 'Technical Lead',
        shop: 'Paused',
        number: 12324,
    },
    {
        key: '3',
        name: 'Jane Fisher',
        area: 'Senior Developer',
        shop: 'Active',
        number: 12324,
    },
]
type ColumnType =
    | {
          key: 'name'
          label: '名称'
      }
    | {
          key: 'area'
          label: '校区'
      }
    | { key: 'shop'; label: '店家' }
    | {
          key: 'number'
          label: '销量'
      }
    | {
          key: 'action'
          label: '操作'
      }
const columns: ColumnType[] = [
    {
        key: 'name',
        label: '名称',
    },
    {
        key: 'area',
        label: '校区',
    },
    {
        key: 'shop',
        label: '店家',
    },
    {
        key: 'number',
        label: '销量',
    },
    {
        key: 'action',
        label: '操作',
    },
]
const SwitchActions = (item: RowType) => {
    return (
        <div className="flex justify-center gap-4">
            <Button>点餐</Button>
            <Button>反馈</Button>
        </div>
    )
}

const index = () => {
    return (
        <Table aria-label="asdf">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn
                        key={column.key}
                        style={{
                            textAlign:
                                column.key === 'action' ? 'center' : 'start',
                        }}>
                        {column.label}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => (
                            <TableCell>
                                {columnKey !== 'action'
                                    ? getKeyValue(item, columnKey)
                                    : SwitchActions(item)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default index

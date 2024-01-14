import { OrderStatus } from '@/types/order.type'
import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react'
import React from 'react'
import { GoSearch } from 'react-icons/go'
interface Props {
    SelectStatusList: { label: string; value: string }[]
    onSelectionChange: (key: OrderStatus) => void
}
const index = ({ onSelectionChange, SelectStatusList }: Props) => {
    return (
        <div className="mt-2 flex flex-row-reverse items-center justify-between px-8">
            <Autocomplete
                aria-label="xx"
                className="max-w-[20rem]"
                placeholder="筛选订单状态"
                onSelectionChange={(key) => {
                    onSelectionChange(
                        key === null ? OrderStatus.all : (key as OrderStatus)
                    )
                }}
                defaultItems={SelectStatusList}
                defaultSelectedKey={OrderStatus.pending}>
                {(item) => (
                    <AutocompleteItem key={item.value}>
                        {item.label}
                    </AutocompleteItem>
                )}
            </Autocomplete>
        </div>
    )
}

export default index

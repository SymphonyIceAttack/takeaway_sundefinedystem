import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React from 'react'
interface Props {
    selectId: string | null
    titleContent: string

    Array: { key: string; value: string }[]
    onSelectionChange: (key: string | null) => void
}
const index = ({ Array, titleContent, onSelectionChange, selectId }: Props) => {
    return (
        <Autocomplete
            label={titleContent}
            className="max-w-xs"
            selectedKey={selectId}
            onSelectionChange={(key) => {
                onSelectionChange(key === null ? null : (key as string))
            }}>
            {Array.map((item) => (
                <AutocompleteItem key={item.key} value={item.value}>
                    {item.value}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    )
}

export default index

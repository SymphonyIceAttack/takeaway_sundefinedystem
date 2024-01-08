import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React from 'react'
interface Props {
    titleContent: string

    Array: { key: string; value: string }[]
    onSelectionChange: (key: string | undefined) => void
}
const index = ({ Array, titleContent, onSelectionChange }: Props) => {
    return (
        <Autocomplete
            label={titleContent}
            className="max-w-xs"
            onSelectionChange={(key) => {
                onSelectionChange(key === null ? undefined : (key as string))
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

import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React from 'react'
interface Props {
    titleContent: string

    Array: string[]
}
const index = ({ Array, titleContent }: Props) => {
    return (
        <Autocomplete
            label={titleContent}
            className="max-w-xs"
            onSelectionChange={(key) => {}}>
            {Array.map((item) => (
                <AutocompleteItem key={item} value={item}>
                    {item}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    )
}

export default index

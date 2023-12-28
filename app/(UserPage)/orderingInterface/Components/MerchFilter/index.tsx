import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import React from 'react'
interface Props {
    MerchantArray: string[]
}
const index = ({ MerchantArray }: Props) => {
    return (
        <Autocomplete label="选择商家" className="max-w-xs">
            {MerchantArray.map((Merchant) => (
                <AutocompleteItem key={Merchant} value={Merchant}>
                    {Merchant}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    )
}

export default index

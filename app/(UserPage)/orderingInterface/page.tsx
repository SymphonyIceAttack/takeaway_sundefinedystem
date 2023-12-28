'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import MerchFilter from './Components/MerchFilter'
import React from 'react'

const page = () => {
    const MerchantArray = ['test', 'asdf', 'sadf', 'uiyig']
    return (
        <div>
            <MerchFilter MerchantArray={MerchantArray} />
        </div>
    )
}

export default page

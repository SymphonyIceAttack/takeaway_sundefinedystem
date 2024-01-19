import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react'
import React from 'react'
import { GoSearch } from 'react-icons/go'
interface Props {
    isReview: '0' | '1' | null
    isReviewList: { label: string; value: '0' | '1' }[]
    onSelectionChange: (key: '0' | '1' | null) => void
}
const index = ({ onSelectionChange, isReviewList, isReview }: Props) => {
    return (
        <div className="mt-2 flex flex-row-reverse items-center justify-between px-8">
            <Autocomplete
                aria-label="xx"
                className="max-w-[20rem]"
                placeholder="筛选审核状态"
                onSelectionChange={(key) => {
                    onSelectionChange(key === null ? null : (key as '0' | '1'))
                }}
                defaultItems={isReviewList}
                selectedKey={isReview}>
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

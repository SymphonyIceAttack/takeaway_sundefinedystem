import { Button, Chip } from '@nextui-org/react'
import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { ChartItemType } from '../../../useChartArray.hook'

interface Props {
    ChartItem: ChartItemType
    DeleteChartItem: (ChartItem: ChartItemType) => void
}

const index = ({ ChartItem, DeleteChartItem }: Props) => {
    return (
        <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
            <div className="flex-1"></div>
            <span>{ChartItem.Productname}</span>
            <Chip radius="sm" size="lg">
                {ChartItem.number}
            </Chip>
            <Button
                isIconOnly
                variant="light"
                aria-label="Like"
                onClick={() => DeleteChartItem(ChartItem)}>
                <MdOutlineDelete size={30} />
            </Button>
        </div>
    )
}

export default index

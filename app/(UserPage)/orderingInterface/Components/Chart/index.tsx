import { Button, Chip, Divider } from '@nextui-org/react'
import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
const index = () => {
    return (
        <div className=" mt-4  w-[100%] max-w-[20rem] rounded-xl border-2 border-solid border-gray-200 ">
            <div className="text-center text-[30px] font-bold">购物车</div>
            <div className="max-h-[20rem] overflow-scroll">
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
                <div className="mx-auto my-2 flex w-[80%] items-center gap-4">
                    <div className="flex-1"></div>
                    <span>菜品sadf名称</span>
                    <Chip radius="sm" size="lg">
                        2
                    </Chip>
                    <Button isIconOnly variant="light" aria-label="Like">
                        <MdOutlineDelete size={30} />
                    </Button>
                </div>
            </div>
            <Divider
                orientation="horizontal"
                className="mx-auto my-4 w-[90%]"
            />
            <div className="my-4 box-border flex items-center justify-between px-8">
                <span className="text-center text-[20px] font-bold">总价</span>
                <span className="text-center text-[20px] font-bold">sadf</span>
            </div>
            <div className="my-8 flex items-center">
                <Button className="mx-auto w-[80%] bg-black text-white">
                    下单
                </Button>
            </div>
        </div>
    )
}

export default index

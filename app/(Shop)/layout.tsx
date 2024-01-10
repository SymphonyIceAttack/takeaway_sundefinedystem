'use client'
import { Button, Listbox, ListboxItem } from '@nextui-org/react'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { LuPackage2 } from 'react-icons/lu'
import { FaRegBell } from 'react-icons/fa'
import { FaBorderNone } from 'react-icons/fa'
import { usePathname, useRouter } from 'next/navigation'

import Link from 'next/link'

const layout = ({ children }: PropsWithChildren<{}>) => {
    const pathname = usePathname()
    const route = useRouter()

    return (
        <div className="box-border p-2">
            <div className="flex h-20 items-center bg-gray-100/40">
                <div className="flex h-[100%] w-80 items-center justify-between rounded-tl-lg  border-[1px] border-solid border-slate-400  px-6">
                    <div className="flex items-center">
                        <LuPackage2 size={30} className={'mx-4'} />
                        <span className={'text-[20px] font-bold'}>
                            商家后台
                        </span>
                    </div>
                    <Button
                        isIconOnly
                        className={
                            'border-[1px] border-solid border-slate-400 bg-white'
                        }>
                        <FaRegBell size={20} />
                    </Button>
                </div>
                <div className="h-[100%] flex-1 rounded-tr-lg  border-[1px] border-l-0 border-solid border-slate-400"></div>
            </div>
            <div className="flex h-[calc(100vh-100px)]">
                <div className="h-[100%] w-80 rounded-bl-lg border-[1px] border-t-0 border-solid border-slate-400 bg-gray-100/40 p-2">
                    <Listbox aria-label="Actions">
                        <ListboxItem
                            className={'h-[60px] '}
                            key="/orderdeal"
                            startContent={<FaBorderNone size={35} />}
                            as={Link}
                            href="/orderdeal"
                            style={{
                                background:
                                    pathname === '/orderdeal'
                                        ? '#d4d4d8'
                                        : 'none',
                            }}>
                            <span className={'text-[20px]'}>订单列表</span>
                        </ListboxItem>
                    </Listbox>
                </div>
                <div
                    className={
                        'h-[100%] flex-1 overflow-scroll rounded-br-lg border-[1px] border-l-0 border-t-0 border-solid border-slate-400'
                    }>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout

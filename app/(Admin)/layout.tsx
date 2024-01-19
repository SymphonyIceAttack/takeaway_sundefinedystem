'use client'
import { Button, Listbox, ListboxItem } from '@nextui-org/react'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { LuPackage2 } from 'react-icons/lu'
import { FaRegBell } from 'react-icons/fa'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { usePathname, useRouter } from 'next/navigation'
import { MdPreview } from 'react-icons/md'
import { useRouterGuard } from '@/hook/useRouterGuard.hook'
import Link from 'next/link'

const layout = ({ children }: PropsWithChildren<{}>) => {
    const [UserPayLoad] = useRouterGuard()
    const pathname = usePathname()
    const route = useRouter()

    return (
        <div className="box-border p-2">
            <div className="flex h-20 items-center bg-gray-100/40">
                <div className="flex h-[100%] w-80 items-center justify-between rounded-tl-lg  border-[1px] border-solid border-slate-400  px-6">
                    <div className="flex items-center">
                        <LuPackage2 size={30} className={'mx-4'} />
                        <span className={'text-[20px] font-bold'}>
                            外卖管理端
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
                            key="/takeoutData"
                            startContent={<TbBrandGoogleAnalytics size={35} />}
                            as={Link}
                            href="/takeoutData"
                            textValue="takeoutData"
                            style={{
                                background:
                                    pathname === '/takeoutData'
                                        ? '#d4d4d8'
                                        : 'none',
                            }}>
                            <span className={'text-[20px]'}>数据展示</span>
                        </ListboxItem>
                        <ListboxItem
                            textValue="reviewDishes"
                            className={'h-[60px] '}
                            key="/reviewDishes"
                            startContent={<MdPreview size={35} />}
                            as={Link}
                            href="/reviewDishes"
                            style={{
                                background:
                                    pathname === '/reviewDishes'
                                        ? '#d4d4d8'
                                        : 'none',
                            }}>
                            <span className={'text-[20px]'}>审核菜品</span>
                        </ListboxItem>
                        <ListboxItem
                            textValue="test"
                            className={'h-[60px] '}
                            key="/test"
                            startContent={<TbBrandGoogleAnalytics size={35} />}
                            as={Link}
                            href="/test"
                            style={{
                                background:
                                    pathname === '/test' ? '#d4d4d8' : 'none',
                            }}>
                            <span className={'text-[20px]'}>test</span>
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

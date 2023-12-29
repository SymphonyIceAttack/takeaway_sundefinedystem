'use client'
import { LuPizza } from 'react-icons/lu'

import React, { PropsWithChildren, useState } from 'react'
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react'
import { usePathname } from 'next/navigation'
const layout = ({ children }: PropsWithChildren<{}>) => {
    const pathname = usePathname()

    return (
        <div>
            <Navbar
                maxWidth="full"
                isBordered={true}
                classNames={{
                    item: [
                        'flex',
                        'relative',
                        'h-full',
                        'items-center',
                        "data-[active=true]:after:content-['']",
                        'data-[active=true]:after:absolute',
                        'data-[active=true]:after:bottom-0',
                        'data-[active=true]:after:left-0',
                        'data-[active=true]:after:right-0',
                        'data-[active=true]:after:h-[2px]',
                        'data-[active=true]:after:rounded-[2px]',
                        'data-[active=true]:after:bg-primary',
                    ],
                }}>
                <NavbarContent className="">
                    <NavbarItem isActive={pathname === '/landing'}>
                        <Link
                            href="/landing"
                            color={
                                pathname === '/landing'
                                    ? 'primary'
                                    : 'foreground'
                            }>
                            <LuPizza size={30} />
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {pathname === '/landing' ? (
                    <NavbarContent
                        className="mx-2"
                        justify="end"
                        style={{ flexGrow: 0 }}>
                        <NavbarItem className="">
                            <Link href="/login">登录</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="/signUp"
                                variant="flat">
                                注册
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                ) : (
                    <NavbarContent className="gap-4" justify="end">
                        <NavbarItem
                            isActive={pathname === '/orderingInterface'}>
                            <Link href="/orderingInterface">点餐</Link>
                        </NavbarItem>
                        <NavbarItem isActive={pathname === '/recommend'}>
                            <Link href="/recommend">个性化推荐</Link>
                        </NavbarItem>
                    </NavbarContent>
                )}
            </Navbar>
            {children}
        </div>
    )
}

export default layout

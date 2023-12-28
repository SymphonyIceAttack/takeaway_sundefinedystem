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
            <Navbar maxWidth="full" isBordered={true}>
                <NavbarContent className="">
                    <LuPizza size={30} />
                </NavbarContent>

                <NavbarContent
                    className="mx-2"
                    justify="end"
                    style={{ flexGrow: 0 }}>
                    {pathname === '/signUp' ? (
                        <NavbarItem className="">
                            <Button
                                as={Link}
                                color="primary"
                                href="/login"
                                variant="flat">
                                登录
                            </Button>
                        </NavbarItem>
                    ) : (
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="/signUp"
                                variant="flat">
                                注册
                            </Button>
                        </NavbarItem>
                    )}
                </NavbarContent>
            </Navbar>
            {children}
        </div>
    )
}

export default layout

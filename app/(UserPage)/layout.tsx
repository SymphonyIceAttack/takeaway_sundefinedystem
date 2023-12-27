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
                <NavbarContent className="gap-4" justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                {pathname === '/landing' && (
                    <NavbarContent
                        className="mx-2"
                        justify="end"
                        style={{ flexGrow: 0 }}>
                        <NavbarItem className="">
                            <Link href="#">登录</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                as={Link}
                                color="primary"
                                href="#"
                                variant="flat">
                                注册
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                )}
            </Navbar>
            {children}
        </div>
    )
}

export default layout

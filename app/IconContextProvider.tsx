'use client'
import React, { PropsWithChildren } from 'react'
import { IconContext } from 'react-icons'
const IconContextProvider = ({ children }: PropsWithChildren<{}>) => {
    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            {children}
        </IconContext.Provider>
    )
}

export default IconContextProvider

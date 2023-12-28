'use client'
import React from 'react'
import TitleContent from './Components/TitleContent'
import TopList from './Components/TopList'
import Footer from './Components/Footer'
const page = () => {
    return (
        <div className="">
            <TitleContent />
            <div className="bg-gray-100 px-8 pb-12 pt-4">
                <div className="mb-4 text-[50px] text-black ">今日榜首</div>
                <TopList />
            </div>
            <Footer />
        </div>
    )
}

export default page

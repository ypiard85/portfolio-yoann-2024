'use client'

import Link from "next/link";
import Languages from "./__Languages";
import React, { useTransition } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslateContext } from "../../context/TranslateProvider";
import { IoMdClose } from "react-icons/io";



export default function NavigationBar() {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const { dictionary } = useTranslateContext()

    const navigation = dictionary.navigation



    return (
        <>
            <nav className='sticky top-0 bg-blue-dark z-[1000] py-5 shadow'>
                <div className="container flex items-center justify-between">
                    <div>
                        <Link href="/" className="font-semibold font-jost text-3xl text-white">YP</Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='hidden md:flex items-center gap-4'>
                            <Link href="#home" className="font-jost hover:text-blue transition-all text-white font-bold">{navigation.home}</Link>
                            <Link href="#services" className="font-jost hover:text-blue transition-all text-white font-bold">{navigation.service}</Link>
                            <Link href="#projects" className="font-jost hover:text-blue transition-all text-white font-bold">{navigation.project}</Link>
                            <Languages />
                        </div>
                        <Link href="#contact" className="hover:bg-blue transition-colors font-jost text-white font-bold border py-2 px-3 rounded-md border-blue">{navigation.contact}</Link>
                        <button onClick={() => setIsOpen(true)} className='md:hidden block text-white' ><GiHamburgerMenu className='w-10 h-7' /></button>
                    </div>
                </div>
            </nav>
            {
                isOpen ? <div id="drawer" className='block md:hidden fixed top-0 right-0 w-[100vw] h-[100vh] bg-overlay z-[1000] '>
                    <div className='animate-fadeY bg-white w-[450px] max-w-full absolute left-0 top-0 bottom-0'>
                            <div className='space-y-3 flex justify-center flex-col items-center mt-20'>
                                <Link onClick={() => setIsOpen(false)} href="#home" className="block text-lg hover:text-blue transition-all font-jost font-bold">{navigation.home}</Link>
                                <Link onClick={() => setIsOpen(false)} href="#services" className="block text-lg hover:text-blue transition-all font-jost font-bold">{navigation.service}</Link>
                                <Link onClick={() => setIsOpen(false)} href="#projects" className="block text-lg hover:text-blue transition-all font-jost font-bold">{navigation.project}</Link>
                                <Languages />
                            </div>
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500">
                            <IoMdClose className='w-7 h-7' />
                        </button>
                    </div>
                </div> : <></>
            }
        </>
    )

}
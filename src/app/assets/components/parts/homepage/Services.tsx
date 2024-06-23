'use client'

import { MdOutlineSchema } from "react-icons/md";
import { IoServerOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import TextSection from "../../texts/TitleSection";
import ScrollReveal from 'scrollreveal';
import React from "react";
import { useTranslateContext } from "@/app/assets/context/TranslateProvider";
import ServiceCard from "../../cards/ServiceCard";

export default function Services() {

    const { dictionary }: any = useTranslateContext()

    const data = dictionary.services

    React.useEffect(() => {
        // S'assurer que ScrollReveal ne soit exécuté que côté client
        if (typeof window !== 'undefined') {
            ScrollReveal().reveal('.services', {
                distance: '50px',
                duration: 1000,
                easing: 'ease-in-out',
                origin: 'bottom',
            });
        }
    }, []);

    return (
        <div className="relative services" id="services">
            <div className="container py-10">
                <TextSection
                    subtitle={data.subtitle}
                    title={data.title}
                />
                <div className='z-[10] relative mt-10 flex flex-col lg:flex-row justify-center flex-wrap gap-5'>
                    {
                        data.lists.map((list: any, index: number) => {
                            return (
                                <div  key={index} className='w-full lg:w-[270px]'>
                                    <ServiceCard Icon={list.icon} title={list.title} tasks={list.tasks} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
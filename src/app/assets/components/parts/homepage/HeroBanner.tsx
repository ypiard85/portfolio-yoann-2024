'use client'

import { PlayIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import yoannlogo from '@/app/assets/images/yoann.png'
import herobackground from '../../../images/hero.6a3932b7.png'
import ContactIcons from '../../contact/ContactIcons';
import ScrollReveal from 'scrollreveal';
import React from 'react';
import { useTranslateContext } from '@/app/assets/context/TranslateProvider'


export default function HeroBanner() {

    const { dictionary }: any = useTranslateContext()

    const data = dictionary.introduction

    React.useEffect(() => {
        // S'assurer que ScrollReveal ne soit exécuté que côté client
        if (typeof window !== 'undefined') {
            ScrollReveal().reveal('.hero-banner-left', {
                distance: '50px',
                duration: 1000,
                delay: 500,
                easing: 'ease-in-out',
                origin: 'left',
            });
        }
    }, []);

    return (
        <div
            className='relative min-h-[500px]'
            id="home"
            style={{
                background: `#0E0E5F url(${herobackground.src}) no-repeat 0 100%`,
            }}
        >
            <div className=' py-10 container items-center justify-around flex-col lg:flex-row flex items-center gap-10'>
                <div className='w-[450px] max-w-full hero-banner-left flex flex-col max:w-full mt-10 items-center md:items-start gap-2'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-white font-bold font-jost w-full md:flex-1 flex flex-col gap-3'>
                        <span className='block font-open-sans uppercase text-xl sm:text-2xl font-bold text-blue tracking-[0.2em]'>{data.hello} </span>
                        <span>{data.name}</span>
                    </h1>
                    <p className='font-open-sans text-center md:text-left text-xl font-bold text-white'>
                        {data.occupation_start} <span className='text-blue'>{data.occupation_end}</span>
                    </p>
                    <div className='my-5'>
                        <ContactIcons />
                    </div>
                    <div className='flex items-center gap-10 mt-10'>
                        <div className='w-[80px] h-[80px]  rounded-full relative'>
                            <span className="z-[1] animate-ping duration-2000 absolute h-full w-full rounded-full bg-blue"></span>
                            <button className='z-[10] rounded-full bg-blue-light absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                                <PlayIcon className='w-8 h-8 fill-blue text-blue' />
                            </button>
                        </div>
                        <span className='font-open-sans text-white'>{data.video_label}</span>
                    </div>
                </div>

                <div className='hero-banner-right md:w-[400px] md:h-[400px] max-w-full w-[300px] h-[300px] bg-white rounded-full relative'>
                    <Image
                        src={yoannlogo}
                        alt='yoann piard'
                        className='
                        rounded-full
                        h-full max-w-full w-full object-containt'
                    />
                </div>
            </div>
        </div>
    )
}
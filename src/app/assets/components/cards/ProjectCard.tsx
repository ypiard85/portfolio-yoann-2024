'use client'

import Image from "next/image"
import imgtest from '../../images/yoann.png'
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"
import React from "react"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ProjectCardProps {
    service: 'développement' | 'wordpress' | 'conception' | 'conception / développement' | 'script sql'
    techologies: string
    title: string,
    images: Array<string>,
    thumbnail: string,
    description: string,
    link?: string
}

export default function ProjectCard({ service, techologies, title, images, thumbnail, description, link }: ProjectCardProps) {

    let [isOpen, setIsOpen] = React.useState(false)

    return (
        <React.Fragment>
            <div className='projet-dard py-5 border-t flex gap-5 items-center flex-wrap grid grid-cols-1 lg:grid-cols-[1fr,3fr,2fr]'>
                <span className="font-jost text-sm text-zinc-300 uppercase w-fit block border border-text-zinc-300 p-2">{service}</span>
                <span className="font-jost text-white font-semibold text-3xl md:text-4xl w-full">{title}</span>

                <div className="flex items-center gap-10 justify-between">
                    <div className='w-[65%] h-[150px] md:w-[300px] h-[195px] rounded-md shadow-xl'>
                        <img src={thumbnail} alt={title} className=' w-full h-full object-cover bg-black rounded-md' />
                    </div>
                    <button onClick={() => setIsOpen(true)} className="w-fit p-3 rounded-full border border-gray hover:bg-blue hover:text-white text-blue hover:border-blue">
                        <PlusIcon className="w-10" />
                    </button>
                </div>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center" style={{ backgroundColor: 'rgba(12, 12, 12, 0.63)' }}>
                    <DialogPanel className="w-[1000px] max-w-[90%] overflow-y-auto h-[100%] rounded-md space-y-8 bg-blue-light p-6">
                        <div className='text-right'>
                            <button onClick={() => setIsOpen(false)} className=" bg-white p-2 rounded-full"><XMarkIcon className="w-7" /></button>
                        </div>
                        <div className="lg:h-[500px] md:h-[350px] h-[250px]  w-full rounded ">
                            <Swiper navigation={true} modules={[Navigation]} className="projetswiper rounded relative">
                                {
                                    images.map((image: string, index: number) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img src={image} alt={title} />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                        <span className="font-jost text-sm text-zinc-300 uppercase w-fit block border border-text-zinc-300 p-2">{service}</span>
                        <h2 className="text-4xl font-jost font-semibold text-white"> {title} </h2>
                        <div dangerouslySetInnerHTML={{__html: description}} className="font-jost text-zinc-400 text-lg whitespace-pre-line"></div>
                        <span className="block text-white"><span className="text-gold">Techologies :</span> {techologies} </span>
                        {link && <a href={link} target='__blank' className='hover:scale-105 ease-in duration-200 block w-fit bg-blue py-2.5 px-3 rounded text-white'>Voir le projet</a>}
                    </DialogPanel>
                </div>
            </Dialog>

        </React.Fragment>
    )


}
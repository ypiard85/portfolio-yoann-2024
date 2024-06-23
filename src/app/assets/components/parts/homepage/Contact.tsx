'use client'

import { IoCall, IoLocation, IoMail } from "react-icons/io5"
import TextSection from "../../texts/TitleSection"
import ContactCard from "../../cards/ContactCard"
import ContactForm from "../../form/ContactForm"
import ScrollReveal from 'scrollreveal';
import React from "react"
import { useTranslateContext } from "@/app/assets/context/TranslateProvider"


export default function Contact() {

    const { dictionary }: any = useTranslateContext()

    const data = dictionary.contact

    React.useEffect(() => {
        // S'assurer que ScrollReveal ne soit exécuté que côté client
        if (typeof window !== 'undefined') {
          ScrollReveal().reveal('.contact', {
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
          });
        }
      }, []);

    return (
        <div className="container py-10 contact" id="contact">
            <TextSection
                title={data.title}
                subtitle={data.subtitle}
            />
            <div className="flex flex-col-reverse lg:flex-row mt-10 justify-between gap-10">
                <div className="space-y-10">
                    {
                        data.lists.map((list:any, index:number)=>{
                            return (
                                <ContactCard key={index} Icon={list.icon} title={list.title} label={list.label} />
                            )
                        })
                    }
                </div>
                <div className="w-[700px] max-w-full">
                    <ContactForm />
                </div>
            </div>
        </div>


    )
}
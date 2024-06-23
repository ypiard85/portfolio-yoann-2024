'use client'

import React from "react"

interface TextSectionProps{
    subtitle: string,
    title: string
}

export default function TextSection({subtitle, title}: TextSectionProps) {

    return (
        <React.Fragment>
            <h2 className='relative font-jost text-center text-gold uppercase tracking-[0.2em]'> {subtitle} </h2>
            <h2 className='mt-3 relative text-center font-bold font-jost text-white text-3xl md:text-4xl tracking-[0.05em]'>{title}</h2>
        </React.Fragment>
    )
}
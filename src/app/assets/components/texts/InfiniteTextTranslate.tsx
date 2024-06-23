'use client'

import { useTranslateContext } from "../../context/TranslateProvider"



export default function IfiniteTextTranslate() {

    const { dictionary }: any = useTranslateContext()

    const text = dictionary.infinite_text

    return (
        <div className="container">
            <div className="marquee block m-auto overflow-hidden whitespace-nowrap">
                <span className="animate-right-to-left font-jost font-bold whitespace-nowrap">{text.title}</span>
                <span className="animate-right-to-left font-jost font-bold whitespace-nowrap">{text.title}</span>
            </div>
            <div className="marquee marquee2 block m-auto overflow-hidden whitespace-nowrap">
                <span className="animate-left-to-right font-jost whitespace-nowrap">{text.subtitle}</span>
                <span className="animate-left-to-right font-jost whitespace-nowrap">{text.subtitle}</span>
            </div>
        </div>
    )

}
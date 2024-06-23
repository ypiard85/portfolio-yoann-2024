'use client'

import { IconType } from "react-icons/lib";

interface ContactCardInterface {
    Icon: IconType;
    title: string;
    label: string;
}

export default function ContactCard({ Icon, title, label }: Readonly<ContactCardInterface>) {

    return (
        <div className="flex items-center gap-5">
            <div className="bg-blue lg:p-5 p-4 rounded-full">
                <Icon className="lg:w-7 lg:h-7 h-6 w-6 text-white" />
            </div>
            <div className="text-white space-y-0">
                <h3 className="font-semibold text-2xl  font-jost">{title}</h3>
                <p className="font-open-sans text-zinc-300 text-lg">{label}</p>
            </div>
        </div>
    )
}
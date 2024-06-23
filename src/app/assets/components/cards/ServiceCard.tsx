'use client'

import { IconType } from "react-icons/lib";

interface ServiceCardType {
    Icon: IconType
    title: string;
    tasks: Array<string>
}

export default function ServiceCard({ Icon, title, tasks }: ServiceCardType) {

    return (
        <div className='w-full h-fit bg-[#2c2c80] p-4 rounded-xl shadow-xl text-white'>
            <Icon className="text-4xl text-white" />
            <h3 className="text-2xl font-jost font-bold my-4">{title}</h3>
            <ul className="list-disc ps-4 font-open-sans flex flex-col gap-3">
                {tasks.map((task: any, index: number) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
    )

}
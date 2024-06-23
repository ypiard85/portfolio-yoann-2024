'use client'

import { IoLanguage } from 'react-icons/io5'



export default function TranslateLoading(){

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="p-10 border rounded-md flex flex-col items-center justify-center">
                <IoLanguage className='w-40 h-40 fill-white' />
                <p className='text-white text-lg'>Is translating</p>
            </div>
        </div>
    )

}
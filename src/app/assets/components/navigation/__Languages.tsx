'use client'

import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguage } from 'react-icons/io5'
import { LANGUAGES } from '../../utls'
import { useTranslateContext } from '../../context/TranslateProvider';



export default function Languages() {

    const {updateCurrentLanguage, currentLanguage} = useTranslateContext()

    const current_lang = localStorage.getItem('lang');

    const currentLanguageLabel = () => {
        const language : any = LANGUAGES.find(language => language.slug === currentLanguage);
        return language.name;
    };




    return (
        <Menu>
            <MenuButton className="inline-flex items-center hover:text-blue transition-all py-2 px-3 gap-2 rounded-md text-black md:text-white text-lg">
                <IoLanguage />
                {currentLanguageLabel()}
                <IoMdArrowDropdown  className="size-4 text-black md:text-white" />
            </MenuButton>
            <Transition
                enter="transition ease-out duration-75"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <MenuItems
                    anchor="bottom end"
                    className="relative z-[1000] w-52 origin-top-right rounded-xl border bg-black p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                >
                    {
                        LANGUAGES.map((language: any) => {
                            return (
                                <MenuItem>
                                <button onClick={() =>  updateCurrentLanguage(language.slug) } className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                    {language.name}
                                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">{language.slug}</kbd>
                                </button>
                            </MenuItem>
                            )
                        })
                    }
                </MenuItems>
            </Transition>
        </Menu>
    )
}
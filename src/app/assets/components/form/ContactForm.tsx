'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import {  contactSchemaEn, contactSchemaFr, contactSchemaKr } from "../../lib/zod";
import axios from "axios";
import React from "react";
import ScrollReveal from 'scrollreveal';
import { useTranslateContext } from "../../context/TranslateProvider";

type Inputs = {
    phone: string
    name: string
    email: string
    subject: string
    message: string,
    error: string
}

export default function ContactForm() {

    const { dictionary, currentLanguage }: any = useTranslateContext()

    const form = dictionary.contact.form

    const currentValidationForm = () => {
        if(currentLanguage == 'fr'){
            return contactSchemaFr
        }else if(currentLanguage == 'en'){
            return contactSchemaEn
        }else if(currentLanguage == 'kr'){
            return contactSchemaKr
        }
        return contactSchemaKr
    }


    React.useEffect(() => {
        // S'assurer que ScrollReveal ne soit exécuté que côté client
        if (typeof window !== 'undefined') {
            ScrollReveal().reveal('form', {
                distance: '40px',
                delay: 500,
                easing: 'ease-in-out',
                origin: 'bottom',
            });
            ScrollReveal().reveal('form button', {
                distance: '40px',
                delay: 700,
                easing: 'ease-in-out',
                origin: 'bottom',
            });
        }
    }, []);

    const [successMessage, setSuccessMessage] = React.useState<string>('')



    const {
        register,
        handleSubmit,
        watch,
        setError,
        reset,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm<Inputs>({
        resolver: zodResolver(currentValidationForm())
    })

    const onSubmit = async (data: Inputs) => {
        clearErrors('root')
        try {
            await axios.post('/api/contact/send', data)
            reset()
            setSuccessMessage(form.success_message)
        } catch (error) {
            setError('error', {
                message: form.error_message
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="space-y-3">
                <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] gap-3">
                    <div>
                        <input {...register('name')} type="text" className="input" placeholder={form.name.placeholder} />
                        <span className="text-white text-open-sans text-sm block">{errors?.name?.message}</span>
                    </div>
                    <div>
                        <input {...register('email')} type="text" className="input" placeholder={form.email.placeholder} />
                        <span className="text-white text-open-sans text-sm block">{errors?.email?.message}</span>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] gap-3">
                    <div>
                        <input {...register('phone')} type="text" className="input" placeholder={form.phone.placeholder} />
                        <span className="text-white text-open-sans text-sm block"><span>{errors?.phone?.message}</span></span>
                    </div>
                    <div>
                        <input  {...register('subject')} type="text" className="input" placeholder={form.subject.placeholder} />
                        <span className="text-white text-open-sans text-sm block">{errors?.subject?.message}</span>
                    </div>
                </div>
                <div>
                    <textarea {...register('message')} placeholder={form.message.placeholder} className="input" rows={5} ></textarea>
                    <span className="text-white text-sm block">{errors?.message?.message}</span>
                </div>
                {errors?.error ? <div className='p-2 text-white bg-red-500 rounded-md'> {errors?.error?.message} </div> : <></>}
                {successMessage ? <div className='p-2 text-white bg-green-500 rounded-md'> {successMessage} </div> : <></>}
                <button disabled={isSubmitting} className='bg-blue py-3 px-4 text-white rounded-md flex items-center gap-2'>
                    {
                        isSubmitting && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {form.button_label}
                </button>
            </div>
        </form>
    )

}
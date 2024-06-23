'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import TextSection from '../../texts/TitleSection';
import ProjectCard from '../../cards/ProjectCard';


import bbnfeed from '../../../images/projets/bbn/bbnfeed.jpg'
import bbndetail from '../../../images/projets/bbn/bbndetail.jpg'
import bbndashboard from '../../../images/projets/bbn/bbndashboard.jpg'




import ScrollReveal from 'scrollreveal';

import { aboutir_description, blog_description, coreego_description, cr_planning_description, cr_vitrine_description, eauvive_description, labonneplace_description, les_mathes_description, meteo_description } from '../../cards/utils';
import React from 'react';
import { useTranslateContext } from '@/app/assets/context/TranslateProvider';

export default function Projects() {

    const { dictionary }: any = useTranslateContext()

    const data = dictionary.projects

    React.useEffect(() => {
        // S'assurer que ScrollReveal ne soit exécuté que côté client
        if (typeof window !== 'undefined') {
            ScrollReveal().reveal('.projects', {
                distance: '100px',
                opacity: 0,
                duration: 1000,
                easing: 'ease-in-out',
                origin: 'bottom',
            });
        }
    }, []);

    return (
        <div className="relative projects" id="projects">
            <div className="container py-10">
                <TextSection
                    subtitle={data.subtitle}
                    title={data.title}
                />
                <div className='mt-10'>
                    {
                        data.lists.map((list: any, index: number) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    techologies={list.techologies}
                                    title={list.title}
                                    service={list.service}
                                    images={list.images}
                                    thumbnail={list.thumbnail}
                                    description={list.description}
                                    link={list.link}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )

}
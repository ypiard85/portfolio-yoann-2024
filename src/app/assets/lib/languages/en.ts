import { FaWordpressSimple } from "react-icons/fa";
import { IoCall, IoLocation, IoMail, IoServerOutline } from "react-icons/io5";
import { MdOutlineSchema } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

import { aboutir_description, blog_description, coreego_description, cr_planning_description, cr_vitrine_description, eauvive_description, labonneplace_description, les_mathes_description, meteo_description } from "./projects-description/en";

import homepagecoreego from '../../images/projets/coreego/homepage.jpg'
import coreegodetail from '../../images/projets/coreego/coreegodetail.jpg'
import coreegoform from '../../images/projets/coreego/coreegoform.jpg'
import coreegomap from '../../images/projets/coreego/coreegomap.jpg'
import coreegofeed from '../../images/projets/coreego/coreegofeed.jpg'

import crplanningbook from '../../images/projets/codesrousseau/planning/crplanningbook.jpg'
import crform from '../../images/projets/codesrousseau/planning/crform.jpg'
import crsetting from '../../images/projets/codesrousseau/planning/crsettings.jpg'
import crplanningdemo from '../../images/projets/codesrousseau/planning/crplanningdemo.jpg'

import crvitrineresume from '../../images/projets/codesrousseau/vitrine/crvitrineresume.jpg'
import crvitrineshow from '../../images/projets/codesrousseau/vitrine/crvitrineshow.jpg'

import lesmathesactus from '../../images/projets/lesmathes/lesmathesactus.jpg'
import lesmatheshome from '../../images/projets/lesmathes/lesmatheshome.jpg'
import lesmathesnav from '../../images/projets/lesmathes/lesmathesnav.jpg'

import eauvivehome from '../../images/projets/eauvive/eauvivehome.jpg'
import eauviveproducteurs from '../../images/projets/eauvive/eauviveproducteurs.jpg'

import aboutirefiltre from '../../images/projets/aboutire/aboutirefiltre.jpg'

import labonneplacehome from '../../images/projets/labonneplace/labonneplacehome.jpg'
import labonneplacevendre from '../../images/projets/labonneplace/labonneplacevendre.jpg'
import labonneplacemokup from '../../images/projets/labonneplace/labonneplacemokup.jpg'

import meteo from '../../images/projets/meteo/meteo.jpg'
import meteo2 from '../../images/projets/meteo/meteo2.jpg'

import bbnfeed from '../../images/projets/bbn/bbnfeed.jpg'
import bbndetail from '../../images/projets/bbn/bbndetail.jpg'
import bbndashboard from '../../images/projets/bbn/bbndashboard.jpg'

export default {
    navigation:{
        home: 'Home',
        service: 'My Services',
        project: 'My Projects',
        contact: 'Contact me',
    },
    introduction: {
        hello: "HELLO! I AM",
        name: "Yoann Piard",
        occupation_start: "I am a",
        occupation_end: "Applications Developer Designer",
        video_label: "Play the video"
    },
    services: {
        subtitle: "What I Offer",
        title: "My Services",
        lists: [
            {
                icon: MdOutlineSchema,
                title: "Design",
                tasks: [
                    "Writing specifications",
                    "Writing test plans",
                    "Designing functional and technical documentation",
                    "Database design"
                ]
            },
            {
                icon: IoServerOutline,
                title: "Backend Development",
                tasks: [
                    "Development with Symfony / Laravel languages",
                    "Development of Rest APIs",
                    "Management of MySQL relational databases",
                    "Writing and maintaining unit and integration tests with PHPUnit"
                ]
            },
            {
                icon: RiComputerLine,
                title: "Frontend Development",
                tasks: [
                    "Development with VueJs / ReactJs / NextJs languages",
                    "Writing and maintaining integration and end-to-end tests"
                ]
            },
            {
                icon: FaWordpressSimple,
                title: "WordPress Development",
                tasks: [
                    "Development of custom WordPress themes from scratch",
                    "Graphic integration",
                    "Custom plugin development"
                ]
            }
        ]
    },
    projects : {
        subtitle: "portfolio",
        title: "My Projects",
        lists: [
            {
                title: 'Community Application "Coreego"',
                techologies: 'ReactJs, Laravel API',
                service: 'design / development',
                images: [homepagecoreego.src, coreegofeed.src, coreegodetail.src, coreegoform.src, coreegomap.src],
                thumbnail: homepagecoreego.src,
                description: coreego_description,
                link: 'https://coreego.fr/'
            },
            {
                title: 'Appointment Scheduling',
                techologies: 'VueJs',
                service: 'development',
                images: [crplanningbook.src, crplanningdemo.src, crform.src, crsetting.src],
                thumbnail: crplanningbook.src,
                description: cr_planning_description,
                link: 'https://www.calameo.com/read/00357616399da01359411'
            },
            {
                title: 'Digital Showcase',
                techologies: 'VueJs',
                service: 'development',
                images: [crvitrineresume.src, crvitrineshow.src],
                thumbnail: crvitrineresume.src,
                description: cr_vitrine_description,
                link: 'https://www.youtube.com/watch?app=desktop&v=TI2AufnckOE'
            },
            {
                title: 'City of Les Mathes | La Palmyre',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: 'wordpress',
                images: [lesmatheshome.src, lesmathesnav.src, lesmathesactus.src],
                thumbnail: lesmatheshome.src,
                description: les_mathes_description,
                link: 'https://mairie-lesmatheslapalmyre.com/'
            },
            {
                title: 'Eau Vive La Rochelle',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: 'wordpress',
                images: [eauvivehome.src, eauviveproducteurs.src],
                thumbnail: eauvivehome.src,
                description: eauvive_description,
                link: 'https://www.larochelle.bio/'
            },
            {
                title: 'SQL Script for Filter System',
                techologies: 'Wordpress, SQL',
                service: 'wordpress',
                images: [aboutirefiltre.src],
                thumbnail: aboutirefiltre.src,
                description: aboutir_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: 'Weather Mobile Application',
                techologies: 'React Native',
                service: 'development',
                images: [meteo2.src, meteo.src],
                thumbnail: meteo.src,
                description: meteo_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: 'Agile Method Group Application',
                techologies: 'ReactJs, Laravel API',
                service: 'design / development',
                images: [labonneplacehome.src, labonneplacevendre.src, labonneplacemokup.src],
                thumbnail: labonneplacehome.src,
                description: labonneplace_description,
                link: ''
            },
            {
                title: 'Blog development used Symfony',
                techologies: 'Symfony',
                service: 'development',
                images: [bbnfeed.src, bbndetail.src, bbndashboard.src],
                thumbnail: bbnfeed.src,
                description: blog_description,
                link: 'https://github.com/Arinfo-projets/blabla-news'
            }
        ]
    },
    contact: {
        subtitle: "contact me",
        title: "Let's start a new project",
        lists: [
            {
                icon: IoLocation,
                title: "Location",
                label: "La Roche Sur Yon (85), France"
            },
            {
                icon: IoCall,
                title: "Phone",
                label: "+33 6 43 67 04 56"
            },
            {
                icon: IoMail,
                title: "Email",
                label: "yoann.piard@gmail.com"
            },
        ],
        form: {
            name: {
                placeholder: 'Your name *'
            },
            email: {
                placeholder: 'Your email *'
            },
            phone: {
                placeholder: 'Your phone number'
            },
            subject: {
                placeholder: 'Your subject *'
            },
            message: {
                placeholder: 'Your message *'
            },
            success_message: "Your email has been successfully sent.",
            button_label: "Send your message",
            error_message: 'An error occurred'
        },
    },
    infinite_text:{
        title: "Fullstack Developer Designer *",
        subtitle: "I'm open to new projects * Let's work together."
    }
}
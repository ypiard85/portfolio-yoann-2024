import { FaWordpressSimple } from "react-icons/fa";
import { IoCall, IoLocation, IoMail, IoServerOutline } from "react-icons/io5";
import { MdOutlineSchema } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

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

import { aboutir_description, blog_description, coreego_description, cr_planning_description, cr_vitrine_description, eauvive_description, labonneplace_description, les_mathes_description, meteo_description } from "./projects-description/fr";

export default {
    navigation:{
        home: 'Accueil',
        service: 'Mes Services',
        project: 'Mes Projets',
        contact: 'Contactez moi',
    },
    introduction: {
        hello: "BONJOUR ! JE SUIS",
        name: "Yoann Piard",
        occupation_start: "Je suis",
        occupation_end: "Concepteur Développeur d'Applications",
        video_label: "Lire la vidéo"
    },
    services:{
        subtitle: "ce que je propose",
        title: "Mes Services",
        lists: [
            {
                icon: MdOutlineSchema,
                title: "Conception",
                tasks:[
                    'Rédaction de cahier des charges',
                    'Rédaction de plan de tests',
                    'Conception de dossier fonctionnel et technique',
                    'Conception de la base de données'
                ]
            },
            {
                icon: IoServerOutline,
                title: "Développement backend",
                tasks:[
                    'Développement avec les languages Symfony / Laravel',
                    "Développement d'API Rest",
                    "Gestion de bases de données relationnelles MySQL",
                    "Écriture et maintenance de tests unitaires et d'intégration avec PHPUnit"
                ]
            },
            {
                icon: RiComputerLine,
                title: "Développement frontend",
                tasks:[
                    "Développement avec les languages VueJs / ReactJs / NextJs",
                    "Écriture et maintenance de tests d'intégration et end-to-end"
                ]
            },
            {
                icon: FaWordpressSimple,
                title: "Développement wordpress",
                tasks:[
                    "Développement de thèmes wordpress from scratch",
                    "Intégration graphique",
                    "Développement de plugin sur mesure",
                ]
            },
        ]
    },
    projects:{
        subtitle: "portfolio",
        title: "Mes Projets",
        lists:[
            {
                title: 'Application communautaire "Coreego"',
                techologies: 'ReactJs, Laravel API',
                service: 'conception / développement',
                images: [homepagecoreego.src, coreegofeed.src, coreegodetail.src, coreegoform.src, coreegomap.src],
                thumbnail: homepagecoreego.src,
                description: coreego_description,
                link: 'https://coreego.fr/'
            },
            {
                title: 'Planning de prise de rendez-vous',
                techologies: 'VueJs',
                service: 'développement',
                images: [crplanningbook.src, crplanningdemo.src, crform.src, crsetting.src],
                thumbnail: crplanningbook.src,
                description: cr_planning_description,
                link: 'https://www.calameo.com/read/00357616399da01359411'
            },
            {
                title: 'Vitrine numérique',
                techologies: 'VueJs',
                service: 'développement',
                images: [crvitrineresume.src, crvitrineshow.src],
                thumbnail: crvitrineresume.src,
                description: cr_vitrine_description,
                link: 'https://www.youtube.com/watch?app=desktop&v=TI2AufnckOE'
            },
            {
                title: 'Mairie les mathes | la Palmyre',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: 'wordpress',
                images: [lesmatheshome.src, lesmathesnav.src, lesmathesactus.src],
                thumbnail: lesmatheshome.src,
                description: les_mathes_description,
                link: 'https://mairie-lesmatheslapalmyre.com/'
            },
            {
                title: 'Eau vive la Rochelle',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: 'wordpress',
                images: [eauvivehome.src, eauviveproducteurs.src],
                thumbnail: eauvivehome.src,
                description: eauvive_description,
                link: 'https://www.larochelle.bio/'
            },
            {
                title: "Script SQL d'un système de filtre",
                techologies: 'Wordpress, SQL',
                service: 'wordpress',
                images: [aboutirefiltre.src],
                thumbnail: aboutirefiltre.src,
                description: aboutir_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: 'Application mobile météo',
                techologies: 'React Native',
                service: 'développement',
                images: [meteo2.src, meteo.src],
                thumbnail: meteo.src,
                description: meteo_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: 'Application en méthode Agile en groupe',
                techologies: 'ReactJs, Laravel API',
                service: 'conception / développement',
                images: [labonneplacehome.src, labonneplacevendre.src, labonneplacemokup.src],
                thumbnail: labonneplacehome.src,
                description: labonneplace_description,
                link: ''
            },
            {
                title: 'Blog développer en Symfony',
                techologies: 'Symfony',
                service: 'développement',
                images: [bbnfeed.src, bbndetail.src, bbndashboard.src],
                thumbnail: bbnfeed.src,
                description: blog_description,
                link: 'https://github.com/Arinfo-projets/blabla-news'
            },
        ]
    },
    contact:{
        subtitle: "contactez moi",
        title: "Commençons un nouveau projet",
        lists:[
            {
                icon: IoLocation,
                title: "Localisation",
                label: "La Roche Sur Yon (85), France"
            },
            {
                icon: IoCall,
                title: "Téléphone",
                label: "+33 6 43 67 04 56"
            },
            {
                icon: IoMail,
                title: "Email",
                label: "yoann.piard@gmail.com"
            },
        ],
        form:{
            name:{
                placeholder: 'Votre nom *'
            },
            email:{
                placeholder: 'Votre email *'
            },
            phone:{
                placeholder: 'Votre numéro de téléphone'
            },
            subject:{
                placeholder: 'Votre sujet *'
            },
            message:{
                placeholder: 'Votre message *'
            },
            success_message: "Votre email a bien été envoyé",
            button_label: "Envoyer votre message",
            error_message: 'une erreur est survenue'
        },
    },
    infinite_text:{
        title: "Concepteur Développeur fullstack d'Applications *",
        subtitle: "Je suis ouvert à de nouveaux projets * Travaillons ensemble."
    }
}
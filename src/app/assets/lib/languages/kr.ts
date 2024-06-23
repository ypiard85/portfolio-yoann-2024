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

import { aboutir_description, blog_description, coreego_description, cr_planning_description, cr_vitrine_description, eauvive_description, labonneplace_description, les_mathes_description, meteo_description } from "./projects-description/kr";

export default {
    navigation:{
        home: '홈',
        service: '내 서비스',
        project: '내 프로젝트',
        contact: '연락하기',
    },
    introduction: {
        hello: "안녕하세요! 저는",
        name: "Yoann Piard입니다",
        occupation_start: "저는",
        occupation_end: "앱 개발자 와 디자이너입니다",
        video_label: "동영상 보기"
    },
    services:{
        subtitle: "제가 제공하는 것",
        title: "내 서비스",
        lists: [
            {
                icon: MdOutlineSchema,
                title: "설계",
                tasks:[
                    '명세서 작성',
                    '테스트 계획 작성',
                    '기능 및 기술 문서 설계',
                    '데이터베이스 설계'
                ]
            },
            {
                icon: IoServerOutline,
                title: "백엔드 개발",
                tasks:[
                    'Symfony / Laravel로 개발',
                    'Rest API 개발',
                    'MySQL 관계형 데이터베이스 관리',
                    'PHPUnit으로 단위 테스트 및 통합 테스트 작성 및 유지 관리'
                ]
            },
            {
                icon: RiComputerLine,
                title: "프론트엔드 개발",
                tasks:[
                    'VueJs / ReactJs / NextJs로 개발',
                    '통합 및 엔드 투 엔드 테스트 작성 및 유지 관리'
                ]
            },
            {
                icon: FaWordpressSimple,
                title: "워드프레스 개발",
                tasks:[
                    '처음부터 워드프레스 테마 개발',
                    '그래픽 통합',
                    '맞춤 플러그인 개발'
                ]
            },
        ]
    },
    projects:{
        subtitle: "포트폴리오",
        title: "내 프로젝트",
        lists:[
            {
                title: '커뮤니티 애플리케이션 "Coreego"',
                techologies: 'ReactJs, Laravel API',
                service: '설계 / 개발',
                images: [homepagecoreego.src, coreegofeed.src, coreegodetail.src, coreegoform.src, coreegomap.src],
                thumbnail: homepagecoreego.src,
                description: coreego_description,
                link: 'https://coreego.fr/'
            },
            {
                title: '예약 관리 시스템',
                techologies: 'VueJs',
                service: '개발',
                images: [crplanningbook.src, crplanningdemo.src, crform.src, crsetting.src],
                thumbnail: crplanningbook.src,
                description: cr_planning_description,
                link: 'https://www.calameo.com/read/00357616399da01359411'
            },
            {
                title: '디지털 쇼케이스',
                techologies: 'VueJs',
                service: '개발',
                images: [crvitrineresume.src, crvitrineshow.src],
                thumbnail: crvitrineresume.src,
                description: cr_vitrine_description,
                link: 'https://www.youtube.com/watch?app=desktop&v=TI2AufnckOE'
            },
            {
                title: 'Mairie les mathes | la Palmyre',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: '워드프레스',
                images: [lesmatheshome.src, lesmathesnav.src, lesmathesactus.src],
                thumbnail: lesmatheshome.src,
                description: les_mathes_description,
                link: 'https://mairie-lesmatheslapalmyre.com/'
            },
            {
                title: 'Eau vive la Rochelle',
                techologies: 'Wordpress, HTML, CSS, PHP',
                service: '워드프레스',
                images: [eauvivehome.src, eauviveproducteurs.src],
                thumbnail: eauvivehome.src,
                description: eauvive_description,
                link: 'https://www.larochelle.bio/'
            },
            {
                title: "SQL 필터 시스템 스크립트",
                techologies: 'Wordpress, SQL',
                service: '워드프레스',
                images: [aboutirefiltre.src],
                thumbnail: aboutirefiltre.src,
                description: aboutir_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: '날씨 모바일 애플리케이션',
                techologies: 'React Native',
                service: '개발',
                images: [meteo2.src, meteo.src],
                thumbnail: meteo.src,
                description: meteo_description,
                link: 'https://aboutiremploi.fr/'
            },
            {
                title: 'Agile 방법론 그룹 애플리케이션',
                techologies: 'ReactJs, Laravel API',
                service: '설계 / 개발',
                images: [labonneplacehome.src, labonneplacevendre.src, labonneplacemokup.src],
                thumbnail: labonneplacehome.src,
                description: labonneplace_description,
                link: ''
            },
            {
                title: 'Symfony로 개발한 블로그',
                techologies: 'Symfony',
                service: '개발',
                images: [bbnfeed.src, bbndetail.src, bbndashboard.src],
                thumbnail: bbnfeed.src,
                description: blog_description,
                link: 'https://github.com/Arinfo-projets/blabla-news'
            },
        ]
    },
    contact:{
        subtitle: "연락 주세요",
        title: "새 프로젝트를 시작합시다",
        lists:[
            {
                icon: IoLocation,
                title: "위치",
                label: "La Roche Sur Yon (85), France"
            },
            {
                icon: IoCall,
                title: "전화",
                label: "+33 6 43 67 04 56"
            },
            {
                icon: IoMail,
                title: "이메일",
                label: "yoann.piard@gmail.com"
            },
        ],
        form:{
            name:{
                placeholder: '이름 *'
            },
            email:{
                placeholder: '이메일 *'
            },
            phone:{
                placeholder: '전화번호'
            },
            subject:{
                placeholder: '제목 *'
            },
            message:{
                placeholder: '메시지 *'
            },
            success_message: "이메일이 성공적으로 전송되었습니다.",
            button_label: "메시지 보내기",
            error_message: '오류가 발생했습니다'
        },
    },
    infinite_text:{
        title: "풀스택 응용 프로그램 개발자 *",
        subtitle: "새로운 프로젝트를 기다립니다 * 함께 일해요."
    }
}

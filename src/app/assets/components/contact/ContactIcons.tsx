import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";



export default function ContactIcons() {

    return (
        <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/yoann-piard-fr/" target='_blank' className="transition-colors duration-300 bg-white p-3 rounded-full border border-blue hover:bg-blue hover:text-white">
                <IoLogoLinkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/yoann_piard/" target='_blank' className="transition-colors duration-300 bg-white p-3 rounded-full border border-blue hover:bg-blue hover:text-white">
                <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a href="https://github.com/ypiard85" target='_blank' className="transition-colors duration-300 bg-white p-3 rounded-full border border-blue hover:bg-blue hover:text-white">
                <IoLogoGithub className="w-5 h-5" />
            </a>
        </div>
    )
}
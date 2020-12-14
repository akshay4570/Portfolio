import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import github from '../assets/icons/github.png'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import linkedin from '../assets/icons/linkedin.png'
import Akshay from './../assets/AkshayProfile1.jpeg'
import resume from './../assets/Akshay_Hegde .pdf'
import {motion} from 'framer-motion';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:akshay4570@gmail.com")
    }

    const sidebar_variant = {
        hidden : {
            x : '-20vw'
        },
        visible : {
            x : 0,
            transition : {
                delay : 0.1,duration:0.5,type:'spring'
            }
        }
    }
    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={Akshay} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Akshay <span>Hegde</span> </div>
            <div className="sidebar__item1 sidebar__title">ML Enthusiast, Competitive Progamming,WebDev</div>
            <a href={resume} target="_blank" download="Akshay_Hegde .pdf">
                <div className="sidebar__item sidebar__resume my-3">
                    <img src={tie} alt="resume" className="sidebar-resume__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/profile.php?id=100008186341581"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/akshayhegde4570/"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/akshay-hegde-779a41183/"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/akshay4570"><img src={github} alt="github" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact my-3">
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Karnataka, India</div>
                <div className="sidebar__item">akshay4570@gmail.com</div>
                <div className="sidebar__item">9513894695</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email me</div>
        </motion.div>
    )
}

export default Sidebar;
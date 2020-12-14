import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const NavBar = () => {
    const [active, setActive] = useState('About');
    useEffect(() => {
        let curUrl = window.location.href
        if(curUrl.endsWith('/'))
            setActive('About');
        else if(curUrl.endsWith('/projects'))
            setActive('Projects');
        else if(curUrl.endsWith('/resume'))
            setActive('Resume');
        else if(curUrl.endsWith('/profile'))
            setActive('Profile');
    },[active])

    const navbar_variant = {
        hidden : {
            y : '-30vh',
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1
        }
    }
    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'About' &&
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }
                {active !== 'Projects' &&
                    <Link to="/projects">
                        <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>
                }
                {active !== 'Resume' &&
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                    </Link>
                }
                {active !== 'Profile' &&
                    <Link to="/profile">
                        <div className="navbar__item" onClick={() => setActive('Profile')}>Profile</div>
                    </Link>
                }
            </div>
        </motion.div>
    );
}

export default NavBar;
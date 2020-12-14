import React from 'react';
import codechef from './../../assets/projects_images/codechef.png';
import ratings from './../../assets/projects_images/codechef_rating.png';
import './../../index.css';
import {motion} from 'framer-motion';

const codechef_variants = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 1,
        transition : {
            delay : 0.2,duration : 0.6,
        }
    }
}
const CodeChef = () => {
    return(
        <motion.div
            variants={codechef_variants}
            initial="hidden"
            animate="visible"
        >
            <img src={codechef} alt="codechef" id="codechef"/>
            <img src={ratings} alt="codechef" id="ratings"/>
        </motion.div>
    );
}

export default CodeChef;
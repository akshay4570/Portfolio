import React from 'react';
import certificates from './../../assets/projects_images/certificates.png';
import badges from './../../assets/projects_images/badges.png';
import submissions from './../../assets/projects_images/hackerrank_submission.png';
import './../../index.css';
import {motion} from 'framer-motion';

const hackerrank_variants = {
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
const Hackerrank = () => {
    return(
        <motion.div
            variants={hackerrank_variants}
            initial='hidden'
            animate='visible'
        >
            <img src={certificates} alt="certificates" className="Hackerrank"/>
            <img src={badges} alt="badges" className="Hackerrank"/>
            <img src={submissions} alt="submissions" className="Hackerrank"/>
        </motion.div>
    );
}

export default Hackerrank;
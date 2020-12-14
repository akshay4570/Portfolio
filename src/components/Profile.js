import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Github from './Profiles/Github.js';
import Hackerrank from './Profiles/Hackerrank.js';
import CodeChef from './Profiles/Codechef.js';
import leetcode from './../assets/projects_images/leetcode.png';

const profile_variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2, duration: 0.6,
        }
    }
}
const Profile = () => {
    const [profile, setProfile] = useState('github');
    return (
        <motion.div className="profile"
            variants={profile_variants}
            initial='hidden'
            animate='visible'
        >
            <div className="profile__navbar">
                <div onClick={() => setProfile('hackerrank')} className="profile__element">Hackerrank</div>
                <div onClick={() => setProfile('leetcode')} className="profile__element">Leetcode</div>
                <div onClick={() => setProfile('codechef')} className="profile__element">CodeChef</div>
                <div onClick={() => setProfile('github')} className="profile__element">Github</div>
            </div>
            <div className="active__profile">
                {(profile === 'github' && <Github />) ||
                 (profile === 'hackerrank' && <Hackerrank />) ||
                 (profile === 'leetcode' && <img src={leetcode} alt="leetcode"/>) || 
                 (profile === 'codechef' && <CodeChef />)}
            </div>
        </motion.div>
    );
}

export default Profile;
import React from 'react';
import api from './../assets/icons/api.svg';
import Skill from './Skill';
import computer from './../assets/icons/computer.svg';
import repair from './../assets/icons/repair.svg';
import algo from './../assets/icons/algo.svg';
import ml from './../assets/icons/ml.jpg';
import {motion} from 'framer-motion';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "Build a scalable and responsive frontend using React.js."
    },
    {
        icon: repair,
        title: "Backend Development",
        about: "Handle Database server SQL,MongoDB and backend with Node.js."
    },
    {
        icon: algo,
        title: "Competitive Programming",
        about: "Interested in problem solving and solved problems on CodeChef,Codeforces,Leetcode."
    },
    {
        icon: ml,
        title: "Machine Learning",
        about: "Work with datasets, various machine learning algorithm, deep learning algorithms."
    }
]

const about_variants = {
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
const About = () => {
    return (
        <motion.div className="about"
            variants={about_variants}
            initial='hidden'
            animate='visible'
        >
            <h6 className="about__intro">I am a Computer Science Undergraduate passionate about programming and learning new Technologies. Currently I am exploring Machine Learning, Deep Learning and Web Development.</h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill => <Skill key={skill.title} skill={skill} />)
                    }
                </div>
            </div>
        </motion.div>
    );
}

export default About;

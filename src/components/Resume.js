import React, { useState } from 'react';
import react from './../assets/icons/react.svg';
import Bar from './Bar';
import { motion } from 'framer-motion';
import Education from './Education';
import Experience from './Experience';

const languages = [
    {
        icon: react,
        name: 'Python',
        level: '80'
    },
    {
        icon: react,
        name: 'Javascript',
        level: '60'
    },
    {
        icon: react,
        name: 'C++',
        level: '80'
    },
    {
        icon: react,
        name: 'ReactJS',
        level: '60'
    },
    {
        icon: react,
        name: 'NodeJS',
        level: '40'
    },
    {
        icon: react,
        name: 'ExpressJS',
        level: '40'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'CSS',
        level: '60'
    },
]

const tools = [
    {
        icon: react,
        name: 'Object Oriented Paradigm',
        level: '80'
    },
    {
        icon: react,
        name: 'Postman',
        level: '60'
    },
    {
        icon: react,
        name: 'Git',
        level: '60'
    },
    {
        icon: react,
        name: 'Material-UI',
        level: '50'
    },
    {
        icon: react,
        name: 'MongoDB',
        level: '50'
    },
]

const resume_variants = {
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
const Resume = () => {
    const [property, setProperty] = useState('');
    return (
        <motion.div className="container resume"
            variants={resume_variants}
            initial='hidden'
            animate='visible'
        >
            { property === '' &&
                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="resume-card__heading mb-3">Education</h4>
                            <h6>Education is an important part of a person's life,So I have summarised it in the form of a Timeline.</h6>
                            <button className="btn mt-3 mb-3" onClick={() => setProperty('education')}>View Timeline</button>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="resume-card__heading mb-3">
                                Experience
                    </h4>
                            <h6>Experience is a measure by which a person is judged.So let's walk through my Journey.</h6>
                            <button className="btn mt-3 mb-3" onClick={() => setProperty('experience')}>View Timeline</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 resume-languages">
                            <h5 className="resume-language__heading">
                                Language and Framework
                        </h5>
                            <div className="resume-language__body mt-3">
                                {languages.map(language => <Bar key={language.name} value={language} />)}
                            </div>
                        </div>
                        <div className="col-lg-6 resume-languages">
                            <h5 className="resume-language__heading">
                                Tools & Software
                        </h5>
                            <div className="resume-language__body mt-3">
                                {tools.map(tool => <Bar key={tool.name} value={tool} />)}
                            </div>
                        </div>
                    </div>
                </div>
                || (property === 'education' && 
                    <Education />
                ) ||
                (property === 'experience' && 
                    <Experience />
                )
            }
        </motion.div>
    );
}

export default Resume;

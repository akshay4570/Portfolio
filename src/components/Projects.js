import React, { useState } from 'react';
import projects from './data/projects';
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion';

const Projects = () => {
    const [project,setProject] = useState(projects);

    const handleFilter = (name) => {
        const newProject = projects.filter(data => data.category.includes(name))
        setProject(newProject);
    }

    const project_variants = {
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
    return(
        <motion.div className="container projects"
            variants={project_variants}
            initial='hidden'
            animate='visible'
        >
            <div className="projects__navbar">
                <div onClick={() => setProject(projects)} className="projects__element">All</div>
                <div onClick={() => {handleFilter('react.js')}} className="projects__element">React</div>
                <div onClick={() => {handleFilter('mongoDB')}} className="projects__element">MongoDB</div>
                <div onClick={() => {handleFilter('node.js')}} className="projects__element">NodeJS</div>
                <div onClick={() => {handleFilter('vanilla')}} className="projects__element">VanillaJS</div>
                <div onClick={() => {handleFilter('ML')}} className="projects__element">ML</div>
            </div>
            <div className="row">
                {
                    project.map(element => <ProjectCard key={element.name}project={element} />)
                }
            </div>
        </motion.div>
    );
}

export default Projects;

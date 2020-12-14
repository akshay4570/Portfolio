import youtube from '../../assets/projects_images/youtube.png'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import imdb from './../../assets/projects_images/imdb.jpg';
import COVID from '../../assets/projects_images/COVID.jpg'
import memories from '../../assets/projects_images/memories.png'
import twitter from './../../assets/projects_images/twitter.jpg';
import postman from './../../assets/projects_images/postman.png';
import timetable from './../../assets/projects_images/timetable.jpg';

const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: 'https://akshay4570.github.io/CovidTracker/',
        github_url: 'https://github.com/akshay4570/CovidTracker',
        category: ['react.js','chart.js']
    },

    {
        name: 'Memories',
        image: memories,
        deployed_url: 'https://memories-mernapp-akshay4570.netlify.app/',
        github_url: 'https://github.com/akshay4570/Memories_MERN',
        category: ['node.js', 'mongoDB', 'react.js','express.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: 'https://akshay4570-realtime-chat-application.netlify.app/',
        github_url: 'https://github.com/akshay4570/RealTimeChatApp',
        category: ['node.js', 'socket.io', 'react.js']
    },

    {
        name: 'YouTube Clone',
        image: youtube,
        deployed_url: 'https://github.com/akshay4570/YoutubeCloneBasic',
        github_url: 'https://github.com/akshay4570/YoutubeCloneBasic',
        category: ['material.ui', 'react.js']
    },

    {
        name: 'Rest API',
        image: hardware_store,
        deployed_url: 'https://github.com/akshay4570/RESTAPI',
        github_url: 'https://github.com/akshay4570/RESTAPI',
        category: ['node.js', 'express.js','postman']
    },

    {
        name: 'Twitter Sentiment Analysis',
        image: twitter,
        deployed_url : 'https://github.com/akshay4570/TwitterSentimentAnalysis',
        github_url: 'https://github.com/akshay4570/TwitterSentimentAnalysis',
        category: ['ML','Text Analysis']
    },

    {
        name: 'Postman Clone',
        image: postman,
        deployed_url: 'https://github.com/akshay4570/PostmanClone',
        github_url : 'https://github.com/akshay4570/PostmanClone',
        category: ['vanilla','postman']
    },

    {
        name: 'Movie Recommendation',
        image: imdb,
        deployed_url: 'https://github.com/akshay4570/Movie_Recommendation',
        github_url: 'https://github.com/akshay4570/Movie_Recommendation',
        category: ['Data Mining', 'ML']
    },

    {
        name: 'Time Table Generation',
        image: timetable,
        deployed_url: 'https://github.com/akshay4570/Automated-Time-Table-Generation',
        github_url: 'https://github.com/akshay4570/Automated-Time-Table-Generation',
        category: ['Software Engineering','ML','Genetic Algorithm']
    }
]

export default data_projects;
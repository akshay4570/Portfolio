import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import './../../index.css';

const Github = () => {
    return (
        <>
            <h2 className="github__heading">Github Contribution</h2>
            <GitHubCalendar username="akshay4570" blockSize={20} fontSize={20}>
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            <a href="https://github.com/akshay4570">
                <img width="50%" height="180em" src="https://github-readme-stats.vercel.app/api?username=akshay4570&theme=buefy&show_icons=true" />
                <img width="50%" height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=akshay4570&theme=buefy&layout=compact" />
            </a>
        </>
    )
}

export default Github;
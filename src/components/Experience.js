import React from 'react';
import {Chrono} from 'react-chrono';

const Experience = () => {
    const items = [
        {
            title: "2018-2020",
            cardTitle: "Volunteer",
            cardSubtitle: "I volunteered for various events for LCC, OS installations,Git sessions,coding events and other technical events."
        },
        {
            title: "2020-present",
            cardTitle: "Technical Coordinator",
            cardSubtitle: "As a Technical Coordinator, I have conducted Python,Machine Learning sessions, organised online coding event on Hackerrank."
        },
    ];
    return(
        <>
            <div style={{ width: "100%", height: "100%" }}>
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    hideControls
                    theme={{primary: "black", secondary: "blue", cardBgColor: "white", cardForeColor: "red" }}
                />
            </div>
            <button className="exp-btn" onClick={() => window.location.href = '/resume'}>Go Back</button>
        </>
    );
}

export default Experience;
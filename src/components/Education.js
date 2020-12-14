import React from 'react';
import { Chrono } from 'react-chrono';

const Education = () => {
    const items = [
        {
            title: "2010-2015",
            cardTitle: "Sainik School Bijapur",
            cardSubtitle: "I am a Proud Alumini of Sainik School Bijapur, it is one of the 28 Sainik Schools and is probably the best. I finished my class 10th with a CGPA of 10."
        },
        {
            title: "2015-2017",
            cardTitle: "Sri Chaitanya Junior Kalasala",
            cardSubtitle: "I studied my Intermediate in Hyderabad under Telengana State Board that and secured 97%."
        },
        {
            title: "2017-present",
            cardTitle: "JSS Science and Technology University",
            cardSubtitle: "I am currently pursuing Computer Science Engineering from JSSSTU and my current CGPA is 9.8."
        }
    ];
    return (
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

export default Education;
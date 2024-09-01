import React from 'react';
import '@fontsource/roboto';
import './EventType.css'

const EventType = ({ icon, text }) => {
    return (
        <div className="event-type">
            <div className="circle">
                <div className="icon">
                    {icon}
                </div>
            </div>
            <div className="text">
                {text}
            </div>
        </div>
    );
};

export default EventType;

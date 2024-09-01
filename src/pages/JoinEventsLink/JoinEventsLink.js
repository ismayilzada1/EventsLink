import React from 'react';
import './JoinEventsLink.css';

const JoinEventsLink = ({ mainText, minorText, buttonText, imageSrc }) => {
    return (

        <div className={"card-container"}>

        <div className="card">
            <div className="card-content">
                <div className="main-text">{mainText}</div>
                <div className="minor-text">{minorText}</div>
                <button className="card-button">{buttonText}</button>
            </div>
            <div className="card-image">
                <img src={`images/${imageSrc}`} alt="Card visual" />
            </div>
        </div>

        </div>

    );
};

export default JoinEventsLink;

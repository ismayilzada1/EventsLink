import React from 'react';
import './DestinationList.css';
import {useTranslation} from "react-i18next";

const DestinationList = ({ title, destinations }) => {

    return (
        <div className="destination-list-container">
            <h2 className="destination-list-title">{title}</h2>
            <div className="destination-cards">
                {destinations.map((destination, index) => (
                    <div key={index} className="destination-card">
                        <img
                            src={destination.image}
                            alt={destination.name}
                            className="destination-image"
                        />
                        <p className="destination-text">{destination.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DestinationList;

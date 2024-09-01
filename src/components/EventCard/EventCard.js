import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CiCalendarDate,CiCircleCheck } from "react-icons/ci";
import { BiSolidCoupon } from "react-icons/bi";
import '@fontsource/roboto';
import './EventCard.css';
import {useTranslation} from "react-i18next";

const EventCard = ({ image, eventName, date, peopleCount, price }) => {

    const { i18n, t } = useTranslation();


    return (
        <div className="event-card">
            <img src={image} alt={eventName} className="event-card-image" />
            <button className="heart-button">
                <FaRegHeart className="heart-icon" />
            </button>
            <div className="event-details">
                <h3 className="event-name">{eventName}</h3>
                <div className="event-info">
                    <div className="info-item">
                        <CiCalendarDate className="info-icon" />
                        <span className="info-text">{date}</span>
                    </div>
                    <div className="info-item">
                        <CiCircleCheck className="info-icon" />
                        <span className="info-text">{peopleCount} {t("going")}</span>
                    </div>
                </div>
                <div className="ticket-info">
                    <BiSolidCoupon className="ticket-icon" />
                    <span className="ticket-price">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

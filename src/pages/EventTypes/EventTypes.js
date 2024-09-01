import React from 'react';
import './EventTypes.css';
import EventType from "../../components/EventType";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuPencilRuler } from "react-icons/lu";
import { TfiBlackboard } from "react-icons/tfi";
import { GiIsland } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import {useTranslation} from "react-i18next";

const EventTypes = () => {

    const { i18n, t } = useTranslation();

    return (
        <div className="event-types-container">
            <EventType icon={<LuPencilRuler />} text={t("workshops")}/>
            <EventType icon={<TfiBlackboard />} text={t("exhibitions")}/>
            <EventType icon={<IoFastFoodOutline />} text={t("foodsAndDrinks")}/>
            <EventType icon={<GiIsland />} text={t("holidays")}/>
            <EventType icon={<IoFootballOutline />} text={t("sports")}/>
            <EventType icon={<PiMicrophoneStageDuotone />} text={t("concerts")}/>
        </div>
    );
};

export default EventTypes;

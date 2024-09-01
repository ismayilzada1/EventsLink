import React from 'react';
import './main.css';
import {useTranslation} from "react-i18next";

const Main = () => {

    const { i18n, t } = useTranslation();

    return (
        <div className="banner-container">
            <div className="banner-content">
                <h1>{t("main_page_main")}</h1>
                <p>
                    {t("main_page_minor")}
                </p>
                <button className="find-events-button">{t("main_page_btn")}</button>
            </div>
        </div>
    );
}

export default Main;

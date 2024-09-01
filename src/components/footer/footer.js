import React from 'react';
import {CiMail} from "react-icons/ci";
import './footer.css';
import {useTranslation} from "react-i18next";

const Footer = () => {


    const {t}=useTranslation();

    return (
        <>
            <nav className={"footer-nav"}>
                <a href="#events" className="footer-navlink">{t('Events')}</a>
                <a href="#about" className="footer-navlink">{t('About us')}</a>
                <a href="#contact" className="footer-navlink">{t('Contact us')}</a>
                <a href="#signin" className="footer-navlink">{t('Sign In')}</a>
            </nav>

            <footer className="footer">
                <div className="footer-left">
                    <span className="footer-logo">EVENTSLINK</span>
                </div>
                <div className="footer-right">
                    <CiMail className={"footer-mail-icon"}></CiMail>
                    <a href="mailto:contact@example.com" className="footer-email">contact@example.com</a>
                </div>
            </footer>
        </>

    );
};

export default Footer;

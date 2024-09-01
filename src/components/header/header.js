import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearch, FaUserAlt, FaShoppingBag, FaBars } from 'react-icons/fa';
import { setLanguage } from '../../Store/languageslice';
import { useTranslation } from 'react-i18next';

const Header = ({ scrollToSection, refs }) => {
    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    const selectedLanguage = useSelector(state => state.language.value);
    const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState(false);
    const [menuDropdownOpen, setMenuDropdownOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!languageDropdownOpen);
        setMenuDropdownOpen(false);
    };

    const toggleMenuDropdown = () => {
        setMenuDropdownOpen(!menuDropdownOpen);
        setLanguageDropdownOpen(false);
    };

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        i18n.changeLanguage(language);
        setLanguageDropdownOpen(false);
    };

    return (
        <header style={styles.header}>
            <div style={styles.leftSection}>
                <div style={styles.logo}>
                    <span style={styles.logoText}>EVENTS</span><span style={styles.linkText}>LINK</span>
                </div>
                {!isMobile ? (
                    <nav style={styles.nav}>
                        <a href="#events" style={styles.navLink}
                           onClick={() => scrollToSection(refs.eventsRef)}>{t('Events')}</a>
                        <a href="#about" style={styles.navLink}
                           onClick={() => scrollToSection(refs.aboutRef)}>{t('About us')}</a>
                        <a href="#contact" style={styles.navLink}
                           onClick={() => scrollToSection(refs.contactRef)}>{t('Contact us')}</a>
                    </nav>
                ) : (
                    <>
                        <FaBars style={styles.menuIcon} onClick={toggleMenuDropdown} />
                        {menuDropdownOpen && (
                            <div style={styles.dropdownMenu}>
                                <a href="#events" style={styles.dropdownItem}
                                   onClick={toggleMenuDropdown}>{t('Events')}</a>
                                <a href="#about" style={styles.dropdownItem}
                                   onClick={toggleMenuDropdown}>{t('About us')}</a>
                                <a href="#contact" style={styles.dropdownItem}
                                   onClick={toggleMenuDropdown}>{t('Contact us')}</a>
                                <div style={styles.dropdownItem}>
                                    <FaUserAlt style={styles.icon} /> {t('Profile')}
                                </div>
                                <div style={styles.dropdownItem}>
                                    <FaShoppingBag style={styles.icon} /> {t('Shop')}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
            <div style={styles.actions}>
                <div style={styles.languageSelector} onClick={toggleLanguageDropdown}>
                    {selectedLanguage.toUpperCase()} <span style={styles.arrow}>▼</span>
                    {languageDropdownOpen && (
                        <div style={styles.dropdown}>
                            <div style={styles.dropdownItem} onClick={() => changeLanguage('en')}>EN</div>
                            <div style={styles.dropdownItem} onClick={() => changeLanguage('aze')}>AZE</div>
                            <div style={styles.dropdownItem} onClick={() => changeLanguage('ru')}>RU</div>
                        </div>
                    )}
                </div>
                <div style={styles.headerNav}>
                    <FaSearch style={styles.icon} />
                    {/* Hide the profile and shop icons on mobile */}
                    {!isMobile && <FaUserAlt style={styles.icon} />}
                    {!isMobile && <FaShoppingBag style={styles.icon} />}
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 20px',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        width: '100%',
        boxSizing: 'border-box',
    },
    headerNav: {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px'
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        minWidth: '0',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '40px',
        whiteSpace: 'nowrap',
    },
    logoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    linkText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        minWidth: '0',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        minWidth: '0',
    },
    languageSelector: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#2a2a2a',
    },
    arrow: {
        marginLeft: '4px',
    },
    dropdown: {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#2a2a2a',
        color: '#fff',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        zIndex: 1,
    },
    dropdownItem: {
        padding: '8px 16px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",
        color:"#fff",
        textDecoration:"none"
    },
    icon: {
        fontSize: '18px',
        cursor: 'pointer',
        marginRight: '8px',
    },
    menuIcon: {
        fontSize: '24px',
        cursor: 'pointer',
    },
    dropdownMenu: {
        position: 'absolute',
        top: 'calc(8% + 4px)',
        left: '0',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        zIndex: 1,
        width: '100%',
    },
};

export default Header;

/* eslint-disable react/prop-types */
// Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMenu2, IconMoonFilled, IconSunFilled, IconX } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import CustomDropdown from './CustomDropdown';
import i18 from '../utils/i18';

function Navbar({ isDark, toggleTheme, scrollToProjects, scrollToAbout, scrollToHome, scrollToContact }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || i18.language);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        i18.changeLanguage(selectedLanguage);
    }, [selectedLanguage]);

    const handleMenuItemClick = (action) => {
        if (typeof action === 'function') {
            action();
        } else if (typeof action === 'string') {
            navigate(action); // Navigate to the specified path
        }
        setIsOpen(false);
    };

    const menuItems = [
        {
            label: t('navigation.home'),
            action: scrollToHome,
        },
        {
            label: t('navigation.about'),
            action: scrollToAbout,
        },
        {
            label: t('navigation.projects'),
            action: scrollToProjects,
        },
        {
            label: t('navigation.blog'),
            action: '/blog',
        },
    ];

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value);
        localStorage.setItem('selectedLanguage', value);
        i18.changeLanguage(value); // Change language using i18next
    };

    const languages = [
        { code: 'EN', name: { mobile: 'EN', desktop: 'English' } },
        { code: 'ID', name: { mobile: 'ID', desktop: 'Indonesia' } },
        { code: 'SU', name: { mobile: 'SU', desktop: 'Sunda' } },
        { code: 'SUA', name: { mobile: 'ᮞᮥ', desktop: 'ᮞᮥᮔ᮪ᮓ' } },
    ];

    return (
        <div
            className={`container z-30 flex fixed top-0 justify-between items-center px-6 md:px-12 py-4 w-full backdrop-blur-xl bg-opacity-50 ${
                isDark ? 'bg-primary' : 'bg-light'
            }`}>
            {/* Left Section */}
            <div className='w-1/3'>
                <button className='flex gap-2 items-center text-sm font-bold md:text-lg text-secondary'>
                    $<span className={`${isDark ? 'text-light' : 'text-third'}`}>{t('navigation.brand')}</span>
                    <BlinkingCursor />
                </button>
            </div>

            {/* Middle Section - Menu Items */}
            <div
                className={`hidden md:flex justify-center gap-5 items-center w-1/3 whitespace-nowrap ${
                    isDark ? 'text-light' : 'text-third'
                }`}>
                {menuItems.map((item, index) => (
                    <button
                        className='flex flex-col transition-all duration-300 ease-in-out hover:text-secondary'
                        onClick={() => handleMenuItemClick(item.action)}
                        key={index}>
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Right Section */}
            <div className='w-1/3 text-sm'>
                <div className='hidden gap-3 justify-end items-center md:flex'>
                    <button
                        onClick={() => handleMenuItemClick(scrollToContact)}
                        className={`border-[1px] px-2 py-1 rounded-2xl transition-all duration-300 ease-in-out ${
                            isDark
                                ? 'border-light text-light hover:text-primary hover:bg-light'
                                : 'border-third hover:text-light text-third hover:bg-third'
                        }`}>
                        {t('navigation.getInTouch')}
                    </button>

                    <motion.button
                        className='p-1 rounded-full cursor-pointer text-light bg-secondary'
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}>
                        <motion.div
                            className='flex justify-center items-center w-6 h-6'
                            initial={{ rotate: isDark ? 180 : 0 }}
                            animate={{ rotate: isDark ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}>
                            {isDark ? <IconSunFilled strokeWidth={1.5} /> : <IconMoonFilled strokeWidth={1.5} />}
                        </motion.div>
                    </motion.button>
                    <CustomDropdown
                        options={languages}
                        selected={selectedLanguage}
                        onChange={handleLanguageChange}
                        isMobile={false}
                        isDark={isDark}
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <div className={`flex relative gap-2 justify-end items-center md:hidden`}>
                    <CustomDropdown
                        options={languages}
                        selected={selectedLanguage}
                        onChange={handleLanguageChange}
                        isMobile={true}
                        isDark={isDark}
                    />
                    <motion.button
                        className='justify-between p-1 text-xs rounded-full cursor-pointer text-light bg-secondary'
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}>
                        <motion.div
                            className='flex justify-center items-center'
                            initial={{ rotate: isDark ? 180 : 0 }}
                            animate={{ rotate: isDark ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}>
                            {isDark ? <IconSunFilled /> : <IconMoonFilled />}
                        </motion.div>
                    </motion.button>

                    <button
                        onClick={toggleMenu}
                        className={`relative md:hidden rounded-full p-2 ${
                            isDark ? 'text-light hover:bg-zinc-700' : 'text-third hover:bg-gray-300'
                        }`}>
                        {isOpen ? <IconX /> : <IconMenu2 />}
                    </button>
                </div>

                {/* Mobile Sidebar Menu Items */}
                {isOpen && (
                    <div
                        className={`fixed inset-0 z-40 flex justify-end bg-opacity-50 ${isDark ? 'bg-gray-800' : 'bg-gray-300'}`}
                        onClick={toggleMenu}>
                        <div
                            className={`flex flex-col w-64 p-4 shadow-xl rounded-xl ${
                                isDark ? 'text-light bg-primary' : 'text-third bg-light'
                            }`}
                            onClick={(e) => e.stopPropagation()}>
                            <button className='self-end mb-4' onClick={toggleMenu}>
                                <IconX />
                            </button>
                            {menuItems.map((item, index) => (
                                <button
                                    className='py-3 transition-all duration-300 ease-in-out hover:text-secondary'
                                    onClick={() => handleMenuItemClick(item.action)}
                                    key={index}>
                                    {item.label}
                                </button>
                            ))}
                            <div className='py-3'>
                                <button
                                    onClick={() => handleMenuItemClick(scrollToContact)}
                                    className={`border-[1px] px-2 py-1 rounded-2xl transition-all duration-300 ease-in-out ${
                                        isDark
                                            ? 'border-light text-light hover:text-primary hover:bg-light'
                                            : 'border-third hover:text-light text-third hover:bg-third'
                                    }`}>
                                    {t('getinTouch')}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const BlinkingCursor = () => (
    <motion.span
        style={{
            width: '4px',
            height: '1rem',
            backgroundColor: '#4ECCA3',
            display: 'inline-block',
            marginRight: '0.5px',
        }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
    />
);

export default Navbar;

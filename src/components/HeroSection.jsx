/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const keyboardLayouts = {
    EN: [
        ['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-', '=', '\\'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Backspace'],
        ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'],
    ],
    ID: [
        ['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-', '=', '\\'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Backspace'],
        ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'],
    ],
    SU: [
        ['Esc', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '-', '=', '\\'],
        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Backspace'],
        ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'],
    ],
    SUA: [
        ['Esc', '|᮱|', '|᮲|', '|᮳|', '|᮴|', '|᮵|', '|᮶|', '|᮷|', '|᮸|', '|᮹|', '|᮰|', '-', '='],
        ['Tab', 'ᮋ', 'ᮝ', '\u1B80', 'ᮛ', 'ᮒ', 'ᮚ', '\u1BA5', '\u1BA4', '\u1BA7', 'ᮕ', '\u1BA6', '\u1BA9', 'Bckspce'],
        ['Caps Lock', 'ᮃ', 'ᮞ', 'ᮓ', 'ᮖ', 'ᮌ', 'ᮠ', 'ᮏ', 'ᮊ', 'ᮜ', '\u1BAA', "'", 'Enter'],
        ['Shift', 'ᮐ', 'ᮟ', 'ᮎ', 'ᮗ', 'ᮘ', 'ᮔ', 'ᮙ', ',', '.', '/', 'Shift'],
        ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl'],
    ],
};

const targetTexts = {
    EN: 'FULL-STACK DEVELOPER',
    ID: 'PENGEMBANG FULL-STACK',
    SU: 'PAMEKAR FULL-STACK',
    SUA: 'ᮕᮙᮨᮊᮁ ᮖᮥᮜ᮪ᮜ᮪-ᮞ᮪ᮒᮎ᮪ᮊ᮪',
};

const HeroSection = ({ isDark, scrollToProjects }) => {
    const [typedText, setTypedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [spacePressed, setSpacePressed] = useState(false);
    const [keyboardLayout, setKeyboardLayout] = useState(keyboardLayouts.EN);
    const [keys, setKeys] = useState(keyboardLayouts.EN); // State to hold current keys based on layout
    const { t } = useTranslation();

    const animationTimeoutRef = useRef(null);
    const cursorIntervalRef = useRef(null);

    const lang = localStorage.getItem('selectedLanguage') || 'EN';
    const targetText = targetTexts[lang];

    const animateText = async () => {
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }

        for (let i = 0; i <= targetText.length; i++) {
            setTypedText(targetText.slice(0, i));
            await new Promise((resolve) => {
                animationTimeoutRef.current = setTimeout(resolve, 200);
            });
        }

        await new Promise((resolve) => {
            animationTimeoutRef.current = setTimeout(resolve, 1000);
        });

        setTypedText('');
        animateText(); // Restart the animation
    };

    useEffect(() => {
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }
        animateText();

        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, [targetText]);

    useEffect(() => {
        setKeyboardLayout(keyboardLayouts[lang]);
        setKeys(keyboardLayouts[lang]); // Update keys state based on lang change
    }, [lang]);

    useEffect(() => {
        cursorIntervalRef.current = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorIntervalRef.current);
    }, []);

    const animateKey = {
        backgroundColor: isDark ? '#EEEEEE' : '#232931',
        color: isDark ? '#232931' : '#EEEEEE',
        scale: [1, 0.9, 1],
        transition: {
            duration: 0.5,
        },
    };

    const handleKeyPress = async (key) => {
        if (key === 'Space') {
            setSpacePressed(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSpacePressed(false);
        }
    };

    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '1.jpg';
        downloadLink.download = 'cv.jpg';
        downloadLink.click();
    };

    return (
        <>
            <div
                className={`z-10 backdrop-blur-xl ${
                    isDark ? 'text-light' : 'text-primary'
                } flex flex-col items-center justify-center px-3 md:px-12`}>
                <div className='py-4 text-center rounded-lg'>
                    <motion.div
                        className='relative p-2 h-12 text-5xl font-bold rounded-md shadow-sm md:text-6xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        {typedText}
                        <motion.span
                            className='absolute text-secondary top-[10%] mt-1 mr-2'
                            animate={{ opacity: cursorVisible ? 1 : 0 }}
                            transition={{ duration: 0.5, yoyo: Infinity }}>
                            |
                        </motion.span>
                    </motion.div>
                </div>
                <span className='pt-14 text-center md:pt-20 lg:pt-6'>{t('heroSection.tech')}</span>
                <span className='py-10 w-full text-center md:w-1/2'>{t('heroSection.intro')}</span>
                <div className='flex gap-3 items-center pb-8'>
                    <button onClick={scrollToProjects} className='px-3 py-1 rounded-full bg-secondary text-primary'>
                        {t('heroSection.seeMyWorksBtn')}
                    </button>
                    <button onClick={handleDownloadCV} className='py-1 border-b-2 border-secondary'>
                        {t('heroSection.downloadcv')}
                    </button>
                </div>
            </div>
            <div className={`hidden md:block max-w-md mx-auto p-2 ${isDark ? 'text-light' : 'text-primary'}`}>
                <div className='Keyboard-layout'>
                    {keys.map((row, rowIndex) => (
                        <div key={rowIndex} className='flex justify-center'>
                            {row.map((key, keyIndex) => (
                                <motion.button
                                    key={keyIndex}
                                    className={`text-xs text-center whitespace-nowrap justify-center items-center border border-gray-300 rounded-lg p-1.5 m-0.5 keyboard-button bg-gray-100 bg-opacity-10 ${
                                        ['Space', 'Tab', 'Shift', 'Caps Lock', 'Enter', 'Backspace', 'Esc'].includes(key)
                                            ? 'flex-grow'
                                            : ''
                                    }`}
                                    initial={{ scale: 1 }}
                                    animate={key === targetText[typedText.length] ? animateKey : {}}
                                    transition={{ duration: 0.5 }}
                                    style={{ color: isDark ? '#EEEEEE' : '#232931' }}
                                    disabled={key === 'Space' && spacePressed}
                                    onClick={() => handleKeyPress(key)}>
                                    {key}
                                </motion.button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroSection;

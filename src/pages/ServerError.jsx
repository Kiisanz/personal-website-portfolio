/* eslint-disable react/prop-types */
import Background from '../components/Background';
import { useState } from 'react';
import { IconAlertHexagonFilled } from '@tabler/icons-react'; // Importing Tabler icon for construction
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from React Router
import { useTranslation } from 'react-i18next';

function ServerError() {
    const [isDark, setIsDark] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleNavigateHome = () => {
        navigate('/'); // Navigate to the home page when the button is clicked
    };
    const { t } = useTranslation();

    return (
        <div className={`min-h-screen ${isDark ? 'bg-primary text-light' : 'bg-light text-primary'}`}>
            <Background />
            <div className='min-h-screen flex flex-col items-center justify-center h-full backdrop-blur-3xl'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <IconAlertHexagonFilled className='mb-4 text-white' stroke={1} size={100} /> {/* Icon */}
                    <h1 className='text-4xl font-bold mb-4 text-center'>{t('utils.500.title')}</h1> {/* Text */}
                    <p className='text-lg text-center'>{t('utils.500.desc')}</p> {/* Description */}
                    <button
                        onClick={handleNavigateHome}
                        className={`mt-8 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-linear ${
                            isDark
                                ? 'bg-secondary text-primary hover:bg-zinc-700 hover:text-primary'
                                : 'bg-third text-third hover:bg-gray-300 hover:text-primary'
                        }`}>
                        {t('utils.bckbtn')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServerError;

/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IconLanguage } from '@tabler/icons-react';
import i18 from '../utils/i18';

function CustomDropdown({ options, selected, onChange, isMobile, isDark }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        onChange(value);
        i18.changeLanguage(value); // Change language using i18next
        setIsOpen(false);
    };

    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex gap-1 items-center w-full text-xs whitespace-nowrap rounded-lg`}>
                <span>{options.find((option) => option.code === selected)?.name[isMobile ? 'mobile' : 'desktop']}</span>
                <IconLanguage size={24} />
            </button>
            {isOpen && (
                <div
                    className={`absolute mt-2 min-w-max  w-full text-xs bg-${
                        isDark ? 'light' : 'primary'
                    } bg-opacity-20 rounded-lg`}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleOptionClick(option.code)}
                            className={`flex items-center p-3 cursor-pointer hover:bg-${
                                isDark ? 'light' : 'primary'
                            } hover:bg-opacity-10`}>
                            {option.name.desktop}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomDropdown;

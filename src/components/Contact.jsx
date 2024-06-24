/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IconSend } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Contact({ isDark }) {
    const recipientEmail = 'rifki.coding@gmail.com';
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleClick = () => {
        const emailLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
        window.location.href = emailLink;
    };
    const { t } = useTranslation();

    return (
        <div>
            <div className='flex flex-col w-full pt-12 pb-36 gap-6 justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-center gap-6 w-full max-w-[4xl]'>
                    <div className='flex flex-col md:w-1/2 w-full gap-6'>
                        <input
                            type='text'
                            id='subject'
                            name='subject'
                            placeholder={t('contactSection.subjectplc')}
                            className={`${
                                isDark
                                    ? 'border-light hover:bg-light focus:bg-light'
                                    : 'focus:bg-primary hover:bg-primary border-primary'
                            } hover:bg-opacity-10 focus:bg-opacity-10 rounded-xl px-3 py-1 border-[1px] bg-transparent transition-all duration-300 ease-linear outline-none`}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />

                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder={t('contactSection.nameplc')}
                            className={`${
                                isDark
                                    ? 'border-light hover:bg-light focus:bg-light'
                                    : 'focus:bg-primary hover:bg-primary border-primary'
                            } hover:bg-opacity-10 focus:bg-opacity-10 rounded-xl px-3 py-1 border-[1px] bg-transparent transition-all duration-300 ease-linear outline-none`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder={t('contactSection.emailplc')}
                            className={`${
                                isDark
                                    ? 'border-light hover:bg-light focus:bg-light'
                                    : 'focus:bg-primary hover:bg-primary border-primary'
                            } hover:bg-opacity-10 focus:bg-opacity-10 rounded-xl px-3 py-1 border-[1px] bg-transparent transition-all duration-300 ease-linear outline-none`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <textarea
                            id='message'
                            name='message'
                            placeholder={t('contactSection.msgplc')}
                            rows='6'
                            className={`${
                                isDark
                                    ? 'border-light hover:bg-light focus:bg-light'
                                    : 'focus:bg-primary hover:bg-primary border-primary'
                            } hover:bg-opacity-10 focus:bg-opacity-10 rounded-xl px-3 py-1 border-[1px] bg-transparent transition-all duration-300 ease-linear outline-none h-full`}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    className={`flex justify-center items-center gap-2 w-full p-2 rounded-2xl transition-all duration-300 ease-in-out bg-secondary hover:bg-opacity-70${
                        isDark ? ' text-primary ' : ' hover:text-third'
                    }`}>
                    {t('contactSection.sendbtn')}
                    <IconSend size={20} stroke={2} />
                </button>
            </div>
        </div>
    );
}

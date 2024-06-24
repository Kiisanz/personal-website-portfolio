/* eslint-disable react/prop-types */
import people from '../assets/orang.webp';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='flex gap-6 items-center px-6 text-xs xl:text-md'>
                <div className='flex flex-col gap-6 items-center md:px-6'>
                    <div className='flex flex-col gap-6 items-center pt-20 md:flex-row text-start'>
                        <div className='flex justify-start pb-3'>
                            {t('aboutSection.aboutp1')}
                            <br /> <br />
                            {t('aboutSection.aboutp2')}
                            <br /> <br />
                            {t('aboutSection.aboutp3')}
                            <br /> <br />
                            {t('aboutSection.aboutp4')}
                        </div>
                        {/* Image */}
                        <img src={people} alt='Logo Perusahaan' width='250' height='150' className='z-10' />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* eslint-disable react/prop-types */
import {
    IconBrandFirebase,
    IconBrandGit,
    IconBrandMongodb,
    IconBrandMysql,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandReact,
    IconBrandSocketIo,
    IconBrandTailwind,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export default function Skill({ isDark }) {
    const { t } = useTranslation();
    const Icons = [
        {
            icon: <IconBrandNodejs stroke={2} size={42} />,
            title: t('skillsSection.node.name'),
            description: t('skillsSection.node.desc'),
        },
        {
            icon: <IconBrandReact stroke={2} size={42} />,
            title: t('skillsSection.react.name'),
            description: t('skillsSection.react.desc'),
        },
        {
            icon: <IconBrandNextjs stroke={2} size={42} />,
            title: t('skillsSection.next.name'),
            description: t('skillsSection.next.desc'),
        },
        {
            icon: <IconBrandGit stroke={2} size={42} />,
            title: t('skillsSection.git.name'),
            description: t('skillsSection.git.desc'),
        },
        {
            icon: <IconBrandTailwind stroke={2} size={42} />,
            title: t('skillsSection.tailwind.name'),
            description: t('skillsSection.tailwind.desc'),
        },
        {
            icon: <IconBrandMongodb stroke={2} size={42} />,
            title: t('skillsSection.mongo.name'),
            description: t('skillsSection.mongo.desc'),
        },
        {
            icon: <IconBrandMysql stroke={2} size={42} />,
            title: t('skillsSection.mysql.name'),
            description: t('skillsSection.mysql.desc'),
        },
        {
            icon: <IconBrandFirebase stroke={2} size={42} />,
            title: t('skillsSection.firebase.name'),
            description: t('skillsSection.firebase.desc'),
        },
        {
            icon: <IconBrandSocketIo stroke={2} size={42} />,
            title: t('skillsSection.socketio.name'),
            description: t('skillsSection.socketio.desc'),
        },
    ];

    return (
        <div>
            <div className='flex flex-wrap justify-center gap-6 md:flex-row'>
                {Icons.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-4  items-center p-3 text-sm text-center w-1/3 md:items-start md:justify-start md:w-1/4 md:text-start ${
                            isDark ? 'hover:bg-light' : 'hover:bg-primary'
                        } hover:bg-opacity-10 backdrop-blur-xl rounded-xl transition-all duration-300 ease-linear`}>
                        {item.icon} {/* Assuming these are actual components/icons */}
                        <div>
                            <p className='font-semibold'>{item.title}</p>
                            <p className='text-xs opacity-85 hidden md:block'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

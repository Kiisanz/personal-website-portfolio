/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Projects({ isDark }) {
    const navigate = useNavigate();

    const AllProjectsPage = () => {
        navigate('/projects');
    };
    const { t } = useTranslation();

    const projectsData = [
        {
            img: '/projectImg/games.webp',
            tech: [t('projectsSection.projectTech.1.a'), t('projectsSection.projectTech.1.b')],
            title: t('projectsSection.projectTitle.1'),
            desc: t('projectsSection.projectdesc.1'),
            live_demo: 'https://rifki-devs.itch.io/strange-birds?secret=PULmvAgdCpzSM4hL5B8YjtY',
            github: 'https://rifki-devs.itch.io/strange-birds?secret=PULmvAgdCpzSM4hL5B8YjtY',
        },
        {
            img: '/projectImg/zenithAI.webp',
            tech: [t('projectsSection.projectTech.2.a'), t('projectsSection.projectTech.2.b')],
            title: t('projectsSection.projectTitle.2'),
            desc: t('projectsSection.projectdesc.2'),
            live_demo: 'https://rifki-devs.itch.io/strange-birds?secret=PULmvAgdCpzSM4hL5B8YjtY',
            github: 'https://rifki-devs.itch.io/strange-birds?secret=PULmvAgdCpzSM4hL5B8YjtY',
        },
        {
            img: '/projectImg/Blog.webp',
            tech: [
                t('projectsSection.projectTech.3.a'),
                t('projectsSection.projectTech.3.b'),
                t('projectsSection.projectTech.3.c'),
            ],
            title: t('projectsSection.projectTitle.3'),
            desc: t('projectsSection.projectdesc.3'),
            live_demo: '#',
            github: 'https://rifki-devs.itch.io/strange-birds?secret=PULmvAgdCpzSM4hL5B8YjtY',
        },
        {
            img: '/projectImg/ebuxs.webp',
            tech: [t('projectsSection.projectTech.4')],
            title: t('projectsSection.projectTitle.4'),
            desc: t('projectsSection.projectdesc.4'),
            live_demo: '/notfound',
            github: 'https://github.com/Kiisanz/ebuxs',
        },
    ];

    return (
        <div>
            <div className='flex-col pt-6'>
                <div className='flex w-full z-20'>
                    <div className='flex flex-wrap md:flex-row justify-center'>
                        {projectsData.slice(0, 4).map((project, index) => (
                            <div
                                key={index}
                                className={`w-full md:w-1/3 p-3 m-2 flex flex-col gap-2 justify-start text-start outline-1 ${
                                    isDark ? 'hover:bg-light hover:outline-light' : 'hover:bg-primary outline-primary'
                                } rounded-xl hover:bg-opacity-10 backdrop-blur-xl transition-all duration-300 ease-linear`}>
                                <img src={project.img} alt={project.title} className='w-full h-full rounded-xl' />
                                <div className='flex gap-2 items-center text-xs opacity-80'>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                                <span className='font-semibold'>{project.title}</span>
                                <p className='text-sm'>{project.desc}</p>
                                <div className='flex gap-2 text-xs whitespace-nowrap'>
                                    <Link
                                        className={`border-[1px] px-2 py-1 rounded-2xl transition-all duration-300 ease-in-out hover:bg-secondary border-secondary ${
                                            isDark ? 'hover:text-primary' : 'text-third'
                                        }`}
                                        to={project.live_demo}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        {t('projectsSection.demobtn')}
                                    </Link>
                                    <Link
                                        className='px-2 py-1 transition-all duration-300 ease-in-out hover:text-secondary underline underline-offset-2'
                                        to={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'>
                                        {t('projectsSection.repobtn')}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-12'>
                    <button
                        onClick={AllProjectsPage}
                        className={`border-[1px] px-2 py-1 rounded-2xl transition-all duration-300 ease-in-out border-secondary hover:bg-secondary ${
                            isDark ? 'text-secondary hover:text-primary' : 'hover:text-third'
                        }`}>
                        {t('projectsSection.seeallbtn')}
                    </button>
                </div>
            </div>
        </div>
    );
}

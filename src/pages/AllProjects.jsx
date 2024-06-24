import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconMoonFilled, IconSearch, IconSunFilled } from '@tabler/icons-react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AllProjects() {
    const [isDark, setIsDark] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const projectsPerPage = 6;

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
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
            live_demo: 'https://zenith-ai-self.vercel.app/',
            github: 'https://gitlab.com/rifkidevs/zenithAIchat',
        },
        {
            img: '/projectImg/Blog.webp',
            tech: [t('projectsSection.projectTech.3.a'), t('projectsSection.projectTech.3.b')],
            title: t('projectsSection.projectTitle.3'),
            desc: t('projectsSection.projectdesc.3'),
            live_demo: '/notfound',
            github: 'https://github.com/Kiisanz/Rifki-Blog',
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

    const handleSearch = () => {
        // Filter projects based on search term
        // Case insensitive search by title or tech
        const filteredProjects = projectsData.filter(
            (project) =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        return filteredProjects;
    };

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleNavigateHome = () => {
        navigate('/'); // Navigate to the home page when the button is clicked
    };

    // Get current projects based on pagination and search results
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const filteredProjects = handleSearch(); // Get filtered projects

    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    return (
        <div className={`min-h-screen ${isDark ? 'bg-primary text-light' : 'bg-light text-primary'}`}>
            <Background />
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

                {/* Right Section*/}
                <div className='w-1/3 text-sm'>
                    <div className='hidden gap-3 justify-end items-center md:flex'>
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
                    </div>
                </div>
            </div>

            <div className='w-full pt-24 text-sm flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-4xl pb-4 font-bold'>{t('projectsSection.title')}</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault(); // Prevent form submission
                    }}
                    className='relative w-full px-12 max-w-md'>
                    <input
                        type='text'
                        placeholder={t('utils.srch')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`border-[1px] border-${isDark ? 'light' : 'primary'} hover:bg-${
                            isDark ? 'light' : 'primary'
                        } hover:bg-opacity-25 focus:bg-${isDark ? 'light' : 'primary'} focus:bg-opacity-25 text-${
                            isDark ? 'light' : 'primary'
                        } placeholder-${
                            isDark ? 'light' : 'primary'
                        }-light py-2 px-4 rounded-xl focus:outline-none bg-transparent w-full`}
                    />
                    <button type='submit' className='absolute right-2 px-12 top-1/2 transform -translate-y-1/2'>
                        <IconSearch size={18} strokeWidth={1.5} className={`text-${isDark ? 'light' : 'primary'}-light`} />
                    </button>
                </form>
            </div>

            <div className={`relative z-10 flex flex-col justify-center items-center pt-24 px-6 text-center md:px-24 lg:px-36`}>
                <div className='flex justify-center w-full z-20'>
                    <div className='flex flex-wrap md:flex-row justify-center'>
                        {currentProjects.length > 0 ? (
                            currentProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`w-full md:w-1/3 p-3 my-3 flex flex-col gap-2 justify-start text-start outline-1 ${
                                        isDark ? 'hover:bg-light hover:outline-light' : 'hover:bg-primary outline-primary'
                                    } rounded-xl hover:bg-opacity-10 backdrop-blur-xl transition-all duration-300 ease-linear`}>
                                    <img src={project.img} alt={project.title} className='w-full h-full rounded-xl' />
                                    <div className='flex gap-2 items-center text-xs opacity-80 whitespace-nowrap '>
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex}>{tech}</span>
                                        ))}
                                    </div>
                                    <span className='font-semibold'>{project.title}</span>
                                    <p className='text-sm'>{project.desc}</p>
                                    <div className='flex gap-2 text-xs whitespace-nowrap'>
                                        <a
                                            className={`border-[1px] px-2 py-1 rounded-2xl transition-all duration-300 ease-in-out hover:bg-secondary border-secondary ${
                                                isDark ? 'hover:text-primary' : 'text-third'
                                            }`}
                                            href={project.live_demo}
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            {t('projectsSection.demobtn')}
                                        </a>
                                        <a
                                            className='px-2 py-1 transition-all duration-300 ease-in-out hover:text-secondary underline underline-offset-2'
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            {t('projectsSection.repobtn')}
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={`text-center text-sm text-${isDark ? 'light' : 'primary'} py-6`}>
                                {t('utils.404')}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='flex py-8 justify-between items-center flex-col md:flex-row gap-8 px-24'>
                <button
                    onClick={handleNavigateHome}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-linear ${
                        isDark
                            ? 'bg-secondary text-primary hover:bg-opacity-70 hover:text-primary'
                            : 'bg-secondary text-third hover:bg-opacity-50'
                    }`}>
                    {t('utils.bckbtn')}
                </button>

                <div className='flex justify-between items-center gap-4 z-30'>
                    {/* Pagination buttons */}

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePagination(i + 1)}
                            className={`px-4 py-2 rounded-lg focus:outline-none transition duration-300 ${
                                currentPage === i + 1
                                    ? 'bg-secondary text-primary shadow-md hover:shadow-lg transform hover:scale-105'
                                    : isDark
                                    ? 'bg-light bg-opacity-10 text-light hover:bg-opacity-20 hover:shadow-md'
                                    : 'bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 hover:shadow-md'
                            }`}
                            style={{
                                boxShadow: currentPage === i + 1 ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                                transform: currentPage === i + 1 ? 'scale(1.05)' : 'scale(1)',
                            }}>
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className={`relative z-10 flex-col md:flex-row flex border-t-[1px] ${
                    isDark ? 'border-light' : 'border-primary'
                } justify-between px-12 text-xs py-8`}>
                <div className='flex flex-col gap-1 md:w-1/3 w-full'>
                    <h1 className='text-sm font-bold'>{t('footerSection.name')}</h1>
                    <span className='text-xs'>{t('footerSection.footer')}</span>
                    <span className='text-xs pt-4'>{t('footerSection.cr')}</span>
                </div>
                <Footer />
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

export default AllProjects;

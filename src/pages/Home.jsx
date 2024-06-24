// App.js or App.jsx
import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Skill from '../components/Skill';
import Background from '../components/Background';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function Home() {
    const [isDark, setIsDark] = useState(true);
    const HomeRef = useRef(null); // Corrected ref initialization
    const AboutRef = useRef(null);
    const ProjectsRef = useRef(null);
    const ContactRef = useRef(null);
    const { t } = useTranslation();

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    const scrollToProjects = () => {
        ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        AboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHome = () => {
        HomeRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        ContactRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`min-h-screen ${isDark ? 'bg-primary text-light' : 'bg-light text-primary'}`}>
            <Background />
            <Navbar
                isDark={isDark}
                toggleTheme={toggleTheme}
                scrollToProjects={scrollToProjects}
                scrollToAbout={scrollToAbout}
                scrollToHome={scrollToHome}
                scrollToContact={scrollToContact}
            />
            <div ref={HomeRef} className='relative z-0 py-28 backdrop-blur-3xl'>
                <HeroSection isDark={isDark} toggleTheme={toggleTheme} scrollToProjects={scrollToProjects} />
            </div>
            <div
                ref={AboutRef}
                className={`relative z-10 flex justify-center items-center text-center flex-col mx-6 md:mx-24 lg:mx-36 border-b-2 pt-24 ${
                    isDark ? '' : 'border-primary'
                }`}>
                <h1 className='text-4xl font-bold'>{t('aboutSection.abouttitle')}</h1>
                <span className='pt-3 text-xs opacity-70'>{t('aboutSection.aboutdesc')}</span>
                <About />
            </div>
            <div className='relative z-10 flex py-12 md:mx-20 lg:mx-28'>
                <Skill isDark={isDark} />
            </div>

            <div
                ref={ProjectsRef}
                className={`relative z-10 flex flex-col justify-center items-center pt-24 px-6 text-center md:px-20 lg:px-36`}>
                <h1 className='text-4xl font-bold'>{t('projectsSection.title')}</h1>
                <span className='pt-3 text-xs opacity-70'>{t('projectsSection.desc')}</span>
                <div className='max-w-[900px] w-full'>
                    <Projects isDark={isDark} />
                </div>
            </div>

            <div
                ref={ContactRef}
                className={`relative z-10 flex flex-grow flex-col w-full justify-center items-center pt-24 px-6 text-center md:px-24 lg:px-36`}>
                <h1 className='text-4xl font-bold'>{t('contactSection.title')}</h1>
                <span className='pt-3 text-xs opacity-70'>{t('contactSection.desc')}</span>
                <div className='max-w-[900px] w-full'>
                    <Contact isDark={isDark} />
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

export default Home;

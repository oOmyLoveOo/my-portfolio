import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const isHome = location.pathname === "/";
    const [isAboutSection, setIsAboutSection] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (isHome) {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    const aboutTop = aboutSection.offsetTop;
                    const scrollPosition = window.scrollY + 200;
                    
                    setIsAboutSection(scrollPosition >= aboutTop);
                }
            } else {
                setIsAboutSection(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const handleAboutClick = (e) => {
        if (!isHome) {
            e.preventDefault();
            navigate('/');
            setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleHomeClick = (e) => {
        if (isHome) {
            e.preventDefault();
            window.history.pushState("", document.title, window.location.pathname);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Styling based on theme
    const navbarBg = theme === 'dark' ? 'bg-white/5' : 'bg-white/80';
    const linkNormal = theme === 'dark' ? 'text-white' : 'text-blue-500';
    const linkHover = theme === 'dark' ? 'hover:text-green-400' : 'hover:text-black';
    const linkActive = theme === 'dark' 
        ? 'font-bold bg-green-500/20 text-green-400' 
        : 'font-bold bg-white text-blue-600 shadow-md';
    const toggleBg = theme === 'dark' ? 'bg-white/5' : 'bg-white/80';
    const toggleHover = theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-white';
    
    return (
        <nav className="flex justify-center items-center p-2 sm:p-6 w-full sticky top-0 z-40 relative">
            {/* Decorative dots - Left */}
            <div className="absolute left-4 sm:left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Center Navigation */}
            <div className={`flex items-center backdrop-blur-md ${navbarBg} rounded-full px-1 sm:px-4 py-1 sm:py-2 shadow-lg`}>
                
                {/* HOME */}
                <Link 
                    to="/" 
                    onClick={handleHomeClick}
                    className={`${linkHover} transition-all duration-300 w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full ${
                        location.pathname === "/" && !isAboutSection 
                            ? linkActive
                            : linkNormal
                    }`}
                >
                    Home
                </Link>
                
                {/* ABOUT */}
                {isHome ? (
                    <a 
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={`${linkHover} transition-all duration-300 w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full ${
                            isAboutSection 
                                ? linkActive
                                : linkNormal
                        }`}
                    >
                        About
                    </a>
                ) : (
                    <button
                        onClick={handleAboutClick}
                        className={`${linkHover} transition-all duration-300 ${linkNormal} w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full`}
                    >
                        About
                    </button>
                )}
                
                {/* PROJECTS */}
                <Link 
                    to="/sections/portfolio" 
                    className={`${linkHover} transition-all duration-300 w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full ${
                        location.pathname === "/sections/portfolio" 
                            ? linkActive
                            : linkNormal
                    }`}
                >
                    Portfolio
                </Link>
                
                {/* CONTACT */}
                <Link 
                    to="/sections/contact" 
                    className={`${linkHover} transition-all duration-300 w-[85px] sm:w-[120px] text-center py-1 sm:py-2 text-sm sm:text-base rounded-full ${
                        location.pathname === "/sections/contact" 
                            ? linkActive
                            : linkNormal
                    }`}
                >
                    Contact
                </Link>
            </div>

            {/* Theme Toggle - Right */}
            <button
                onClick={toggleTheme}
                className={`absolute right-4 sm:right-8 p-2 rounded-full backdrop-blur-md ${toggleBg} ${toggleHover} transition-all duration-300 shadow-lg`}
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </button>
        </nav>
    );
};

export default Navbar;
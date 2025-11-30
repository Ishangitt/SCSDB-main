import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "../../context/ThemeContext";

const Sidenav = ({ open, setOpen }) => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setOpen]);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  // Only show hamburger on home page
  const showHamburger = location.pathname === "/";

  return (
    <>
      {/* Hamburger button for mobile - Fixed positioning and z-index */}
      {showHamburger && (
        <button
          className={`md:hidden absolute top-2.5 left-3 z-[60] p-2 rounded-lg focus:outline-none shadow-lg border transition-all duration-300 hover:shadow-xl ${
            isDarkMode 
              ? 'bg-[#1F1E24] border-zinc-600 text-white hover:bg-zinc-900' 
              : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu size={25} />
        </button>
      )}

      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[45] md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={`h-screen flex flex-col fixed z-[50] top-0 left-0 overflow-y-auto transition-all duration-300 ease-in-out w-[70vw] max-w-[320px] md:w-[19vw] md:max-w-[420px] p-13 md:p-10 border-r-2 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-[#1F1E24] via-[#2a2930] to-[#1F1E24] border-zinc-700 shadow-2xl' 
            : 'bg-gradient-to-b from-white via-gray-50 to-white border-gray-300 shadow-2xl'
        }`}
      >
        {/* Logo Section */}
        <div className={`mb-8 pb-6 border-b transition-all duration-300 ${isDarkMode ? 'border-zinc-700' : 'border-gray-300'}`}>
          <Link to="/" onClick={handleLinkClick} className={`text-3xl font-black flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all duration-200 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#6556CD] via-[#7B68E6] to-[#8b7dd8] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 transform">
              <i className="ri-film-fill text-white text-lg"></i>
            </div>
            <span className="bg-gradient-to-r from-[#6556CD] to-[#8b7dd8] bg-clip-text text-transparent">SCSDB</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className={`flex flex-col gap-1 mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          <div className={`text-xs uppercase tracking-widest font-bold mb-4 px-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>Discover</div>
          
          <Link
            to="/"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-home-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
            <span>Home</span>
            {location.pathname === '/' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/trending"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/trending' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-fire-fill text-lg text-orange-400 group-hover:scale-110 transition-transform duration-300"></i>
            <span>Trending</span>
            {location.pathname === '/trending' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/popular"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/popular' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-star-fill text-lg text-yellow-400 group-hover:scale-110 transition-transform duration-300"></i>
            <span>Popular</span>
            {location.pathname === '/popular' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/movie"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/movie' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-movie-2-fill text-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300"></i>
            <span>Movies</span>
            {location.pathname === '/movie' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/tv"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/tv' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-tv-2-fill text-lg text-purple-400 group-hover:scale-110 transition-transform duration-300"></i>
            <span>TV Shows</span>
            {location.pathname === '/tv' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/person"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/person' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-team-fill text-lg text-pink-400 group-hover:scale-110 transition-transform duration-300"></i>
            <span>People</span>
            {location.pathname === '/person' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>
        </nav>

        {/* Divider */}
        <div className={`border-b my-4 ${isDarkMode ? 'border-zinc-700' : 'border-gray-300'}`}></div>

        {/* Info Section */}
        <nav className={`flex flex-col gap-1 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          <div className={`text-xs uppercase tracking-widest font-bold mb-4 px-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>Info</div>

          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/about' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-information-2-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
            <span>About Us</span>
            {location.pathname === '/about' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/contact' 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white shadow-lg' 
                : isDarkMode ? 'hover:bg-[#3a3842] hover:text-white hover:translate-x-1' : 'hover:bg-gray-100 hover:text-gray-900 hover:translate-x-1'
            } text-base`}
          >
            <i className="ri-mail-fill text-lg group-hover:scale-110 transition-transform duration-300"></i>
            <span>Contact</span>
            {location.pathname === '/contact' && <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </Link>
        </nav>

        {/* Footer Note and Theme Toggle */}
        <div className={`mt-auto pt-6 border-t transition-all duration-300 ${isDarkMode ? 'border-zinc-700' : 'border-gray-300'}`}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`w-full group flex items-center justify-center gap-2 px-4 py-3 mb-4 rounded-lg font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] hover:from-[#7B68E6] hover:to-[#8b7dd8] text-white shadow-lg hover:shadow-xl hover:scale-105' 
                : 'bg-gradient-to-r from-[#6556CD] to-[#7B68E6] hover:from-[#7B68E6] hover:to-[#8b7dd8] text-white shadow-lg hover:shadow-xl hover:scale-105'
            }`}
          >
            <i className={`text-lg group-hover:rotate-12 transition-transform duration-300 ${isDarkMode ? "ri-sun-line" : "ri-moon-fill"}`} />
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
          
          <p className={`text-xs text-center leading-relaxed transition-all duration-300 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
            Discover movies, TV shows & people powered by TMDB
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
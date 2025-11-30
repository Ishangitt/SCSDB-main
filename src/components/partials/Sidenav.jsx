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
          className="md:hidden absolute top-2.5 left-3 z-[60] p-2 bg-[#1F1E24] rounded-lg text-white focus:outline-none shadow-lg border border-zinc-600"
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
        className={`h-screen border-r-2 flex flex-col fixed z-[50] top-0 left-0 overflow-y-auto transition-all duration-300 ease-in-out w-[70vw] max-w-[320px] md:w-[19vw] md:max-w-[420px] p-13 md:p-10 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${
          isDarkMode 
            ? 'bg-[#1F1E24] border-zinc-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Logo Section */}
        <div className="mb-8 pb-6 border-b border-zinc-700">
          <Link to="/" onClick={handleLinkClick} className={`text-3xl font-black flex items-center gap-2 hover:opacity-80 transition-opacity ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#6556CD] to-[#7B68E6] rounded-lg flex items-center justify-center">
              <i className="ri-film-fill text-white text-lg"></i>
            </div>
            <span>SCSDB</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className={`flex flex-col gap-1 mb-6 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          <div className={`text-xs uppercase tracking-widest font-bold mb-4 px-2 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>Discover</div>
          
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-home-fill text-lg"></i>
            <span>Home</span>
          </Link>

          <Link
            to="/trending"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-fire-fill text-lg text-orange-400"></i>
            <span>Trending</span>
          </Link>

          <Link
            to="/popular"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-star-fill text-lg text-yellow-400"></i>
            <span>Popular</span>
          </Link>

          <Link
            to="/movie"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-movie-2-fill text-lg text-cyan-400"></i>
            <span>Movies</span>
          </Link>

          <Link
            to="/tv"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-tv-2-fill text-lg text-purple-400"></i>
            <span>TV Shows</span>
          </Link>

          <Link
            to="/person"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-team-fill text-lg text-pink-400"></i>
            <span>People</span>
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
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-information-2-fill text-lg"></i>
            <span>About Us</span>
          </Link>

          <Link
            to="/contactus"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#6556CD] hover:text-white transition-all duration-200 text-base"
          >
            <i className="ri-mail-fill text-lg"></i>
            <span>Contact</span>
          </Link>
        </nav>

        {/* Footer Note and Theme Toggle */}
        <div className={`mt-auto pt-6 border-t ${isDarkMode ? 'border-zinc-700' : 'border-gray-300'}`}>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 mb-4 bg-[#6556CD] hover:bg-[#7B68E6] text-white font-semibold rounded-lg transition-all duration-300"
          >
            <i className={isDarkMode ? "ri-sun-line text-lg" : "ri-moon-fill text-lg"} />
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
          
          <p className={`text-xs text-center leading-relaxed ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
            Discover movies, TV shows & people powered by TMDB
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
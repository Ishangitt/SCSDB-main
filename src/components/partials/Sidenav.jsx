import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidenav = ({ open, setOpen }) => {
  const location = useLocation();

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
        className={`h-screen border-r-2 border-zinc-700 bg-[#1F1E24] w-[70vw] max-w-[320px] md:w-[19vw] md:max-w-[420px] p-13 md:p-10 flex flex-col fixed z-[50] top-0 left-0 overflow-y-auto transition-all duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="mb-8 pb-6 border-b border-zinc-700">
          <Link to="/" onClick={handleLinkClick} className="text-3xl text-white font-black flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6556CD] to-[#7B68E6] rounded-lg flex items-center justify-center">
              <i className="ri-film-fill text-white text-lg"></i>
            </div>
            <span>SCSDB</span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col text-zinc-400 gap-1 mb-6">
          <div className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 px-2">Discover</div>
          
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
        <div className="border-b border-zinc-700 my-4"></div>

        {/* Info Section */}
        <nav className="flex flex-col text-zinc-400 gap-1">
          <div className="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-4 px-2">Info</div>

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

        {/* Footer Note */}
        <div className="mt-auto pt-6 border-t border-zinc-700">
          <p className="text-xs text-zinc-500 text-center leading-relaxed">
            Discover movies, TV shows & people powered by TMDB
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
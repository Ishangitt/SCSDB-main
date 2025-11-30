import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import { useTheme } from "../../context/ThemeContext";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [query]);

  return (
    <nav className={`w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-3 md:py-4 gap-3 md:gap-0 sticky top-0 z-30 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-[#1F1E24] via-[#2a2930] to-[#1F1E24] bg-opacity-95 border-b border-zinc-700 shadow-lg shadow-black/20' 
        : 'bg-gradient-to-b from-white via-gray-50 to-white bg-opacity-95 border-b border-gray-300 shadow-lg shadow-gray-200/20'
    } backdrop-blur-md`}>
      <div className="flex items-center w-full relative justify-center">
        {/* Search container with proper spacing and positioning */}
        <div className="relative w-full max-w-3xl flex items-center group">
          {/* Search icon with proper positioning */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
            <i className="text-lg md:text-xl text-zinc-500 group-focus-within:text-[#6556CD] ri-search-line transition-all duration-300 group-focus-within:scale-110" />
          </div>

          {/* Input field with proper padding */}
          <input
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className={`outline-none border-none pl-12 pr-12 py-3 md:py-3.5 text-base md:text-lg w-full rounded-xl text-left transition-all duration-300 shadow-lg border ${
              isDarkMode
                ? 'text-white bg-zinc-900 bg-opacity-50 placeholder:text-zinc-500 border-zinc-700 focus:border-[#6556CD] focus:bg-zinc-900 focus:bg-opacity-90 focus:shadow-xl focus:shadow-[#6556CD]/20'
                : 'text-gray-900 bg-gray-100 bg-opacity-80 placeholder:text-gray-500 border-gray-300 focus:border-[#6556CD] focus:bg-gray-50 focus:shadow-xl focus:shadow-[#6556CD]/20'
            }`}
            type="text"
            placeholder="Search movies, shows, people..."
            style={{ letterSpacing: '0.01em' }}
          />

          {/* Clear button */}
          {query.length > 0 && (
            <i
              onClick={() => setquery("")}
              className="text-xl md:text-2xl text-zinc-500 hover:text-[#6556CD] ri-close-fill cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 hover:rotate-90"
            ></i>
          )}

          {/* Search results dropdown - Fixed positioning */}
          {showSearch && (
            <div className={`absolute left-0 right-0 z-[100] max-h-[60vh] overflow-auto rounded-xl shadow-2xl mx-auto border top-[110%] backdrop-blur-sm scrollbar-thin animate-fade-in ${
              isDarkMode
                ? 'bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 bg-opacity-95 border-zinc-700 shadow-2xl shadow-black/40 scrollbar-thumb-zinc-700 scrollbar-track-zinc-900'
                : 'bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100 bg-opacity-95 border-gray-300 shadow-2xl shadow-gray-300/40 scrollbar-thumb-gray-300 scrollbar-track-gray-100'
            }`}>
              {searches.length > 0 ? (
                searches.map((s, i) => (
                  <Link
                    to={`/${s.media_type}/details/${s.id}`}
                    key={s.id || i}
                    className={`duration-300 w-full p-4 md:p-5 flex justify-start last:border-b-0 items-center group transition-all border-b transform hover:scale-105 hover:pl-6 ${
                      isDarkMode
                        ? 'text-zinc-100 hover:text-white hover:bg-zinc-800 hover:bg-opacity-80 border-zinc-800/40'
                        : 'text-gray-800 hover:text-gray-900 hover:bg-gray-100 hover:bg-opacity-80 border-gray-300/40'
                    }`}
                  >
                    <img
                      className="w-[8vh] h-[8vh] md:w-[10vh] md:h-[10vh] object-cover rounded-lg mr-4 md:mr-5 shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110"
                      src={
                        s.backdrop_path || s.profile_path
                          ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                          : noimage
                      }
                      alt={s.name || s.title}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="truncate font-semibold">
                        {s.name || s.title || s.original_name || s.original_title}
                      </p>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                        {s.media_type && s.media_type.charAt(0).toUpperCase() + s.media_type.slice(1)}
                        {s.release_date && ` • ${s.release_date.split('-')[0]}`}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className={`p-8 text-center transition-all duration-300 ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                  <i className="ri-search-2-line text-3xl mb-3 block opacity-50 animate-bounce"></i>
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
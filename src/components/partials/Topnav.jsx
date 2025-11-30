import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

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
    <nav className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-3 md:py-4 gap-3 md:gap-0 bg-[#1F1E24] bg-opacity-95 backdrop-blur-md sticky top-0 z-30 border-b border-zinc-800">
      <div className="flex items-center w-full relative justify-center">
        {/* Search container with proper spacing and positioning */}
        <div className="relative w-full max-w-3xl flex items-center group">
          {/* Search icon with proper positioning */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none z-10">
            <i className="text-lg md:text-xl text-zinc-500 group-focus-within:text-[#6556CD] ri-search-line transition-colors" />
          </div>

          {/* Input field with proper padding */}
          <input
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className="text-white outline-none border-none pl-12 pr-12 py-3 md:py-3.5 text-base md:text-lg bg-zinc-900 bg-opacity-50 w-full rounded-xl text-left placeholder:text-zinc-500 placeholder:font-normal border border-zinc-700 focus:border-[#6556CD] focus:bg-zinc-900 focus:bg-opacity-80 transition-all duration-200 shadow-lg"
            type="text"
            placeholder="Search movies, shows, people..."
            style={{ letterSpacing: '0.01em' }}
          />

          {/* Clear button */}
          {query.length > 0 && (
            <i
              onClick={() => setquery("")}
              className="text-xl md:text-2xl text-zinc-500 hover:text-zinc-300 ri-close-fill cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
            ></i>
          )}

          {/* Search results dropdown - Fixed positioning */}
          {showSearch && (
            <div className="absolute left-0 right-0 z-[100] max-h-[60vh] overflow-auto bg-zinc-900 bg-opacity-95 backdrop-blur-sm top-[110%] rounded-xl shadow-2xl mx-auto border border-zinc-700 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
              {searches.length > 0 ? (
                searches.map((s, i) => (
                  <Link
                    to={`/${s.media_type}/details/${s.id}`}
                    key={i}
                    className="text-zinc-100 hover:text-white hover:bg-zinc-800 hover:bg-opacity-60 duration-200 w-full p-4 md:p-5 flex justify-start border-b border-zinc-800 last:border-b-0 items-center group transition-all"
                  >
                    <img
                      className="w-[8vh] h-[8vh] md:w-[10vh] md:h-[10vh] object-cover rounded-lg mr-4 md:mr-5 shadow-lg group-hover:shadow-xl transition-shadow"
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
                      <p className="text-xs text-zinc-400 mt-1">
                        {s.media_type && s.media_type.charAt(0).toUpperCase() + s.media_type.slice(1)}
                        {s.release_date && ` • ${s.release_date.split('-')[0]}`}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-8 text-center text-zinc-400">
                  <i className="ri-search-2-line text-3xl mb-3 block opacity-50"></i>
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
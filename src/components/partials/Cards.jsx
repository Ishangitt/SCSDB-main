import React from "react";
import { Link } from "react-router-dom";
import noimage from '/noimage.jpg';

const Cards = ({ data, title }) => {
  return (
    <div className="w-full px-2 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {data.map((c, i) => (
          <Link
            to={`/${c.media_type || title}/details/${c.id}`}
            className="group relative bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            key={i}
          >
            {/* Image Container with better aspect ratio for mobile */}
            <div className="relative w-full aspect-[2/3] overflow-hidden bg-zinc-800">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                src={
                  c.poster_path || c.backdrop_path || c.profile_path
                    ? `https://image.tmdb.org/t/p/original${
                        c.poster_path || c.backdrop_path || c.profile_path
                      }`
                    : noimage
                }
                alt={c.name || c.title || c.original_name || c.original_title}
              />
              
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Vote Average Badge - positioned better for mobile */}
              {c.vote_average && (
                <div className="absolute top-2 right-2 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                  {(c.vote_average * 10).toFixed()}%
                </div>
              )}

              {/* Hover action button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-[#6556CD] hover:bg-[#7B68E6] text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all">
                  <i className="ri-play-fill text-lg"></i>
                  <span className="text-sm">View</span>
                </button>
              </div>
            </div>
            
            {/* Title Container with better mobile spacing */}
            <div className="p-2.5 sm:p-3.5 bg-zinc-900 bg-opacity-60 backdrop-blur-sm">
              <h1 className="text-white font-bold text-xs sm:text-sm leading-tight line-clamp-2 group-hover:text-[#6556CD] transition-colors">
                {c.name || c.title || c.original_name || c.original_title}
              </h1>
              {(c.release_date || c.first_air_date) && (
                <p className="text-zinc-400 text-xs mt-1">
                  {new Date(c.release_date || c.first_air_date).getFullYear()}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
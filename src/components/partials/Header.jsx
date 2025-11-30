import React from "react";
import { Link } from "react-router-dom";

const Header = ({data})=>{
  const rating = data.vote_average ? (data.vote_average / 2).toFixed(1) : "N/A";
  
  return(
    <div style={{
      background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(31,30,36,0.95) 100%),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
          })`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }} className="w-full h-[38vh] sm:h-[45vh] md:h-[55vh] flex flex-col items-start justify-end px-5 sm:px-8 md:px-16 py-8 md:py-12 text-left mx-0 sm:mx-auto relative overflow-hidden group">
      {/* Accent line with animation */}
      <div className="absolute top-0 left-0 w-1 h-24 bg-gradient-to-b from-[#6556CD] to-transparent animate-pulse"></div>
      
      {/* Decorative gradient orb */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[#6556CD]/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
      
      <div className="relative z-10 w-full animate-fade-in">
        <h1 className="w-full sm:w-[90%] md:w-[75%] text-3xl sm:text-4xl md:text-6xl font-black text-white break-words mb-3 md:mb-5 leading-tight tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#6556CD] hover:to-[#8b7dd8] transition-all duration-500">
          {data.name || data.title || data.original_name || data.original_title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-5 text-xs sm:text-sm md:text-base">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#6556CD] to-[#7B68E6] text-white px-3 py-1.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 transform">
            <i className="ri-star-fill text-yellow-300 animate-spin-slow"></i>
            <span>{rating} / 5</span>
          </div>
          <span className="flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300">
            <i className="ri-calendar-line mr-2"></i>{data.release_date || "TBA"}
          </span>
          <span className="flex items-center text-cyan-400 font-semibold bg-gradient-to-r from-zinc-800 to-zinc-700 px-3 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <i className="ri-movie-2-fill mr-2"></i>{data.media_type.toUpperCase()}
          </span>
          {data.popularity && (
            <span className="flex items-center text-orange-400 font-semibold animate-pulse">
              <i className="ri-fire-fill mr-2 text-red-500"></i>Trending
            </span>
          )}
        </div>
        
        <p className="w-full sm:w-[90%] md:w-[70%] text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 line-clamp-3 text-zinc-100">
          {data.overview && data.overview.slice(0, 220)}
          {data.overview && data.overview.length > 220 && "..."}
          {!data.overview && "No description available"}
        </p>
        
        <div className="flex flex-wrap gap-3 md:gap-4">
          <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="group/btn flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-bold text-white bg-gradient-to-r from-[#6556CD] to-[#7B68E6] rounded-lg hover:from-[#7B68E6] hover:to-[#8b7dd8] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
            <i className="ri-play-fill text-lg group-hover/btn:scale-125 transition-transform duration-300"></i>
            Watch Trailer
          </Link>
          <Link to={`/${data.media_type}/details/${data.id}`} className="group/btn flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base font-bold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#1F1E24] transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
            <i className="ri-information-line group-hover/btn:rotate-180 transition-transform duration-300"></i>
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Header;
import React from "react";
import { Link } from "react-router-dom";


function NotFound(){
  return(
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#1F1E24] p-4">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* 404 Animation */}
        <div className="animate-bounce">
          <img 
            className="h-40 md:h-64 object-cover rounded-lg shadow-2xl" 
            src="/404.gif" 
            alt="404 Not Found" 
          />
        </div>
        
        {/* Error Message */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
            404
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 mb-2">
            Page Not Found
          </p>
          <p className="text-sm md:text-base text-zinc-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 md:px-8 py-3 md:py-4 bg-[#6556CD] text-white font-bold rounded-lg hover:bg-[#7B68E6] transition-all duration-300 flex items-center gap-2"
          >
            <i className="ri-home-fill text-lg" />
            Back to Home
          </Link>
          <button
            onClick={() => globalThis.history.back()}
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-zinc-600 text-white font-bold rounded-lg hover:border-[#6556CD] hover:bg-[#6556CD] hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2"
          >
            <i className="ri-arrow-left-line text-lg" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
export default NotFound;
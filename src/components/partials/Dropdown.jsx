import React from "react";

const Dropdown = ({title, options, func}) => {
  return(
    <div className="relative w-full min-w-[120px] sm:min-w-[140px] md:min-w-[180px]">
        <select 
          defaultValue="0" 
          onChange={func}  
          name="format" 
          id="format"
          className="w-full text-xs sm:text-sm md:text-base px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#27272a] text-white border border-zinc-700 hover:border-zinc-600 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD] focus:ring-opacity-30 transition-all duration-200 appearance-none cursor-pointer font-medium"
        >
          <option value="0" disabled>
            {title}
          </option>
          {options.map((o,i)=> 
            <option key={i} value={o} className="bg-[#27272a] text-white">
              {o.charAt(0).toUpperCase() + o.slice(1)}
            </option>
          )}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          <i className="ri-arrow-down-s-line text-[#6556CD] text-lg"></i>
        </div>
    </div>
  )
}

export default Dropdown;
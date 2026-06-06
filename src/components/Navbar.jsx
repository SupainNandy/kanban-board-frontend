import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="
        sticky top-0 z-[100]
        h-[75px] w-full px-6 sm:px-10
        flex items-center justify-between
        bg-[#0D0D0C] 
        border-b border-[#2A2A28] 
        shadow-[0_4px_30px_rgba(0,0,0,0.4)]
        backdrop-blur-md bg-opacity-95
      "
    >
      {/* Brand Logo / Title Section */}
      <div className="flex items-center space-x-3 group cursor-pointer">
        {/* Abstract Premium Gold Logo Minimal */}
        <div className="flex gap-1 h-5 items-end">
          <span className="w-1 h-3 bg-[#D4AF37]/60 rounded-full transition-all duration-300 group-hover:h-5" />
          <span className="w-1 h-5 bg-[#D4AF37] rounded-full" />
          <span className="w-1 h-4 bg-[#D4AF37]/80 rounded-full transition-all duration-300 group-hover:h-3" />
        </div>
        
        <h1 
          className="
            text-xl font-bold tracking-widest uppercase
            bg-gradient-to-r from-gray-100 via-gray-200 to-[#D4AF37]/90
            bg-clip-text text-transparent
          "
        >
          Kanban Board
        </h1>
      </div>

      {/* Profile & Controls Section */}
      <div className="flex items-center gap-4">
        {/* Luxury Minimalist Logout Button */}
        <button
          onClick={logout}
          className="
            relative h-10 px-5
            flex items-center justify-center gap-2
            text-xs font-bold uppercase tracking-widest
            bg-[#141412] text-gray-400
            border border-[#2A2A28] rounded-xl
            transition-all duration-300 ease-in-out
            hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#1A1A18]
            hover:shadow-[0_0_15px_rgba(212,175,55,0.1)]
            active:scale-[0.97]
          "
        >
          <svg 
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
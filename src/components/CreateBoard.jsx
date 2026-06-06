import React, { useState } from "react";
import API from "../api/axios";

const CreateBoard = ({ fetchBoards }) => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createBoard = async () => {
    if (!title.trim() || isLoading) return;

    setIsLoading(true);
    try {
      await API.post("/boards", { title });
      setTitle("");
      fetchBoards();
    } catch (error) {
      console.error("Error creating board:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger creation on pressing "Enter" key for premium UX
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createBoard();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4 sm:px-0">
      <div 
        className="
          flex flex-col sm:flex-row 
          gap-4 items-center 
          p-5 rounded-2xl 
          bg-[#0D0D0C] 
          border border-[#2A2A28] 
          shadow-[0_8px_30px_rgb(0,0,0,0.5)]
          transition-all duration-300
          focus-within:border-[#D4AF37]/50 
          focus-within:shadow-[0_0_20px_rgba(212,175,55,0.05)]
        "
      >
        {/* Premium Dark Input Field */}
        <div className="relative w-full flex-1">
          <input
            type="text"
            placeholder="Enter elegant board title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            className="
              w-full h-12 px-5 
              bg-[#141412] 
              text-gray-100 placeholder-text-[#4A4A45] placeholder:text-sm
              border border-[#2A2A28] rounded-xl 
              outline-none transition-all duration-200
              focus:border-[#D4AF37] focus:bg-[#1A1A18]
              disabled:opacity-50
            "
          />
        </div>

        {/* Luxury Gold Action Button */}
        <button
          onClick={createBoard}
          disabled={!title.trim() || isLoading}
          className="
            w-full sm:w-auto h-12 px-6 
            flex items-center justify-center gap-2
            text-sm font-bold uppercase tracking-widest
            bg-[#D4AF37] text-black
            rounded-xl transition-all duration-300
            hover:bg-[#F3CD5F] hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]
            active:scale-[0.98]
            disabled:bg-[#2A2A28] disabled:text-gray-600 disabled:shadow-none disabled:cursor-not-allowed
          "
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating...
            </span>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Create Board
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateBoard;
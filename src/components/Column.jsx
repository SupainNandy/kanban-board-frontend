import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

const Column = ({ id, title, tasks = [] }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        flex flex-col 
        w-full sm:w-[340px] md:w-[380px] 
        h-[700px] max-h-[85vh] 
        bg-[#0D0D0C] 
        rounded-2xl 
        border 
        transition-all duration-300 ease-in-out
        ${isOver 
          ? "border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.01]" 
          : "border-[#2A2A28] shadow-2xl"
        }
      `}
    >
      {/* Premium Column Header */}
      <div className="bg-[#0D0D0C] border-b border-[#2A2A28] px-6 py-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Minimalist Gold Indicator Dot */}
            <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-100">
              {title}
            </h2>
          </div>

          {/* Premium Badge */}
          <span className="px-2.5 py-0.5 text-xs font-bold font-mono bg-[#1A1A18] text-[#D4AF37] border border-[#D4AF37]/30 rounded-md">
            {String(tasks.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Task List Area */}
      <div 
        className={`
          flex-1 overflow-y-auto p-4 space-y-4 rounded-b-2xl transition-colors duration-200
          ${isOver ? "bg-[#141412]" : "bg-[#111110]"}
          scrollbar-thin scrollbar-thumb-[#2A2A28] scrollbar-track-transparent
        `}
      >
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard 
              key={task._id} 
              task={task} 
            />
          ))
        ) : (
          /* Empty State - Elegant Placeholder */
          <div className="flex flex-col items-center justify-center h-48 border border-dashed border-[#2A2A28] rounded-xl bg-[#0D0D0C]/50 px-4 group transition-colors duration-300 hover:border-[#D4AF37]/40">
            <svg 
              className="w-6 h-6 text-[#4A4A45] mb-2 group-hover:text-[#D4AF37]/60 transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-xs font-medium uppercase tracking-widest text-[#666661] group-hover:text-gray-400 transition-colors">
              Drop Tasks Here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Column;
import React, { useState } from "react";
import API from "../api/axios";

const TaskModal = ({ boardId, fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createTask = async () => {
    if (!title.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await API.post("/tasks", {
        title,
        description,
        dueDate,
        boardId,
        column: "todo",
      });

      setTitle("");
      setDescription("");
      setDueDate("");
      fetchTasks();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="
        w-full max-w-2xl mx-auto mb-8 p-6
        bg-[#0D0D0C] 
        border border-[#2A2A28] 
        rounded-2xl 
        shadow-[0_12px_40px_rgba(0,0,0,0.6)]
      "
    >
      {/* Premium Header Accent */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1 h-4 bg-[#D4AF37] rounded-full" />
        <h2 className="text-lg font-bold uppercase tracking-widest text-gray-100">
          Create New Task
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {/* Task Title Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold tracking-wider uppercase text-[#666661] font-mono">
            Task Heading
          </label>
          <input
            type="text"
            placeholder="Name your assignment..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            className="
              w-full h-12 px-4 
              text-sm text-gray-100 placeholder-[#4A4A45]
              bg-[#141412] border border-[#2A2A28] rounded-xl 
              outline-none transition-all duration-200
              focus:border-[#D4AF37] focus:bg-[#1A1A18]
              disabled:opacity-50
            "
          />
        </div>

        {/* Task Description Textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold tracking-wider uppercase text-[#666661] font-mono">
            Detailed Description
          </label>
          <textarea
            placeholder="Outline task deliverables or context here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isSubmitting}
            rows={4}
            className="
              w-full p-4 
              text-sm text-gray-100 placeholder-[#4A4A45]
              bg-[#141412] border border-[#2A2A28] rounded-xl 
              outline-none resize-none transition-all duration-200
              focus:border-[#D4AF37] focus:bg-[#1A1A18]
              disabled:opacity-50
            "
          />
        </div>

        {/* Due Date Picker */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold tracking-wider uppercase text-[#666661] font-mono">
            Deadline Matrix
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            disabled={isSubmitting}
            className="
              w-full h-12 px-4 
              text-sm text-gray-100
              bg-[#141412] border border-[#2A2A28] rounded-xl 
              outline-none transition-all duration-200
              focus:border-[#D4AF37] focus:bg-[#1A1A18]
              disabled:opacity-50
              [color-scheme:dark]
            "
          />
        </div>

        {/* Create Task Button */}
        <button
          onClick={createTask}
          disabled={!title.trim() || isSubmitting}
          className="
            w-full h-12 mt-2
            flex items-center justify-center gap-2
            text-xs font-bold uppercase tracking-widest
            bg-[#D4AF37] text-black rounded-xl
            transition-all duration-300 ease-in-out
            hover:bg-[#F3CD5F] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
            active:scale-[0.99]
            disabled:bg-[#2A2A28] disabled:text-gray-600 disabled:shadow-none disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Publishing...</span>
            </div>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>Create Task</span>
            </>
          )}
        </button>
      </div>
      
    </div>
  );
};

export default TaskModal;
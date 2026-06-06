import React, { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import useTaskStore from "../store/taskStore";

const TaskCard = ({ task }) => {
  const { updateTask, deleteTask } = useTaskStore();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task._id,
  });

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  const handleDelete = async (e) => {
    e.stopPropagation();
    if (!window.confirm("Delete this task?")) return;

    try {
      await deleteTask(task._id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.stopPropagation();
    try {
      await updateTask(task._id, { title, description });
      setEditing(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Inline dynamic styles strictly required for @dnd-kit movement mapping
  const draggingStyle = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={draggingStyle}
      className={`
        relative flex flex-col p-5 rounded-xl
        bg-[#141412] border transition-all duration-200
        ${isDragging 
          ? "border-[#D4AF37] opacity-60 scale-[1.02] shadow-[0_20px_40px_rgba(0,0,0,0.7)] z-50 cursor-grabbing" 
          : "border-[#2A2A28] hover:border-[#D4AF37]/40 shadow-md"
        }
      `}
    >
      {/* Top Header Row: Custom Drag Handle */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">
          Task Item
        </span>
        
        <div
          {...listeners}
          {...attributes}
          className="
            flex items-center justify-center p-1 rounded-md
            text-gray-500 cursor-grab hover:text-[#D4AF37] hover:bg-[#1A1A18]
            transition-colors duration-200 active:cursor-grabbing
          "
        >
          {/* Elegant 6-dot clean matrix vector icon */}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7 5a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2zM13 5a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2zm0 6a1 1 0 100-2 1 1 0 000 2z" />
          </svg>
        </div>
      </div>

      {/* Task Content / Editing Fields */}
      <div className="flex-1 space-y-3">
        {editing ? (
          <div className="space-y-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-10 px-3 text-sm font-semibold bg-[#0D0D0C] text-gray-100 border border-[#3A3A38] rounded-lg focus:border-[#D4AF37] outline-none transition-colors"
              placeholder="Task Title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[80px] p-3 text-xs bg-[#0D0D0C] text-gray-300 border border-[#3A3A38] rounded-lg focus:border-[#D4AF37] outline-none resize-none transition-colors"
              placeholder="Add details..."
            />
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-100">
              {task.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-400 line-clamp-3">
              {task.description || "No description provided."}
            </p>
          </div>
        )}
      </div>

      {/* Luxury Minimalist Due Date Stamp */}
      {task.dueDate && (
        <div className="mt-4 flex items-center gap-1.5 self-start px-2.5 py-1 text-[11px] font-medium font-mono rounded bg-[#1A1A18] text-[#D4AF37] border border-[#D4AF37]/20">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(task.dueDate).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
        </div>
      )}

      {/* Functional Layout Actions */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-[#2A2A28]/40">
        {editing ? (
          <>
            <button
              onClick={handleUpdate}
              className="flex-1 h-8 text-xs font-bold uppercase tracking-wider bg-[#D4AF37] text-black rounded-lg hover:bg-[#F3CD5F] transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="flex-1 h-8 text-xs font-bold uppercase tracking-wider bg-[#2A2A28] text-gray-300 rounded-lg hover:bg-[#3A3A38] transition-all"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            {task.column !== "done" && (
              <button
                onClick={() => setEditing(true)}
                className="flex-1 h-8 text-xs font-bold uppercase tracking-wider bg-[#1A1A18] text-gray-300 border border-[#2A2A28] rounded-lg hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all"
              >
                Edit
              </button>
            )}
            <button
              onClick={handleDelete}
              className="flex-1 h-8 text-xs font-bold uppercase tracking-wider bg-[#1A1A18] text-gray-500 border border-transparent rounded-lg hover:text-red-400 hover:bg-red-950/20 transition-all"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
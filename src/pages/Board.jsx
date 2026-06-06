import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  DndContext, 
  DragOverlay, 
  useSensor, 
  useSensors, 
  PointerSensor,
  defaultDropAnimationSideEffects
} from "@dnd-kit/core";

import API from "../api/axios";
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModel";

import useTaskStore from "../store/taskStore";

const Board = () => {
  const { boardId } = useParams();
  const { tasks = [], fetchTasks } = useTaskStore();
  
  // Track the actively dragged task state for the premium overlay portal
  const [activeTask, setActiveTask] = useState(null);

  // Configure high-precision pointer sensors to prevent accidental drag triggers on button clicks
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Triggers drag only after moving the pointer 8px
      },
    })
  );

  useEffect(() => {
    if (boardId) {
      fetchTasks(boardId);
    }
  }, [boardId, fetchTasks]);

  const handleDragStart = (event) => {
    const { active } = event;
    // Find the task object currently being manipulated
    const draggedTask = tasks.find((task) => task._id === active.id);
    setActiveTask(draggedTask);
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    setActiveTask(null); // Clear overlay state immediately

    if (!over) return;

    // Check if the card was actually dropped in a different column
    if (active.id && over.id && active.data.current?.column !== over.id) {
      try {
        await API.patch("/tasks/move", {
          taskId: active.id,
          column: over.id,
        });
        fetchTasks(boardId);
      } catch (error) {
        console.error("Error moving task node:", error);
      }
    }
  };

  const todoTasks = tasks.filter((task) => task.column === "todo");
  const progressTasks = tasks.filter((task) => task.column === "inprogress");
  const doneTasks = tasks.filter((task) => task.column === "done");

  // Custom configuration for smooth card drop landing deceleration
  const dropAnimationConfig = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.4",
        },
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#070706] text-gray-100 flex flex-col select-none">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Workspace Title Header */}
        <div className="flex flex-col gap-1.5 border-b border-[#2A2A28]/30 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#D4AF37] rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-gray-100">
              Project Dashboard
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
            Real-time pipeline overview. Drag and drop asset nodes across tracking states to modify distribution matrices.
          </p>
        </div>

        {/* Dashboard Analytics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#0D0D0C] border border-[#2A2A28] shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">Total Tasks</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-100">{String(tasks.length).padStart(2, "0")}</h3>
          </div>
          <div className="p-5 rounded-xl bg-[#0D0D0C] border border-[#2A2A28] shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">Backlog</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-300">{String(todoTasks.length).padStart(2, "0")}</h3>
          </div>
          <div className="p-5 rounded-xl bg-[#0D0D0C] border border-[#2A2A28] shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">In Progress</p>
            <h3 className="text-2xl font-bold mt-1 text-[#D4AF37]">{String(progressTasks.length).padStart(2, "0")}</h3>
          </div>
          <div className="p-5 rounded-xl bg-[#0D0D0C] border border-[#2A2A28] shadow-xl">
            <p className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">Completed</p>
            <h3 className="text-2xl font-bold mt-1 text-emerald-500">{String(doneTasks.length).padStart(2, "0")}</h3>
          </div>
        </div>

        {/* Task Creation Tool Box */}
        <TaskModal boardId={boardId} fetchTasks={() => fetchTasks(boardId)} />

        {/* Enhanced DndContext Wrapper Container */}
        <DndContext 
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pb-12">
            <Column id="todo" title="Todo Pipeline" tasks={todoTasks} />
            <Column id="inprogress" title="Active Production" tasks={progressTasks} />
            <Column id="done" title="Archived Assets" tasks={doneTasks} />
          </div>

          {/* Premium Fluid Portal Overlay Layer */}
          <DragOverlay dropAnimation={dropAnimationConfig}>
            {activeTask ? (
              <div className="rotate-[3deg] scale-[1.04] opacity-90 transition-transform duration-100 style-grab shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[#D4AF37]">
                <TaskCard task={activeTask} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

      </div>
      <span className="text-center text-xs text-gray-500 py-4">© 2026 Kanban Suite. All rights reserved.</span>
      <span className="text-center text-[10px] text-gray-600 pb-6">Developed by Supain Nandy.</span>
    </div>
  );
};

export default Board;
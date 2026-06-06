import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/axios";

import Navbar from "../components/Navbar";
import CreateBoard from "../components/CreateBoard";

const Dashboard = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const res = await API.get("/boards");
      setBoards(res.data || []);
    } catch (error) {
      console.error("Error fetching boards:", error);
    }
  };

  const deleteBoard = async (id) => {
    if (!window.confirm("Are you sure you want to delete this board and all its tasks?")) return;
    
    try {
      await API.delete(`/boards/${id}`);
      fetchBoards();
    } catch (error) {
      console.error("Error deleting board:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#070706] text-gray-100 flex flex-col">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Luxury Section Header */}
        <div className="flex flex-col gap-1.5 border-b border-[#2A2A28]/30 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#D4AF37] rotate-45 shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-gray-100">
              My Workspaces
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            Create, deploy, and organize your structural project production pipelines.
          </p>
        </div>

        {/* Global Overview Analytics Card */}
        <div className="max-w-xs p-5 rounded-xl bg-[#0D0D0C] border border-[#2A2A28] shadow-xl">
          <p className="text-[10px] font-bold tracking-widest text-[#666661] uppercase font-mono">
            Active Boards
          </p>
          <h2 className="text-3xl font-bold mt-1 text-gray-100 font-mono">
            {String(boards.length).padStart(2, "0")}
          </h2>
        </div>

        {/* Create Workspace Tool Section */}
        <CreateBoard fetchBoards={fetchBoards} />

        {/* Boards Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {boards.map((board) => (
            <div
              key={board._id}
              className="
                group flex flex-col p-6 rounded-2xl
                bg-[#141412] border border-[#2A2A28]
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                transition-all duration-300 ease-in-out
                hover:border-[#D4AF37]/40 hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]
              "
            >
              <Link to={`/board/${board._id}`} className="block group/link">
                <h2 className="text-lg font-bold tracking-wide text-gray-100 group-hover/link:text-[#D4AF37] transition-colors duration-200">
                  {board.title}
                </h2>
              </Link>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Access your real-time workflow 
              </p>

              {/* Action Toolbar */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#2A2A28]/40">
                <Link to={`/board/${board._id}`} className="flex-1">
                  <button
                    className="
                      w-full h-10 px-4
                      text-xs font-bold uppercase tracking-widest
                      bg-[#1A1A18] text-gray-200
                      border border-[#2A2A28] rounded-xl
                      transition-all duration-200
                      hover:bg-[#D4AF37] hover:text-black hover:border-transparent
                    "
                  >
                    Open Board
                  </button>
                </Link>

                <button
                  onClick={() => deleteBoard(board._id)}
                  className="
                    h-10 px-4
                    text-xs font-bold uppercase tracking-widest
                    bg-transparent text-gray-500
                    rounded-xl transition-all duration-200
                    hover:text-red-400 hover:bg-red-950/20
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Clean Empty State */}
        {boards.length === 0 && (
          <div 
            className="
              flex flex-col items-center justify-center p-12 text-center
              bg-[#0D0D0C] border border-dashed border-[#2A2A28] rounded-2xl
              max-w-2xl mx-auto mt-6
            "
          >
            <div className="p-3 bg-[#141412] rounded-full border border-[#2A2A28] mb-4 text-[#D4AF37]/70">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-200 uppercase tracking-wider">
              No Workspaces Configured
            </h3>
            <p className="mt-1.5 text-xs text-gray-400 max-w-sm">
             Add your first board and manage the flow of your projects with our intuitive Kanban system.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
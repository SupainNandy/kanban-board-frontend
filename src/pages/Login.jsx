import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";
import API from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const login = async () => {
    if (isAuthenticating) return;

    setIsAuthenticating(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseToken = await result.user.getIdToken();

      const res = await API.post("/auth/google", {
        token: firebaseToken,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (error) {
      console.error("Authentication vector failure:", error);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div 
      className="
        min-h-screen p-4
        flex items-center justify-center 
        bg-[#070706]
        relative overflow-hidden
      "
    >
      {/* Structural Ambient Background Decorative Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#141412]/50 blur-[120px] pointer-events-none" />

      {/* Luxury Portal Terminal Frame */}
      <div 
        className="
          w-full max-w-[440px] p-8 sm:p-10
          bg-[#0D0D0C] border border-[#2A2A28] rounded-2xl
          shadow-[0_25px_60px_rgba(0,0,0,0.8)]
          z-10
        "
      >
        {/* Core Branding Headers */}
        <div className="text-center mb-10">
          <div className="inline-flex gap-1 h-6 items-end justify-center mb-4">
            <span className="w-1.5 h-4 bg-[#D4AF37]/60 rounded-full" />
            <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full" />
            <span className="w-1.5 h-5 bg-[#D4AF37]/80 rounded-full" />
          </div>

          <h1 
            className="
              text-2xl sm:text-3xl font-extrabold tracking-widest uppercase
              bg-gradient-to-b from-gray-100 via-gray-200 to-[#D4AF37]/90
              bg-clip-text text-transparent
            "
          >
            Kanban Suite
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
            Access your secure project management architecture and distribution systems.
          </p>
        </div>

        {/* Premium Google OAuth Core Interface Control */}
        <button
          onClick={login}
          disabled={isAuthenticating}
          className="
            w-full h-14 px-6
            flex items-center justify-center gap-3
            text-xs font-bold uppercase tracking-widest
            bg-[#141412] text-gray-200 
            border border-[#2A2A28] rounded-xl
            transition-all duration-300 ease-in-out
            hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#1A1A18]
            hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]
            active:scale-[0.98]
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          {isAuthenticating ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Verifying Session...</span>
            </div>
          ) : (
            <>
              {/* Clean Vector Google Symbol Integration */}
              <svg className="w-4 h-4 text-current" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </>
          )}
        </button>

        {/* Minimal Footer Stamp */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-[#555551] font-mono">
          <svg className="w-3 h-3 text-[#D4AF37]/60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>Secure Google Authentication</span>
        </div>
        <div className="mt-2 text-center text-[9px] text-gray-600">
         <span className="text-center text-xs text-gray-500 py-4">© 2026 Kanban Suite. All rights reserved.</span>
          <br />
        <span className="text-center text-[10px] text-gray-600 pb-6">Developed by Supain Nandy.</span>  
        </div> 

      </div>
      
    </div>
  );
};

export default Login;
import React from 'react';
import { Activity, Flame, ShieldAlert, Sparkles, Moon, Sun, Smartphone, Bell } from 'lucide-react';

interface NavbarProps {
  realtimeEnabled: boolean;
  onToggleRealtime: () => void;
  onSimulateBall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  realtimeEnabled,
  onToggleRealtime,
  onSimulateBall
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top Banner for Status */}
      <div className="bg-red-650 px-4 py-1 text-xs font-semibold text-center flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-650 text-white">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>Criclive 2.0 Ultra-Fast Live Engine Active • 0ms Delay SSE Pipeline</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-500/20 font-black text-xl italic tracking-tighter">
            CL
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-white">
                Criclive<span className="text-red-500">.in</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">Live Scores • Ball-by-Ball • AI Insights</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#live-match" className="text-white hover:text-red-450 transition flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Live Matches
          </a>
          <a href="#schedule" className="hover:text-white transition">Schedule</a>
          <a href="#series" className="hover:text-white transition">Series</a>
          <a href="#ai-insights" className="hover:text-white transition flex items-center gap-1 text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-400" />
            AI Predictor
          </a>
          <a href="#rankings" className="hover:text-white transition">Rankings</a>
          <a href="#news" className="hover:text-white transition">News</a>
        </nav>

        {/* Action Controls & Simulator */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSimulateBall}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 active:scale-95 transition"
            title="Simulate Next Delivery"
          >
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            Simulate Next Ball
          </button>

          <button
            onClick={onToggleRealtime}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border transition ${
              realtimeEnabled
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            <Activity className={`w-3.5 h-3.5 ${realtimeEnabled ? 'animate-spin' : ''}`} />
            {realtimeEnabled ? 'Live Stream ON' : 'Live Stream PAUSED'}
          </button>

          <button className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition" title="Get Mobile App">
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

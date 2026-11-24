import React from 'react';
import { Sparkles, BrainCircuit, Target, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { CricketMatch } from '@/types/cricket';

interface AiSidebarProps {
  match: CricketMatch;
}

export const AiSidebar: React.FC<AiSidebarProps> = ({ match }) => {
  return (
    <div className="space-y-6">
      {/* Realtime AI Win Predictor Widget */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Real-Time Win Predictor</h3>
            <p className="text-[11px] text-slate-400">Dynamic Live Match Simulation</p>
          </div>
        </div>

        {/* Win Bar */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-sky-400">{match.team1.teamName}: {match.winProbability.team1}%</span>
            <span className="text-emerald-400">{match.team2.teamName}: {match.winProbability.team2}%</span>
          </div>

          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex p-0.5">
            <div
              className="bg-sky-500 h-full rounded-l-full transition-all duration-700 ease-out"
              style={{ width: `${match.winProbability.team1}%` }}
            />
            <div
              className="bg-emerald-500 h-full rounded-r-full transition-all duration-700 ease-out"
              style={{ width: `${match.winProbability.team2}%` }}
            />
          </div>
        </div>

        {/* Tactical Situation */}
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-xs space-y-2">
          <div className="flex items-start gap-2">
            <Target className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span className="text-slate-300 leading-relaxed">
              <strong className="text-white">Chase Metric:</strong> {match.statusText}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-slate-300 leading-relaxed">
              <strong className="text-white">AI Projected:</strong> {match.aiInsight.projectedScore} total runs
            </span>
          </div>
        </div>
      </div>

      {/* Cricket News / Trending */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-500" />
            Trending Stories
          </h3>
          <span className="text-[11px] font-semibold text-red-400 hover:underline cursor-pointer">View All</span>
        </div>

        <div className="space-y-3.5 divide-y divide-slate-800/70">
          <article className="pt-2 first:pt-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">IPL 2026</span>
            <h4 className="text-xs font-semibold text-slate-200 hover:text-white leading-snug cursor-pointer mt-0.5">
              Mega Auction Retentions: Franchise strategies revealed ahead of deadline
            </h4>
            <span className="text-[10px] text-slate-500">2 hours ago</span>
          </article>

          <article className="pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Analysis</span>
            <h4 className="text-xs font-semibold text-slate-200 hover:text-white leading-snug cursor-pointer mt-0.5">
              How the 360-degree scoop became the modern death-over equalizer
            </h4>
            <span className="text-[10px] text-slate-500">4 hours ago</span>
          </article>

          <article className="pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">ICC Rankings</span>
            <h4 className="text-xs font-semibold text-slate-200 hover:text-white leading-snug cursor-pointer mt-0.5">
              Latest T20I Player Rankings: Major shake-up in top 5 all-rounders
            </h4>
            <span className="text-[10px] text-slate-500">6 hours ago</span>
          </article>
        </div>
      </div>

      {/* Modern Ad Unit Simulation */}
      <div className="bg-slate-900/40 border border-dashed border-slate-800 rounded-xl p-4 text-center">
        <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">Sponsored Slot (CLS Optimized)</span>
        <div className="h-48 w-full bg-slate-950/60 rounded-lg flex flex-col items-center justify-center p-4 border border-slate-800/40">
          <span className="text-xs font-semibold text-slate-400 mb-1">Criclive AdSense Engine</span>
          <span className="text-[11px] text-slate-500">Zero Cumulative Layout Shift guaranteed via pre-allocated aspect ratio container</span>
        </div>
      </div>
    </div>
  );
};

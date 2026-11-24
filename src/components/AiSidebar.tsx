import React from 'react';
import { Sparkles, BrainCircuit, Target, Zap, TrendingUp, HelpCircle, MessageSquare } from 'lucide-react';
import { CricketMatch, NewsItem, FaqItem } from '@/types/cricket';

interface AiSidebarProps {
  match: CricketMatch;
  news: NewsItem[];
  faqs: FaqItem[];
  onSelectNavTab: (tab: string) => void;
}

export const AiSidebar: React.FC<AiSidebarProps> = ({ match, news, faqs, onSelectNavTab }) => {
  return (
    <div className="space-y-6">
      {/* Realtime AI Win Predictor Widget */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 border border-amber-200">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Real-Time Win Predictor</h3>
            <p className="text-[11px] text-slate-500 font-medium">Dynamic Live Simulation</p>
          </div>
        </div>

        {/* Win Bar */}
        <div className="space-y-1.5 mb-4">
          <div className="flex justify-between text-xs font-bold font-mono">
            <span className="text-blue-700">{match.team1.teamName}: {match.winProbability.team1}%</span>
            <span className="text-emerald-700">{match.team2.teamName}: {match.winProbability.team2}%</span>
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200">
            <div
              className="bg-blue-600 h-full rounded-l-full transition-all duration-700 ease-out"
              style={{ width: `${match.winProbability.team1}%` }}
            />
            <div
              className="bg-emerald-500 h-full rounded-r-full transition-all duration-700 ease-out"
              style={{ width: `${match.winProbability.team2}%` }}
            />
          </div>
        </div>

        {/* Tactical Situation */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
          <div className="flex items-start gap-2">
            <Target className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900">Equation:</strong> {match.statusText}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900">Projected:</strong> {match.aiInsight.projectedScore} total runs
            </span>
          </div>
        </div>
      </div>

      {/* Cricket News / Trending */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-red-600" />
            Latest Cricket News
          </h3>
          <button
            onClick={() => onSelectNavTab('news')}
            className="text-[11px] font-bold text-red-600 hover:underline"
          >
            View All
          </button>
        </div>

        <div className="space-y-3 divide-y divide-slate-100">
          {news.slice(0, 4).map((item) => (
            <article key={item.id} className="pt-2.5 first:pt-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                {item.category}
              </span>
              <h4
                onClick={() => onSelectNavTab('news')}
                className="text-xs font-bold text-slate-800 hover:text-red-600 leading-snug cursor-pointer mt-0.5 transition"
              >
                {item.title}
              </h4>
              <span className="text-[10px] text-slate-400 font-medium">{item.timeAgo}</span>
            </article>
          ))}
        </div>
      </div>

      {/* Fan Discussion Quick CTA */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-200 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-slate-900 text-sm">Fans Discussion</h3>
        </div>
        <p className="text-xs text-slate-600 mb-3 leading-relaxed">
          Join the live cricket forum to discuss playing XI, pitch conditions, and toss debates.
        </p>
        <button
          onClick={() => onSelectNavTab('fans')}
          className="w-full py-2 px-3 text-xs font-bold rounded-lg bg-[#05055f] text-white hover:bg-[#0a0a8a] transition shadow-xs"
        >
          Open Chat & Forum
        </button>
      </div>

      {/* Pre-allocated Ad Container (CLS Optimized) */}
      <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 text-center">
        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
          Google AdSense Placement (Zero CLS)
        </span>
        <div className="h-44 w-full bg-white rounded-lg flex flex-col items-center justify-center p-4 border border-slate-200">
          <span className="text-xs font-bold text-slate-500">Criclive High-Speed Ad Unit</span>
          <span className="text-[10px] text-slate-400 mt-1">Pre-rendered layout prevents layout shifts</span>
        </div>
      </div>
    </div>
  );
};

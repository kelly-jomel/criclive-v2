import React from 'react';
import { CricketMatch } from '@/types/cricket';

interface MatchStripProps {
  matches: CricketMatch[];
  selectedMatchId: string;
  onSelectMatch: (id: string) => void;
}

export const MatchStrip: React.FC<MatchStripProps> = ({
  matches,
  selectedMatchId,
  onSelectMatch
}) => {
  return (
    <div className="bg-white border-b border-slate-200 py-3 shadow-xs overflow-x-auto scrollbar-thin">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        {matches.map((m) => {
          const isSelected = m.id === selectedMatchId;
          const isLive = m.status === 'LIVE';

          return (
            <button
              key={m.id}
              onClick={() => onSelectMatch(m.id)}
              className={`shrink-0 min-w-[270px] max-w-[310px] text-left p-3.5 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-red-50/50 border-red-500 shadow-md ring-2 ring-red-500/10'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              {/* Header Status */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500 truncate max-w-[170px]">
                  {m.format} • {m.series.split(' ')[0]}
                </span>
                {isLive ? (
                  <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded-full border border-red-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping"></span>
                    LIVE
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded-full">
                    {m.status}
                  </span>
                )}
              </div>

              {/* Team 1 */}
              <div className="flex items-center justify-between text-xs font-semibold py-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-700 font-bold border border-slate-300">
                    {m.team1.teamCode.slice(0, 2)}
                  </div>
                  <span className={m.currentBattingTeam === 'team1' ? 'text-slate-900 font-bold' : 'text-slate-600'}>
                    {m.team1.teamName}
                  </span>
                </div>
                <span className="text-slate-900 font-mono font-bold">
                  {m.team1.score}/{m.team1.wickets} <span className="text-[10px] font-normal text-slate-500">({m.team1.overs})</span>
                </span>
              </div>

              {/* Team 2 */}
              <div className="flex items-center justify-between text-xs font-semibold py-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-700 font-bold border border-slate-300">
                    {m.team2.teamCode.slice(0, 2)}
                  </div>
                  <span className={m.currentBattingTeam === 'team2' ? 'text-slate-900 font-bold' : 'text-slate-600'}>
                    {m.team2.teamName}
                  </span>
                </div>
                <span className="text-slate-900 font-mono font-bold">
                  {m.team2.score}/{m.team2.wickets} <span className="text-[10px] font-normal text-slate-500">({m.team2.overs})</span>
                </span>
              </div>

              {/* Footer status text */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 text-[11px] text-red-600 font-semibold truncate">
                {m.statusText}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

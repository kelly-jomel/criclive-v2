import React from 'react';
import { CricketMatch } from '@/types/cricket';
import { Radio } from 'lucide-react';

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
    <div className="bg-slate-950 border-b border-slate-800 py-2.5 overflow-x-auto scrollbar-thin">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        {matches.map((m) => {
          const isSelected = m.id === selectedMatchId;
          const isLive = m.status === 'LIVE';

          return (
            <button
              key={m.id}
              onClick={() => onSelectMatch(m.id)}
              className={`shrink-0 min-w-[260px] max-w-[300px] text-left p-3 rounded-xl border transition-all ${
                isSelected
                  ? 'bg-slate-900 border-red-500 shadow-lg shadow-red-500/10'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Header Status */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-400 truncate max-w-[170px]">
                  {m.format} • {m.series.split(' ')[0]}
                </span>
                {isLive ? (
                  <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping"></span>
                    LIVE
                  </span>
                ) : (
                  <span className="text-[10px] font-medium text-slate-400 uppercase">
                    {m.status}
                  </span>
                )}
              </div>

              {/* Team 1 */}
              <div className="flex items-center justify-between text-xs font-semibold py-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-300 font-bold border border-slate-700">
                    {m.team1.teamCode.slice(0, 2)}
                  </div>
                  <span className={m.currentBattingTeam === 'team1' ? 'text-white font-bold' : 'text-slate-300'}>
                    {m.team1.teamName}
                  </span>
                </div>
                <span className="text-white font-mono">
                  {m.team1.score}/{m.team1.wickets} <span className="text-[10px] text-slate-400">({m.team1.overs})</span>
                </span>
              </div>

              {/* Team 2 */}
              <div className="flex items-center justify-between text-xs font-semibold py-0.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-slate-300 font-bold border border-slate-700">
                    {m.team2.teamCode.slice(0, 2)}
                  </div>
                  <span className={m.currentBattingTeam === 'team2' ? 'text-white font-bold' : 'text-slate-300'}>
                    {m.team2.teamName}
                  </span>
                </div>
                <span className="text-white font-mono">
                  {m.team2.score}/{m.team2.wickets} <span className="text-[10px] text-slate-400">({m.team2.overs})</span>
                </span>
              </div>

              {/* Footer status text */}
              <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[11px] text-red-400 font-medium truncate">
                {m.statusText}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

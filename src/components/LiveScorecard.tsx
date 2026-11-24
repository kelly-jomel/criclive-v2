import React, { useState } from 'react';
import { CricketMatch } from '@/types/cricket';
import { Sparkles, TrendingUp, Trophy, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

interface LiveScorecardProps {
  match: CricketMatch;
}

export const LiveScorecard: React.FC<LiveScorecardProps> = ({ match }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'scorecard' | 'commentary' | 'ai'>('live');

  const battingTeam = match[match.currentBattingTeam];
  const bowlingTeam = match[match.currentBattingTeam === 'team1' ? 'team2' : 'team1'];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
      {/* Top Banner / Match Title */}
      <div className="bg-slate-950 p-4 sm:p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-500 border border-red-500/20 uppercase tracking-wider">
                {match.status}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {match.series} • {match.format}
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              {match.title}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">{match.venue} • {match.toss}</p>
          </div>

          {/* Quick Win Predictor Gauge */}
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl sm:w-64">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="flex items-center gap-1 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                AI Win Prob
              </span>
              <span className="text-emerald-400 font-mono">{match.winProbability.team2}% {match.team2.teamCode}</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
              <div
                className="bg-sky-500 h-full transition-all duration-500"
                style={{ width: `${match.winProbability.team1}%` }}
                title={`${match.team1.teamCode}: ${match.winProbability.team1}%`}
              />
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${match.winProbability.team2}%` }}
                title={`${match.team2.teamCode}: ${match.winProbability.team2}%`}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>{match.team1.teamCode} {match.winProbability.team1}%</span>
              <span>{match.team2.teamCode} {match.winProbability.team2}%</span>
            </div>
          </div>
        </div>

        {/* Live Score Headline */}
        <div className="mt-6 flex flex-wrap items-baseline gap-4 sm:gap-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <div className="text-xs font-medium text-slate-400 mb-0.5">
              {battingTeam.teamName} (Batting)
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                {battingTeam.score}/{battingTeam.wickets}
              </span>
              <span className="text-sm font-semibold text-slate-400">
                ({battingTeam.overs} ov)
              </span>
            </div>
          </div>

          <div className="sm:border-l sm:border-slate-800 sm:pl-6">
            <div className="text-xs font-medium text-slate-400 mb-0.5">Current Run Rate</div>
            <div className="text-lg font-bold text-amber-400 font-mono">{battingTeam.runRate}</div>
          </div>

          {match.requiredRunRate && (
            <div className="sm:border-l sm:border-slate-800 sm:pl-6">
              <div className="text-xs font-medium text-slate-400 mb-0.5">Required Run Rate</div>
              <div className="text-lg font-bold text-red-400 font-mono">{match.requiredRunRate}</div>
            </div>
          )}

          {/* Recent balls pill */}
          <div className="w-full sm:w-auto sm:ml-auto flex items-center gap-2 pt-2 sm:pt-0">
            <span className="text-xs font-semibold text-slate-400">This Over:</span>
            <div className="flex items-center gap-1.5">
              {match.recentBalls.map((ball, idx) => {
                let badgeClass = 'bg-slate-800 text-slate-200 border-slate-700';
                if (ball === '4') badgeClass = 'bg-blue-600/20 text-blue-400 border-blue-500/40 font-bold';
                if (ball === '6') badgeClass = 'bg-purple-600/30 text-purple-300 border-purple-500/50 font-black';
                if (ball === 'W') badgeClass = 'bg-red-600/30 text-red-400 border-red-500/50 font-black animate-bounce';

                return (
                  <span
                    key={idx}
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-mono border ${badgeClass}`}
                  >
                    {ball}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Equation / Target Status */}
        <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400">
          <Flame className="w-4 h-4 text-emerald-400" />
          <span>{match.statusText}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/50 text-xs sm:text-sm font-semibold">
        <button
          onClick={() => setActiveTab('live')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'live'
              ? 'border-red-500 text-white bg-slate-900/60'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Live Center
        </button>
        <button
          onClick={() => setActiveTab('scorecard')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'scorecard'
              ? 'border-red-500 text-white bg-slate-900/60'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Full Scorecard
        </button>
        <button
          onClick={() => setActiveTab('commentary')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'commentary'
              ? 'border-red-500 text-white bg-slate-900/60'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Ball by Ball
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'ai'
              ? 'border-amber-400 text-amber-400 bg-amber-500/10'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          AI Cricket Insights
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6">
        {activeTab === 'live' && (
          <div className="space-y-6">
            {/* Batter Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Batting</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                      <th className="py-2">Batter</th>
                      <th className="py-2 text-right">R</th>
                      <th className="py-2 text-right">B</th>
                      <th className="py-2 text-right">4s</th>
                      <th className="py-2 text-right">6s</th>
                      <th className="py-2 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {battingTeam.batting?.filter(b => !b.dismissal || b.isStriker).map((batter) => (
                      <tr key={batter.id} className="hover:bg-slate-800/30">
                        <td className="py-2.5 font-medium text-white flex items-center gap-1.5">
                          {batter.name}
                          {batter.isStriker && (
                            <span className="text-[10px] text-amber-400 font-bold px-1 rounded bg-amber-400/10 border border-amber-400/20">
                              *
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 text-right font-bold text-white font-mono">{batter.runs}</td>
                        <td className="py-2.5 text-right text-slate-400 font-mono">{batter.balls}</td>
                        <td className="py-2.5 text-right text-slate-300 font-mono">{batter.fours}</td>
                        <td className="py-2.5 text-right text-slate-300 font-mono">{batter.sixes}</td>
                        <td className="py-2.5 text-right text-amber-400 font-mono font-semibold">{batter.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bowler Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Bowling</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                      <th className="py-2">Bowler</th>
                      <th className="py-2 text-right">O</th>
                      <th className="py-2 text-right">M</th>
                      <th className="py-2 text-right">R</th>
                      <th className="py-2 text-right">W</th>
                      <th className="py-2 text-right">ECON</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {bowlingTeam.bowling?.slice(0, 3).map((bowler) => (
                      <tr key={bowler.id} className="hover:bg-slate-800/30">
                        <td className="py-2.5 font-medium text-white flex items-center gap-1.5">
                          {bowler.name}
                          {bowler.isCurrent && (
                            <span className="text-[10px] text-red-400 font-bold px-1 rounded bg-red-400/10 border border-red-400/20">
                              Bowling
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{bowler.overs}</td>
                        <td className="py-2.5 text-right font-mono text-slate-400">{bowler.maidens}</td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{bowler.runs}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">{bowler.wickets}</td>
                        <td className="py-2.5 text-right font-mono text-emerald-400">{bowler.economy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Latest Ball Commentary Snippet */}
            {match.recentEvents[0] && (
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono font-bold text-red-400 text-xs">
                    {match.recentEvents[0].over}.{match.recentEvents[0].ball}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {match.recentEvents[0].bowler} to {match.recentEvents[0].batter}
                  </span>
                  <span className="ml-auto text-[10px] text-slate-400">
                    {match.recentEvents[0].timestamp}
                  </span>
                </div>
                <p className="text-sm text-slate-200">
                  {match.recentEvents[0].commentary}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'scorecard' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base">
                  {match.team1.teamName} Innings ({match.team1.score}/{match.team1.wickets} in {match.team1.overs} ov)
                </h3>
                <span className="text-xs font-mono text-amber-400 font-bold">RR: {match.team1.runRate}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                      <th className="py-2">Batter</th>
                      <th className="py-2">Dismissal</th>
                      <th className="py-2 text-right">R</th>
                      <th className="py-2 text-right">B</th>
                      <th className="py-2 text-right">4s</th>
                      <th className="py-2 text-right">6s</th>
                      <th className="py-2 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {match.team1.batting?.map((b) => (
                      <tr key={b.id}>
                        <td className="py-2.5 font-bold text-white">{b.name}</td>
                        <td className="py-2.5 text-xs text-slate-400">{b.dismissal || 'not out'}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">{b.runs}</td>
                        <td className="py-2.5 text-right font-mono text-slate-400">{b.balls}</td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{b.fours}</td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{b.sixes}</td>
                        <td className="py-2.5 text-right font-mono text-amber-400">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base">
                  {match.team2.teamName} Innings ({match.team2.score}/{match.team2.wickets} in {match.team2.overs} ov)
                </h3>
                <span className="text-xs font-mono text-amber-400 font-bold">RR: {match.team2.runRate}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                      <th className="py-2">Batter</th>
                      <th className="py-2">Dismissal</th>
                      <th className="py-2 text-right">R</th>
                      <th className="py-2 text-right">B</th>
                      <th className="py-2 text-right">4s</th>
                      <th className="py-2 text-right">6s</th>
                      <th className="py-2 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {match.team2.batting?.map((b) => (
                      <tr key={b.id}>
                        <td className="py-2.5 font-bold text-white">{b.name}</td>
                        <td className="py-2.5 text-xs text-slate-400">{b.dismissal || (b.isStriker ? 'batting *' : 'batting')}</td>
                        <td className="py-2.5 text-right font-mono font-bold text-white">{b.runs}</td>
                        <td className="py-2.5 text-right font-mono text-slate-400">{b.balls}</td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{b.fours}</td>
                        <td className="py-2.5 text-right font-mono text-slate-300">{b.sixes}</td>
                        <td className="py-2.5 text-right font-mono text-amber-400">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commentary' && (
          <div className="space-y-4">
            {match.recentEvents.map((ev) => (
              <div key={ev.id} className="p-3 sm:p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-mono font-bold text-white border border-slate-700">
                      {ev.over}.{ev.ball}
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      {ev.bowler} to {ev.batter}
                    </span>
                  </div>

                  {ev.isWicket && (
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-red-600 text-white">
                      WICKET
                    </span>
                  )}
                  {ev.boundaryType === 'SIX' && (
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-purple-600 text-white">
                      SIX
                    </span>
                  )}
                  {ev.boundaryType === 'FOUR' && (
                    <span className="text-xs font-black px-2 py-0.5 rounded bg-blue-600 text-white">
                      FOUR
                    </span>
                  )}
                  {!ev.isBoundary && !ev.isWicket && (
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {ev.runs} run{ev.runs !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{ev.commentary}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Criclive AI Match Analysis</h3>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-4">
                {match.aiInsight.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-800">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Projected Total</span>
                  <span className="text-xl font-mono font-bold text-amber-400">{match.aiInsight.projectedScore}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Key Turning Point</span>
                  <span className="text-xs text-slate-300 font-medium line-clamp-2">{match.aiInsight.keyTurningPoint}</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">Tactical Tip</span>
                  <span className="text-xs text-emerald-400 font-medium line-clamp-2">{match.aiInsight.tacticalTip}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

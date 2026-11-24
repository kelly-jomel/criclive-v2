import React, { useState } from 'react';
import { CricketMatch } from '@/types/cricket';
import { Sparkles, TrendingUp, Flame } from 'lucide-react';

interface LiveScorecardProps {
  match: CricketMatch;
}

export const LiveScorecard: React.FC<LiveScorecardProps> = ({ match }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'scorecard' | 'commentary' | 'ai'>('live');

  const battingTeam = match[match.currentBattingTeam];
  const bowlingTeam = match[match.currentBattingTeam === 'team1' ? 'team2' : 'team1'];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top Banner / Match Title */}
      <div className="bg-slate-50/80 p-4 sm:p-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 border border-red-200 uppercase tracking-wider">
                {match.status}
              </span>
              <span className="text-xs font-semibold text-slate-600">
                {match.series} • {match.format}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {match.title}
            </h1>
            <p className="text-xs text-slate-500 mt-1">{match.venue} • {match.toss}</p>
          </div>

          {/* Quick Win Predictor Gauge */}
          <div className="bg-white border border-slate-200 p-3 rounded-xl sm:w-64 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="flex items-center gap-1 text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                AI Win Prob
              </span>
              <span className="text-emerald-700 font-mono font-bold">{match.winProbability.team2}% {match.team2.teamCode}</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
              <div
                className="bg-blue-600 h-full transition-all duration-500"
                style={{ width: `${match.winProbability.team1}%` }}
                title={`${match.team1.teamCode}: ${match.winProbability.team1}%`}
              />
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${match.winProbability.team2}%` }}
                title={`${match.team2.teamCode}: ${match.winProbability.team2}%`}
              />
            </div>
            <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono font-medium">
              <span>{match.team1.teamCode} {match.winProbability.team1}%</span>
              <span>{match.team2.teamCode} {match.winProbability.team2}%</span>
            </div>
          </div>
        </div>

        {/* Live Score Headline */}
        <div className="mt-5 flex flex-wrap items-baseline gap-4 sm:gap-6 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">
              {battingTeam.teamName} (Batting)
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                {battingTeam.score}/{battingTeam.wickets}
              </span>
              <span className="text-sm font-bold text-slate-500">
                ({battingTeam.overs} ov)
              </span>
            </div>
          </div>

          <div className="sm:border-l sm:border-slate-200 sm:pl-6">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Current RR</div>
            <div className="text-lg font-bold text-slate-900 font-mono">{battingTeam.runRate}</div>
          </div>

          {match.requiredRunRate && (
            <div className="sm:border-l sm:border-slate-200 sm:pl-6">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Req RR</div>
              <div className="text-lg font-bold text-red-600 font-mono">{match.requiredRunRate}</div>
            </div>
          )}

          {/* Recent balls pill */}
          <div className="w-full sm:w-auto sm:ml-auto flex items-center gap-2 pt-2 sm:pt-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">This Over:</span>
            <div className="flex items-center gap-1.5">
              {match.recentBalls.map((ball, idx) => {
                let badgeClass = 'bg-slate-100 text-slate-700 border-slate-300 font-medium';
                if (ball === '4') badgeClass = 'bg-blue-600 text-white border-blue-700 font-bold';
                if (ball === '6') badgeClass = 'bg-purple-600 text-white border-purple-700 font-black';
                if (ball === 'W') badgeClass = 'bg-red-600 text-white border-red-700 font-black animate-bounce';

                return (
                  <span
                    key={idx}
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-mono border shadow-2xs ${badgeClass}`}
                  >
                    {ball}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Equation / Target Status */}
        <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700">
          <Flame className="w-4 h-4 text-emerald-600" />
          <span>{match.statusText}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold">
        <button
          onClick={() => setActiveTab('live')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'live'
              ? 'border-red-600 text-red-600 bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Live Center
        </button>
        <button
          onClick={() => setActiveTab('scorecard')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'scorecard'
              ? 'border-red-600 text-red-600 bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Full Scorecard
        </button>
        <button
          onClick={() => setActiveTab('commentary')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition ${
            activeTab === 'commentary'
              ? 'border-red-600 text-red-600 bg-white'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Ball by Ball
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-4 sm:px-6 py-3 border-b-2 transition flex items-center gap-1.5 ${
            activeTab === 'ai'
              ? 'border-amber-500 text-amber-700 bg-amber-50/60'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          AI Match Insights
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-6 bg-white">
        {activeTab === 'live' && (
          <div className="space-y-6">
            {/* Batter Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Batting</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Batter</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">B</th>
                      <th className="py-2.5 px-3 text-right">4s</th>
                      <th className="py-2.5 px-3 text-right">6s</th>
                      <th className="py-2.5 px-3 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {battingTeam.batting?.filter(b => !b.dismissal || b.isStriker).map((batter) => (
                      <tr key={batter.id} className="hover:bg-slate-50/60">
                        <td className="py-2.5 px-3 font-semibold text-slate-900 flex items-center gap-1.5">
                          {batter.name}
                          {batter.isStriker && (
                            <span className="text-[10px] text-amber-800 font-bold px-1.5 py-0.2 rounded bg-amber-100 border border-amber-300">
                              * batting
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-right font-bold text-slate-900 font-mono">{batter.runs}</td>
                        <td className="py-2.5 px-3 text-right text-slate-500 font-mono">{batter.balls}</td>
                        <td className="py-2.5 px-3 text-right text-slate-700 font-mono">{batter.fours}</td>
                        <td className="py-2.5 px-3 text-right text-slate-700 font-mono">{batter.sixes}</td>
                        <td className="py-2.5 px-3 text-right text-emerald-700 font-mono font-bold">{batter.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bowler Table */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Bowling</h3>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Bowler</th>
                      <th className="py-2.5 px-3 text-right">O</th>
                      <th className="py-2.5 px-3 text-right">M</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">W</th>
                      <th className="py-2.5 px-3 text-right">ECON</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {bowlingTeam.bowling?.slice(0, 3).map((bowler) => (
                      <tr key={bowler.id} className="hover:bg-slate-50/60">
                        <td className="py-2.5 px-3 font-semibold text-slate-900 flex items-center gap-1.5">
                          {bowler.name}
                          {bowler.isCurrent && (
                            <span className="text-[10px] text-red-700 font-bold px-1.5 py-0.2 rounded bg-red-100 border border-red-200">
                              Bowling
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{bowler.overs}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-500">{bowler.maidens}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{bowler.runs}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">{bowler.wickets}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-emerald-700 font-bold">{bowler.economy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Latest Ball Commentary Snippet */}
            {match.recentEvents[0] && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {match.recentEvents[0].over}.{match.recentEvents[0].ball}
                  </span>
                  <span className="text-xs text-slate-600 font-semibold">
                    {match.recentEvents[0].bowler} to {match.recentEvents[0].batter}
                  </span>
                  <span className="ml-auto text-[10px] text-slate-500 font-medium">
                    {match.recentEvents[0].timestamp}
                  </span>
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {match.recentEvents[0].commentary}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'scorecard' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-base">
                  {match.team1.teamName} Innings ({match.team1.score}/{match.team1.wickets} in {match.team1.overs} ov)
                </h3>
                <span className="text-xs font-mono text-slate-700 font-bold">RR: {match.team1.runRate}</span>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Batter</th>
                      <th className="py-2.5 px-3">Dismissal</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">B</th>
                      <th className="py-2.5 px-3 text-right">4s</th>
                      <th className="py-2.5 px-3 text-right">6s</th>
                      <th className="py-2.5 px-3 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {match.team1.batting?.map((b) => (
                      <tr key={b.id}>
                        <td className="py-2.5 px-3 font-bold text-slate-900">{b.name}</td>
                        <td className="py-2.5 px-3 text-xs text-slate-500">{b.dismissal || 'not out'}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">{b.runs}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-500">{b.balls}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{b.fours}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{b.sixes}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-emerald-700 font-bold">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200">
                <h3 className="font-bold text-slate-900 text-base">
                  {match.team2.teamName} Innings ({match.team2.score}/{match.team2.wickets} in {match.team2.overs} ov)
                </h3>
                <span className="text-xs font-mono text-slate-700 font-bold">RR: {match.team2.runRate}</span>
              </div>
              <div className="overflow-x-auto border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Batter</th>
                      <th className="py-2.5 px-3">Dismissal</th>
                      <th className="py-2.5 px-3 text-right">R</th>
                      <th className="py-2.5 px-3 text-right">B</th>
                      <th className="py-2.5 px-3 text-right">4s</th>
                      <th className="py-2.5 px-3 text-right">6s</th>
                      <th className="py-2.5 px-3 text-right">SR</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {match.team2.batting?.map((b) => (
                      <tr key={b.id}>
                        <td className="py-2.5 px-3 font-bold text-slate-900">{b.name}</td>
                        <td className="py-2.5 px-3 text-xs text-slate-500">{b.dismissal || (b.isStriker ? 'batting *' : 'batting')}</td>
                        <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-900">{b.runs}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-500">{b.balls}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{b.fours}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-slate-700">{b.sixes}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-emerald-700 font-bold">{b.strikeRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commentary' && (
          <div className="space-y-3">
            {match.recentEvents.map((ev) => (
              <div key={ev.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-xs font-mono font-bold">
                      {ev.over}.{ev.ball}
                    </span>
                    <span className="text-xs font-bold text-slate-700">
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
                    <span className="text-xs font-mono font-bold text-slate-600">
                      {ev.runs} run{ev.runs !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">{ev.commentary}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="text-base font-bold text-slate-900">Criclive AI Match Analysis</h3>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed mb-4 font-medium">
                {match.aiInsight.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-amber-200">
                <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Projected Total</span>
                  <span className="text-2xl font-mono font-black text-amber-700">{match.aiInsight.projectedScore}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Key Turning Point</span>
                  <span className="text-xs text-slate-800 font-medium line-clamp-2">{match.aiInsight.keyTurningPoint}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-amber-200 shadow-2xs">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Tactical Tip</span>
                  <span className="text-xs text-emerald-800 font-semibold line-clamp-2">{match.aiInsight.tacticalTip}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

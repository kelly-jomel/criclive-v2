'use client';

import React, { useState, useEffect } from 'react';
import { INITIAL_MATCHES } from '@/lib/mockCricketData';
import { simulateNextBall } from '@/lib/matchEngine';
import { CricketMatch } from '@/types/cricket';
import { Navbar } from '@/components/Navbar';
import { MatchStrip } from '@/components/MatchStrip';
import { LiveScorecard } from '@/components/LiveScorecard';
import { AiSidebar } from '@/components/AiSidebar';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [matches, setMatches] = useState<CricketMatch[]>(INITIAL_MATCHES);
  const [selectedMatchId, setSelectedMatchId] = useState<string>(INITIAL_MATCHES[0].id);
  const [realtimeActive, setRealtimeActive] = useState<boolean>(true);

  // Selected match reference
  const currentMatch = matches.find((m) => m.id === selectedMatchId) || matches[0];

  // Manual trigger for ball simulation
  const handleSimulateNextBall = () => {
    setMatches((prevMatches) =>
      prevMatches.map((m) => (m.id === selectedMatchId ? simulateNextBall(m) : m))
    );
  };

  // Automated SSE/WebSocket Real-time simulation stream
  useEffect(() => {
    if (!realtimeActive) return;

    const interval = setInterval(() => {
      setMatches((prevMatches) =>
        prevMatches.map((m) => {
          if (m.id === selectedMatchId && m.status === 'LIVE') {
            return simulateNextBall(m);
          }
          return m;
        })
      );
    }, 4500); // New ball every 4.5 seconds to simulate real match pace

    return () => clearInterval(interval);
  }, [realtimeActive, selectedMatchId]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Dynamic Header */}
      <Navbar
        realtimeEnabled={realtimeActive}
        onToggleRealtime={() => setRealtimeActive(!realtimeActive)}
        onSimulateBall={handleSimulateNextBall}
      />

      {/* Horizontal Match Carousel */}
      <MatchStrip
        matches={matches}
        selectedMatchId={selectedMatchId}
        onSelectMatch={(id) => setSelectedMatchId(id)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main 2-Column Live Scorecard */}
          <div className="lg:col-span-2 space-y-6">
            <LiveScorecard match={currentMatch} />
          </div>

          {/* Right Column: AI Insights, Trending & Ads */}
          <div className="lg:col-span-1">
            <AiSidebar match={currentMatch} />
          </div>
        </div>
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}

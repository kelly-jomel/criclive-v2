'use client';

import React, { useState, useEffect } from 'react';
import { INITIAL_MATCHES, RECENT_MATCHES, UPCOMING_MATCHES, LATEST_NEWS, COMMUNITY_DISCUSSIONS, FAQS } from '@/lib/mockCricketData';
import { simulateNextBall } from '@/lib/matchEngine';
import { CricketMatch } from '@/types/cricket';
import { Navbar } from '@/components/Navbar';
import { MatchStrip } from '@/components/MatchStrip';
import { LiveScorecard } from '@/components/LiveScorecard';
import { AiSidebar } from '@/components/AiSidebar';
import { ContentSectionView } from '@/components/ContentSectionView';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [matches, setMatches] = useState<CricketMatch[]>(INITIAL_MATCHES);
  const [selectedMatchId, setSelectedMatchId] = useState<string>(INITIAL_MATCHES[0].id);
  const [realtimeActive, setRealtimeActive] = useState<boolean>(true);
  const [activeNavTab, setActiveNavTab] = useState<string>('home');

  // Currently selected match object
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
    }, 4500); // Deliver new ball every 4.5 seconds

    return () => clearInterval(interval);
  }, [realtimeActive, selectedMatchId]);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans">
      {/* 1. Header & Navigation (Red + Navy branding from Criclive) */}
      <Navbar
        realtimeEnabled={realtimeActive}
        onToggleRealtime={() => setRealtimeActive(!realtimeActive)}
        onSimulateBall={handleSimulateNextBall}
        activeNavTab={activeNavTab}
        onSelectNavTab={(tab) => {
          setActiveNavTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 2. Horizontal Live Match Strip */}
      <MatchStrip
        matches={matches}
        selectedMatchId={selectedMatchId}
        onSelectMatch={(id) => setSelectedMatchId(id)}
      />

      {/* 3. Hero Introduction & Share Banner (Preserved from Criclive.in) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2 w-full">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs text-center">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Live Cricket Scores, Match Schedules & Latest News
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl mx-auto font-medium">
            <strong className="text-red-600">Criclive.in:</strong> Get Live Cricket Scores, Commentary, Cricket News, Player Interviews, Fan Discussion, Cricket Highlights, and Shorts.
          </p>

          {/* Social Share Strip & Top Live Match Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://criclive.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-xs"
            >
              Share on Facebook
            </a>
            <a
              href="https://x.com/intent/tweet?url=https://criclive.in/&text=Live%20Cricket%20Scores%20on%20Criclive.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold transition shadow-xs"
            >
              Share on 𝕏
            </a>
            <a
              href="https://wa.me/?text=Live%20Cricket%20Scores%20on%20Criclive.in%20https://criclive.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
            >
              Share on WhatsApp
            </a>
          </div>

          {/* Top colored match buttons (Preserved from original Criclive) */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2.5">
            {matches.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMatchId(m.id)}
                className={`px-3 py-2 rounded-xl text-white text-xs font-bold transition shadow-2xs hover:opacity-90 flex items-center gap-1.5 ${
                  m.color === 'charcoal' ? 'btn-charcoal' : m.color === 'orange' ? 'btn-orange' : 'btn-blue'
                } ${selectedMatchId === m.id ? 'ring-2 ring-offset-2 ring-slate-800' : ''}`}
              >
                <span>{m.title}</span>
                <span className="text-[10px] bg-red-600 text-white px-1.5 py-0.2 rounded-full font-black animate-pulse">
                  LIVE
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Main Body Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full flex-1 space-y-10">
        {/* Live Match Center + AI Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LiveScorecard match={currentMatch} />
          </div>
          <div className="lg:col-span-1">
            <AiSidebar
              match={currentMatch}
              news={LATEST_NEWS}
              faqs={FAQS}
              onSelectNavTab={(tab) => setActiveNavTab(tab)}
            />
          </div>
        </div>

        {/* Dynamic Content Sections: Recent, Upcoming, News, Videos, Fans, FAQs */}
        <ContentSectionView
          activeTab={activeNavTab}
          recentMatches={RECENT_MATCHES}
          upcomingMatches={UPCOMING_MATCHES}
          news={LATEST_NEWS}
          discussions={COMMUNITY_DISCUSSIONS}
          faqs={FAQS}
          liveMatches={matches}
          onSelectMatch={(id) => setSelectedMatchId(id)}
        />
      </main>

      {/* 5. Clean White Theme Footer */}
      <Footer onSelectNavTab={(tab) => setActiveNavTab(tab)} />
    </div>
  );
}

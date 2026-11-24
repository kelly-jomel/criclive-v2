import React, { useState } from 'react';
import { Flame, Activity, Search, Menu, X, ChevronDown, Sparkles, MessageSquare, Video, Film, Share2 } from 'lucide-react';

interface NavbarProps {
  realtimeEnabled: boolean;
  onToggleRealtime: () => void;
  onSimulateBall: () => void;
  activeNavTab: string;
  onSelectNavTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  realtimeEnabled,
  onToggleRealtime,
  onSimulateBall,
  activeNavTab,
  onSelectNavTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'matches', label: 'Live Cricket Matches' },
    { id: 'series', label: 'Cricket Series' },
    { id: 'news', label: 'Cricket News' },
    { id: 'shorts', label: 'Cricket Shorts' },
    { id: 'videos', label: 'Cricket Videos' },
    { id: 'fans', label: 'Fans Discussion' },
    { id: 'ai', label: 'AI Predictor' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Red Header Branding (Original Criclive Identity) */}
      <div className="bg-[#cd0808] text-white py-3 px-4 sm:px-8 border-b border-red-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectNavTab('home')}
              className="text-left font-black tracking-tight text-2xl sm:text-3xl text-white hover:opacity-95 transition"
            >
              Criclive<span className="text-amber-300">.in</span>
            </button>
            <span className="hidden md:inline-block text-xs bg-red-800 text-red-100 font-semibold px-2 py-0.5 rounded-full">
              Ultra-Fast 0ms Live Updates
            </span>
          </div>

          {/* Quick Engine Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onSimulateBall}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-white/20 hover:bg-white/30 text-white transition active:scale-95 border border-white/30"
              title="Deliver Next Ball"
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Simulate</span> Next Ball
            </button>

            <button
              onClick={onToggleRealtime}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition ${
                realtimeEnabled
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-red-800 text-red-200'
              }`}
            >
              <Activity className={`w-3.5 h-3.5 ${realtimeEnabled ? 'animate-spin' : ''}`} />
              <span className="hidden xs:inline">{realtimeEnabled ? 'Live Stream ON' : 'Paused'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navy Navigation Bar (Preserved from Criclive.in) */}
      <nav className="bg-[#05055f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-12">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectNavTab(item.id)}
                className={`px-3 py-2 rounded-md transition ${
                  activeNavTab === item.id
                    ? 'bg-[#0a0a8a] text-amber-300 shadow-inner'
                    : 'text-slate-100 hover:bg-[#070763] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-slate-100 hover:bg-[#070763] hover:text-white transition"
              >
                More <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {moreDropdownOpen && (
                <div className="absolute left-0 mt-1 w-44 bg-[#070763] rounded-lg shadow-xl border border-indigo-900/60 py-1.5 z-50 text-xs font-medium">
                  <button
                    onClick={() => { onSelectNavTab('about'); setMoreDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#0a0a8a] text-slate-200 hover:text-white"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => { onSelectNavTab('contact'); setMoreDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#0a0a8a] text-slate-200 hover:text-white"
                  >
                    Contact Us
                  </button>
                  <button
                    onClick={() => { onSelectNavTab('faq'); setMoreDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#0a0a8a] text-slate-200 hover:text-white"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => { onSelectNavTab('privacy'); setMoreDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#0a0a8a] text-slate-200 hover:text-white"
                  >
                    Privacy Policy
                  </button>
                  <button
                    onClick={() => { onSelectNavTab('terms'); setMoreDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-[#0a0a8a] text-slate-200 hover:text-white"
                  >
                    Terms & Conditions
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Nav Right: Social Icons and Search */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/share/14WMVSrab9B/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://x.com/criclive_in"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition"
              title="X (Twitter)"
            >
              𝕏
            </a>
            <button
              onClick={() => onSelectNavTab('search')}
              className="h-8 w-8 rounded-full bg-white text-[#05055f] hover:bg-slate-200 flex items-center justify-center transition"
              title="Search cricket matches and news"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070763] px-4 pt-2 pb-4 border-t border-indigo-900/60 space-y-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectNavTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeNavTab === item.id
                    ? 'bg-[#0a0a8a] text-amber-300 font-bold'
                    : 'text-slate-200 hover:bg-[#0a0a8a]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-indigo-800 text-xs text-slate-400 space-y-1">
              <button onClick={() => { onSelectNavTab('about'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-1.5 hover:text-white">About Us</button>
              <button onClick={() => { onSelectNavTab('contact'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-1.5 hover:text-white">Contact Us</button>
              <button onClick={() => { onSelectNavTab('faq'); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-1.5 hover:text-white">FAQ</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

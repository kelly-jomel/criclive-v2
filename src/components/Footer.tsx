import React from 'react';
import { Smartphone, Bell, Zap, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs mt-16">
      {/* App Download Call to action */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-red-950/20 via-slate-900 to-slate-950 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Experience Criclive On The Go</h3>
              <p className="text-slate-400 text-xs">Instant ball-by-ball push notifications and live dynamic lock-screen widgets.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition flex items-center gap-2">
              <span className="font-semibold text-xs">Download Android APK</span>
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition flex items-center gap-2">
              <span className="font-semibold text-xs">iOS App Store</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Live Matches</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Live Scores</a></li>
            <li><a href="#" className="hover:text-white transition">Upcoming Fixtures</a></li>
            <li><a href="#" className="hover:text-white transition">Recently Completed</a></li>
            <li><a href="#" className="hover:text-white transition">Domestic & T20 Leagues</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Features</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">AI Match Predictor</a></li>
            <li><a href="#" className="hover:text-white transition">Ball-by-Ball Commentary</a></li>
            <li><a href="#" className="hover:text-white transition">ICC World Rankings</a></li>
            <li><a href="#" className="hover:text-white transition">Points Table</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">Architecture</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Next.js 15 App Router</a></li>
            <li><a href="#" className="hover:text-white transition">WebSocket / SSE Engine</a></li>
            <li><a href="#" className="hover:text-white transition">High-Performance Redis Caching</a></li>
            <li><a href="#" className="hover:text-white transition">SEO & Schema.org JSON-LD</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-xs">About Criclive.in</h4>
          <p className="text-slate-400 text-xs leading-relaxed">
            Criclive.in delivers live cricket scores, in-depth match stats, real-time commentary, and AI-driven match insights.
          </p>
          <div className="mt-3 flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px] font-semibold">100% Secure & Optimized</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 text-center text-slate-500 text-xs">
        © 2026 Criclive.in. Modernized High-Performance Cricket Platform.
      </div>
    </footer>
  );
};

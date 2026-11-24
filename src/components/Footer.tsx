import React from 'react';
import { Smartphone, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectNavTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNavTab }) => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs mt-16">
      {/* App Download Call to Action (White Theme) */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-red-50 via-white to-slate-50 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-[#cd0808] flex items-center justify-center text-white shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900">Experience Criclive On The Go</h3>
              <p className="text-slate-600 text-xs font-medium">Instant ball-by-ball push notifications and live dynamic widgets.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 rounded-xl bg-[#05055f] hover:bg-[#0a0a8a] text-white font-bold transition flex items-center gap-2 shadow-xs">
              <span className="text-xs">Download Android APK</span>
            </button>
            <button className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition flex items-center gap-2 shadow-xs">
              <span className="text-xs">iOS App Store</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">Live Matches</h4>
          <ul className="space-y-2">
            <li><button onClick={() => onSelectNavTab('matches')} className="hover:text-red-600 transition">Live Scores</button></li>
            <li><button onClick={() => onSelectNavTab('matches')} className="hover:text-red-600 transition">Upcoming Fixtures</button></li>
            <li><button onClick={() => onSelectNavTab('matches')} className="hover:text-red-600 transition">Recent Results</button></li>
            <li><button onClick={() => onSelectNavTab('series')} className="hover:text-red-600 transition">Domestic & T20 Leagues</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">Features</h4>
          <ul className="space-y-2">
            <li><button onClick={() => onSelectNavTab('ai')} className="hover:text-red-600 transition">AI Match Predictor</button></li>
            <li><button onClick={() => onSelectNavTab('fans')} className="hover:text-red-600 transition">Fans Discussion Forum</button></li>
            <li><button onClick={() => onSelectNavTab('news')} className="hover:text-red-600 transition">Latest Cricket News</button></li>
            <li><button onClick={() => onSelectNavTab('videos')} className="hover:text-red-600 transition">Shorts & Highlights</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">Information</h4>
          <ul className="space-y-2">
            <li><button onClick={() => onSelectNavTab('about')} className="hover:text-red-600 transition">About Us</button></li>
            <li><button onClick={() => onSelectNavTab('contact')} className="hover:text-red-600 transition">Contact Us</button></li>
            <li><button onClick={() => onSelectNavTab('faq')} className="hover:text-red-600 transition">FAQ - Criclive.in</button></li>
            <li><button onClick={() => onSelectNavTab('privacy')} className="hover:text-red-600 transition">Privacy Policy</button></li>
            <li><button onClick={() => onSelectNavTab('terms')} className="hover:text-red-600 transition">Terms & Conditions</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-slate-900 font-bold mb-3 uppercase tracking-wider text-xs">About Criclive.in</h4>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Criclive.in delivers live cricket scores, in-depth match stats, real-time commentary, breaking news, fan discussions, and AI-driven match insights.
          </p>
          <div className="mt-3 flex items-center gap-2 text-emerald-700">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px] font-bold">100% Free & Secure Platform</span>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-slate-500 text-xs bg-slate-50">
        Copyright © 2026 | Criclive.in • Modern High-Performance Cricket Platform.
      </div>
    </footer>
  );
};

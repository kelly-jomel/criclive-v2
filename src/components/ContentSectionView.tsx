import React, { useState } from 'react';
import { MatchListItem, NewsItem, DiscussionPost, FaqItem, CricketMatch } from '@/types/cricket';
import { Calendar, CheckCircle2, ChevronRight, HelpCircle, MessageSquare, ThumbsUp, Send, Share2, Search, ExternalLink, Globe } from 'lucide-react';

interface ContentSectionViewProps {
  activeTab: string;
  recentMatches: MatchListItem[];
  upcomingMatches: MatchListItem[];
  news: NewsItem[];
  discussions: DiscussionPost[];
  faqs: FaqItem[];
  liveMatches: CricketMatch[];
  onSelectMatch: (id: string) => void;
}

export const ContentSectionView: React.FC<ContentSectionViewProps> = ({
  activeTab,
  recentMatches,
  upcomingMatches,
  news,
  discussions,
  faqs,
  liveMatches,
  onSelectMatch
}) => {
  const [newPostContent, setNewPostContent] = useState('');
  const [postList, setPostList] = useState(discussions);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: DiscussionPost = {
      id: `post-${Date.now()}`,
      author: 'Cricket Enthusiast (You)',
      avatar: '🏏',
      handle: '@you',
      timeAgo: 'Just now',
      content: newPostContent,
      likes: 1,
      replies: 0,
      tag: '#CricliveLive'
    };
    setPostList([newPost, ...postList]);
    setNewPostContent('');
  };

  // Filtered search results
  const filteredMatches = [...recentMatches, ...upcomingMatches].filter(m =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredNews = news.filter(n =>
    n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    n.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10">
      {/* 1. MATCHES VIEW (Tab: 'matches' or Home section) */}
      {(activeTab === 'home' || activeTab === 'matches') && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Matches (from actual Criclive.in) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Recent Matches
              </h2>
              <span className="text-xs font-bold text-red-600">Results</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {recentMatches.map((m) => (
                <li key={m.id} className="py-3 hover:bg-slate-50/80 rounded-lg px-2 transition">
                  <div className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    {m.title}
                  </div>
                  <div className="mt-1 text-xs font-bold text-emerald-700 font-mono">
                    {m.resultOrTime}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Matches (from actual Criclive.in) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Upcoming Matches
              </h2>
              <span className="text-xs font-bold text-blue-600">Schedule</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {upcomingMatches.map((m) => (
                <li key={m.id} className="py-3 hover:bg-slate-50/80 rounded-lg px-2 transition">
                  <div className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    {m.title}
                  </div>
                  <div className="mt-1 text-xs font-bold text-blue-700 font-mono">
                    {m.resultOrTime}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 2. CRICKET SERIES / TOURNAMENTS (Tab: 'series') */}
      {(activeTab === 'series' || activeTab === 'home') && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Featured Cricket Series & Tournaments
            </h2>
            <span className="text-xs text-slate-500 font-medium">International & T20 Leagues</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'International League T20 2026', host: 'UAE', type: 'T20 League', count: '34 Matches', active: true },
              { name: "ACC Men's Asia Cup Rising Stars 2026", host: 'Qatar', type: 'ODI', count: '16 Matches', active: true },
              { name: 'Bangladesh Tour of South Africa 2026', host: 'South Africa', type: 'Test Series', count: '2 Tests', active: true },
              { name: "Women's Big Bash League 2026", host: 'Australia', type: 'WBBL', count: '56 Matches', active: true },
              { name: 'England Tour of Australia 2026', host: 'Australia', type: 'T20I Series', count: '3 Matches', active: true },
              { name: 'Indian Premier League (IPL) 2026', host: 'India', type: 'T20 League', count: '74 Matches', active: false }
            ].map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:border-slate-300 transition">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    {s.type}
                  </span>
                  {s.active && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                      ONGOING
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-sm text-slate-900 mb-1">{s.name}</h3>
                <p className="text-xs text-slate-500 font-medium">Host: {s.host} • {s.count}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. CRICKET NEWS (Tab: 'news' or Home section) */}
      {(activeTab === 'news' || activeTab === 'home') && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Breaking Cricket News & Match Reports
            </h2>
            <span className="text-xs font-bold text-red-600">Updated Real-Time</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50/30 flex flex-col justify-between hover:shadow-sm transition">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-red-600 uppercase text-[10px]">{item.category}</span>
                    <span className="text-slate-400 font-medium text-[11px]">{item.timeAgo}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 hover:text-red-600 transition cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>By {item.author}</span>
                  <span className="text-slate-400">{item.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. CRICKET SHORTS & VIDEOS (Tab: 'shorts' / 'videos') */}
      {(activeTab === 'shorts' || activeTab === 'videos' || activeTab === 'home') && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              Cricket Shorts & Match Highlights
            </h2>
            <span className="text-xs font-bold text-red-600">Video Center</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { title: 'SKY’s Unbelievable Ramp Shot over Third Man', views: '142K views', duration: '0:45', badge: 'SHORTS' },
              { title: 'Trent Boult Clean Bowls Opener on First Ball', views: '98K views', duration: '0:30', badge: 'WICKET' },
              { title: 'Pooran 64* (35) Power Hitting Highlights', views: '210K views', duration: '3:20', badge: 'HIGHLIGHTS' },
              { title: 'Top 5 Catches in Asia Cup Rising Stars', views: '76K views', duration: '1:15', badge: 'SHORTS' },
            ].map((v, i) => (
              <div key={i} className="group cursor-pointer rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white relative">
                <div className="h-36 bg-gradient-to-tr from-slate-900 via-slate-800 to-red-900/40 flex items-center justify-center p-3 relative">
                  <div className="h-10 w-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                    ▶
                  </div>
                  <span className="absolute top-2 right-2 text-[9px] font-bold bg-black/60 px-1.5 py-0.5 rounded text-white font-mono">
                    {v.duration}
                  </span>
                  <span className="absolute bottom-2 left-2 text-[9px] font-bold bg-red-600 px-1.5 py-0.5 rounded text-white">
                    {v.badge}
                  </span>
                </div>
                <div className="p-2.5 bg-white text-slate-900 border-t border-slate-200">
                  <h4 className="text-xs font-bold leading-snug line-clamp-2 group-hover:text-red-600 transition">
                    {v.title}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium block mt-1">{v.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. FANS DISCUSSION PLATFORM (from Criclive.in /timeline) */}
      {(activeTab === 'fans' || activeTab === 'home') && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Fans Discussion Forum (Chat & Post)
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Connect with cricket enthusiasts worldwide and debate live matches</p>
            </div>
            <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-200">
              Live Community
            </span>
          </div>

          {/* New Post Form */}
          <form onSubmit={handleAddPost} className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="What's your take on the current match situation? Share your insights..."
              rows={2}
              className="w-full text-xs sm:text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">Keep discussion respectful & on topic</span>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-lg bg-[#05055f] text-white hover:bg-[#0a0a8a] transition shadow-xs"
              >
                <Send className="w-3.5 h-3.5" /> Post Insight
              </button>
            </div>
          </form>

          {/* Discussion Thread */}
          <div className="space-y-3.5">
            {postList.map((post) => (
              <div key={post.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{post.avatar}</span>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{post.author}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{post.handle} • {post.timeAgo}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal mb-3">
                  {post.content}
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-2 border-t border-slate-100">
                  <button className="flex items-center gap-1 hover:text-red-600 transition">
                    <ThumbsUp className="w-3.5 h-3.5" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                    <MessageSquare className="w-3.5 h-3.5" /> {post.replies} Replies
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. SEARCH MODAL / VIEW (Tab: 'search') */}
      {activeTab === 'search' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="pb-3 border-b border-slate-100">
            <h2 className="text-lg font-black text-slate-900 mb-2">Search Criclive.in</h2>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search matches, tournaments, news, teams..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm font-medium"
                autoFocus
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Matching Fixtures</h3>
            <ul className="divide-y divide-slate-100">
              {filteredMatches.slice(0, 5).map((m) => (
                <li key={m.id} className="py-2.5">
                  <div className="text-sm font-semibold text-slate-800">{m.title}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{m.resultOrTime}</div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Matching News</h3>
            <ul className="divide-y divide-slate-100">
              {filteredNews.slice(0, 4).map((n) => (
                <li key={n.id} className="py-2.5">
                  <div className="text-sm font-bold text-slate-900">{n.title}</div>
                  <p className="text-xs text-slate-600 mt-1">{n.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 7. OFFICIAL CRICKET RESOURCES & FAQS (Direct from Criclive.in) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Official Resources */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-red-600" />
            Official Cricket Resources
          </h3>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Follow official governance, global rankings, and formal laws governing international cricket:
          </p>
          <div className="space-y-3 text-xs font-semibold">
            <a
              href="https://www.icc-cricket.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 transition text-slate-800"
            >
              <span>ICC Official Website & Rankings</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="https://www.lords.org/mcc/the-laws-of-cricket"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 transition text-slate-800"
            >
              <span>MCC Laws of Cricket</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* FAQ - Criclive.in */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            FAQ - Criclive.in
          </h3>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group border border-slate-200 rounded-xl p-3 bg-slate-50/40">
                <summary className="text-xs font-bold text-slate-800 cursor-pointer list-none flex items-center justify-between">
                  <span>{f.question}</span>
                  <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed pt-2 border-t border-slate-200/60 font-medium">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { CricketMatch, MatchListItem, NewsItem, DiscussionPost, FaqItem } from '@/types/cricket';

export const INITIAL_MATCHES: CricketMatch[] = [
  {
    id: 'gulf-giants-vs-mi-emirates-2026',
    title: 'Gulf Giants vs MI Emirates, 5th T20',
    series: 'International League T20 2026',
    format: 'T20',
    status: 'LIVE',
    statusText: 'MI Emirates need 28 runs in 16 balls',
    venue: 'Dubai International Cricket Stadium',
    toss: 'MI Emirates won the toss and elected to field',
    color: 'charcoal',
    team1: {
      teamName: 'Gulf Giants',
      teamCode: 'GG',
      score: 174,
      wickets: 6,
      overs: '20.0',
      runRate: 8.7,
      batting: [
        { id: 'p1', name: 'James Vince (c)', runs: 58, balls: 36, fours: 6, sixes: 2, strikeRate: 161.1, dismissal: 'c Pollard b Boult' },
        { id: 'p2', name: 'Usman Khan', runs: 42, balls: 27, fours: 4, sixes: 2, strikeRate: 155.5, dismissal: 'b Waqar' },
        { id: 'p3', name: 'Shimron Hetmyer', runs: 34, balls: 18, fours: 2, sixes: 3, strikeRate: 188.8, dismissal: 'c Pooran b Bravo' },
        { id: 'p4', name: 'Jordan Cox', runs: 18, balls: 11, fours: 1, sixes: 1, strikeRate: 163.6, dismissal: 'not out' },
      ],
      bowling: [
        { id: 'b1', name: 'Trent Boult', overs: '4.0', maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
        { id: 'b2', name: 'Waqar Salamkheil', overs: '4.0', maidens: 0, runs: 31, wickets: 2, economy: 7.75 },
        { id: 'b3', name: 'Dwayne Bravo', overs: '4.0', maidens: 0, runs: 38, wickets: 1, economy: 9.5 },
      ]
    },
    team2: {
      teamName: 'MI Emirates',
      teamCode: 'MIE',
      score: 147,
      wickets: 4,
      overs: '17.2',
      runRate: 8.48,
      batting: [
        { id: 'p11', name: 'Nicholas Pooran (c)', runs: 64, balls: 35, fours: 5, sixes: 4, strikeRate: 182.8, isStriker: true },
        { id: 'p12', name: 'Kieron Pollard', runs: 26, balls: 14, fours: 1, sixes: 2, strikeRate: 185.7, isStriker: false },
        { id: 'p13', name: 'Muhammad Waseem', runs: 31, balls: 20, fours: 4, sixes: 1, strikeRate: 155.0, dismissal: 'c Vince b Jordan' },
        { id: 'p14', name: 'Andre Fletcher', runs: 16, balls: 12, fours: 2, sixes: 0, strikeRate: 133.3, dismissal: 'b Zuhaib' },
      ],
      bowling: [
        { id: 'b11', name: 'Chris Jordan', overs: '3.2', maidens: 0, runs: 32, wickets: 2, economy: 9.6, isCurrent: true },
        { id: 'b12', name: 'Richard Gleeson', overs: '4.0', maidens: 0, runs: 34, wickets: 1, economy: 8.5 },
        { id: 'b13', name: 'Aayan Afzal Khan', overs: '4.0', maidens: 0, runs: 26, wickets: 1, economy: 6.5 },
      ]
    },
    currentBattingTeam: 'team2',
    target: 175,
    requiredRunRate: 10.5,
    recentBalls: ['1', '4', '6', '1', '2', '1'],
    recentEvents: [
      { id: 'e1', over: 17, ball: 2, runs: 1, isBoundary: false, isWicket: false, bowler: 'Chris Jordan', batter: 'Nicholas Pooran', commentary: 'Yorker on middle, dug out down the pitch for a fast single.', timestamp: 'Just now' },
      { id: 'e2', over: 17, ball: 1, runs: 2, isBoundary: false, isWicket: false, bowler: 'Chris Jordan', batter: 'Nicholas Pooran', commentary: 'Clipped neatly through deep mid-wicket, excellent speed between wickets.', timestamp: '1 min ago' },
      { id: 'e3', over: 16, ball: 6, runs: 6, isBoundary: true, boundaryType: 'SIX', isWicket: false, bowler: 'Richard Gleeson', batter: 'Nicholas Pooran', commentary: 'SIX! Clean hit over deep extra cover! Pooran is in unstoppable touch tonight.', timestamp: '2 mins ago' },
    ],
    winProbability: {
      team1: 38,
      team2: 62
    },
    aiInsight: {
      summary: 'Pooran is on 64* from 35. MI Emirates hold the upper hand needing 28 in 16 deliveries with 6 wickets intact.',
      keyTurningPoint: 'Pooran took 16 runs off over 16 to swing the chase heavily toward MI Emirates.',
      projectedScore: 177,
      tacticalTip: 'Gulf Giants must bowl wide yorkers outside off stump to starve Pollard of leg-side leverage.'
    }
  },
  {
    id: 'south-africa-vs-bangladesh-2026',
    title: 'South Africa vs Bangladesh, 2nd Test',
    series: 'Bangladesh Tour of South Africa 2026',
    format: 'TEST',
    status: 'LIVE',
    statusText: 'South Africa lead by 214 runs | Day 3',
    venue: 'St George\'s Park, Gqeberha',
    toss: 'South Africa won the toss and elected to bat',
    color: 'orange',
    team1: {
      teamName: 'South Africa',
      teamCode: 'SA',
      score: 382,
      wickets: 7,
      overs: '112.4',
      runRate: 3.39,
      batting: [
        { id: 'p21', name: 'Tristan Stubbs', runs: 114, balls: 182, fours: 12, sixes: 2, strikeRate: 62.6, isStriker: true },
        { id: 'p22', name: 'Kyle Verreynne (wk)', runs: 56, balls: 94, fours: 5, sixes: 0, strikeRate: 59.5, isStriker: false },
      ],
      bowling: [
        { id: 'b21', name: 'Taijul Islam', overs: '32.4', maidens: 4, runs: 108, wickets: 3, economy: 3.3, isCurrent: true },
        { id: 'b22', name: 'Mehidy Hasan Miraz', overs: '28.0', maidens: 3, runs: 94, wickets: 2, economy: 3.35 },
      ]
    },
    team2: {
      teamName: 'Bangladesh',
      teamCode: 'BAN',
      score: 168,
      wickets: 10,
      overs: '54.2',
      runRate: 3.09,
    },
    currentBattingTeam: 'team1',
    recentBalls: ['•', '1', '•', '4', '•', '1'],
    recentEvents: [
      { id: 'e21', over: 112, ball: 4, runs: 1, isBoundary: false, isWicket: false, bowler: 'Taijul Islam', batter: 'Tristan Stubbs', commentary: 'Turn from rough, flicked to square leg for one.', timestamp: 'Just now' }
    ],
    winProbability: {
      team1: 88,
      team2: 12
    },
    aiInsight: {
      summary: 'South Africa dominating. With a lead past 210 and 2 full days remaining, an innings or massive victory looks imminent.',
      keyTurningPoint: 'Stubbs reaching his maiden home Test hundred in the morning session.',
      projectedScore: 425,
      tacticalTip: 'Bangladesh must use tight leg-side fields to stop easy singles for Verreynne.'
    }
  },
  {
    id: 'ind-vs-aus-2026',
    title: 'India vs Australia, 3rd T20I',
    series: 'Australia Tour of India 2026',
    format: 'T20',
    status: 'LIVE',
    statusText: 'India need 34 runs in 18 balls',
    venue: 'Wankhede Stadium, Mumbai',
    toss: 'India won the toss and elected to field',
    color: 'blue',
    team1: {
      teamName: 'Australia',
      teamCode: 'AUS',
      score: 188,
      wickets: 5,
      overs: '20.0',
      runRate: 9.4,
      batting: [
        { id: 'p31', name: 'Travis Head', runs: 64, balls: 32, fours: 7, sixes: 4, strikeRate: 200.0, dismissal: 'c Kohli b Bumrah' },
        { id: 'p32', name: 'Mitchell Marsh (c)', runs: 42, balls: 28, fours: 3, sixes: 2, strikeRate: 150.0, dismissal: 'b Kuldeep' },
      ],
      bowling: [
        { id: 'b31', name: 'Jasprit Bumrah', overs: '4.0', maidens: 0, runs: 26, wickets: 2, economy: 6.5 },
      ]
    },
    team2: {
      teamName: 'India',
      teamCode: 'IND',
      score: 155,
      wickets: 3,
      overs: '17.0',
      runRate: 9.12,
      batting: [
        { id: 'p33', name: 'Suryakumar Yadav (c)', runs: 58, balls: 31, fours: 6, sixes: 3, strikeRate: 187.1, isStriker: true },
        { id: 'p34', name: 'Hardik Pandya', runs: 32, balls: 18, fours: 2, sixes: 2, strikeRate: 177.7, isStriker: false },
      ],
      bowling: [
        { id: 'b32', name: 'Pat Cummins', overs: '3.0', maidens: 0, runs: 35, wickets: 1, economy: 11.66, isCurrent: true },
      ]
    },
    currentBattingTeam: 'team2',
    target: 189,
    requiredRunRate: 11.33,
    recentBalls: ['1', '4', '2', '6', '•', '1'],
    recentEvents: [
      { id: 'e31', over: 16, ball: 6, runs: 1, isBoundary: false, isWicket: false, bowler: 'Pat Cummins', batter: 'Hardik Pandya', commentary: 'Pushed down to long-on for a single.', timestamp: 'Just now' }
    ],
    winProbability: {
      team1: 42,
      team2: 58
    },
    aiInsight: {
      summary: 'India is on track with Suryakumar Yadav set on 58*. Dew is making ball gripping difficult for Australian pacers.',
      keyTurningPoint: 'Suryakumar taking 18 runs off Zampa in over 14.',
      projectedScore: 191,
      tacticalTip: 'Australia must hit outside off yorker lines to prevent ramp shots.'
    }
  }
];

export const RECENT_MATCHES: MatchListItem[] = [
  {
    id: 'pak-a-vs-nep-2026',
    title: "Pakistan A vs Nepal, 12th Match, ACC Men's Asia Cup Rising Stars",
    resultOrTime: 'Pakistan A won by 96 runs',
    status: 'recent'
  },
  {
    id: 'aus-vs-eng-2t20',
    title: 'Australia vs England, 2nd T20I, England tour of Australia',
    resultOrTime: 'England won by 8 wickets',
    status: 'recent'
  },
  {
    id: 'ind-a-vs-uae-2026',
    title: "India A vs United Arab Emirates, 11th Match, ACC Men's Asia Cup",
    resultOrTime: 'India A won by 7 wickets',
    status: 'recent'
  },
  {
    id: 'shj-vs-dv-2026',
    title: 'Sharjah Warriorz vs Desert Vipers, 4th T20, ILT20',
    resultOrTime: 'Desert Vipers won by 6 wickets',
    status: 'recent'
  },
  {
    id: 'sl-a-vs-ban-a-2026',
    title: "Sri Lanka A vs Bangladesh A, 10th Match, ACC Men's Asia Cup",
    resultOrTime: 'Sri Lanka A won by 7 wickets',
    status: 'recent'
  },
  {
    id: 'afg-a-vs-hk-2026',
    title: "Afghanistan A vs Hong Kong, 9th Match, ACC Men's Asia Cup",
    resultOrTime: 'Afghanistan A won by 7 wickets',
    status: 'recent'
  },
  {
    id: 'dc-vs-adkr-2026',
    title: 'Dubai Capitals vs Abu Dhabi Knight Riders, 3rd T20, ILT20',
    resultOrTime: 'Abu Dhabi Knight Riders won by 55 runs',
    status: 'recent'
  },
  {
    id: 'ind-a-vs-pak-a-2026',
    title: "India A vs Pakistan A, 8th Match, ACC Men's Asia Cup",
    resultOrTime: 'Pakistan A won by 48 runs',
    status: 'recent'
  }
];

export const UPCOMING_MATCHES: MatchListItem[] = [
  {
    id: 'mrw-vs-bhw-2026',
    title: "Melbourne Renegades Women vs Brisbane Heat Women, 33rd Match, WBBL",
    resultOrTime: 'Tomorrow, 10:10 AM IST',
    status: 'upcoming'
  },
  {
    id: 'dc-vs-dv-2026',
    title: 'Dubai Capitals vs Desert Vipers, 6th Match, International League T20',
    resultOrTime: 'Tomorrow, 08:00 PM IST',
    status: 'upcoming'
  },
  {
    id: 'stw-vs-asw-2026',
    title: 'Sydney Thunder Women vs Adelaide Strikers Women, 34th Match, WBBL',
    resultOrTime: '26 Nov, 10:10 AM IST',
    status: 'upcoming'
  },
  {
    id: 'zim-a-vs-ire-a-2026',
    title: 'Zimbabwe A vs Ireland A, 4th unofficial ODI',
    resultOrTime: '26 Nov, 01:00 PM IST',
    status: 'upcoming'
  },
  {
    id: 'ssw-vs-msw-2026',
    title: 'Sydney Sixers Women vs Melbourne Stars Women, 35th Match, WBBL',
    resultOrTime: '26 Nov, 01:40 PM IST',
    status: 'upcoming'
  },
  {
    id: 'semi-final-acc-2026',
    title: "TBA vs TBA, 1st Semi-Final, ACC Men's Asia Cup Rising Stars",
    resultOrTime: '26 Nov, 03:30 PM IST',
    status: 'upcoming'
  },
  {
    id: 'adkr-vs-mie-2026',
    title: 'Abu Dhabi Knight Riders vs MI Emirates, 7th Match, ILT20',
    resultOrTime: '26 Nov, 08:00 PM IST',
    status: 'upcoming'
  },
  {
    id: 'aus-vs-eng-3t20-2026',
    title: 'Australia vs England, 3rd T20I, England tour of Australia',
    resultOrTime: '27 Nov, 01:45 PM IST',
    status: 'upcoming'
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Australia Women Beat New Zealand Women by 2 Wickets in Thrilling T20I Opener',
    category: 'International',
    timeAgo: '2 hours ago',
    readTime: '3 min read',
    summary: 'A nervy lower-order chase sealed the opening contest in the final over after Sophie Devine\'s 72 had earlier lifted New Zealand to a competitive 158.',
    author: 'Criclive Sports Desk'
  },
  {
    id: 'news-2',
    title: 'Zimbabwe Crush Bangladesh by 99 Runs in First ODI as Ervine and Taylor Star',
    category: 'Series Review',
    timeAgo: '4 hours ago',
    readTime: '4 min read',
    summary: 'Clinical all-round display at Harare Sports Club leaves Bangladesh chasing answers in the three-match ODI series.',
    author: 'Harare Bureau'
  },
  {
    id: 'news-3',
    title: 'CPL Final: Antigua and Barbuda Falcons Clinch Historic Title With Emphatic 8-Wicket Win',
    category: 'T20 Leagues',
    timeAgo: '1 day ago',
    readTime: '2 min read',
    summary: 'Explosive top-order batting completely overpowered the target within 16 overs in front of a capacity home crowd.',
    author: 'Caribbean Correspondent'
  },
  {
    id: 'news-4',
    title: "Women's Asia Cup: Shafali Verma & Deepti Sharma Power India into Grand Final",
    category: 'Asia Cup',
    timeAgo: '1 day ago',
    readTime: '3 min read',
    summary: 'Unbeaten tournament streak continues as India dismantled the opposition with both spin artistry and powerplay dominance.',
    author: 'Asian Cricket Desk'
  },
  {
    id: 'news-5',
    title: 'Duleep Trophy Final: Tilak Varma Sledges Vaibhav Suryavanshi as Stump Mic Catches Drama',
    category: 'Domestic',
    timeAgo: '2 days ago',
    readTime: '2 min read',
    summary: 'Heated words exchange on Day 2 highlights intense domestic rivalry as the youngster stood ground and notched his half-century.',
    author: 'Domestic Circuit'
  },
  {
    id: 'news-6',
    title: 'IPL 2026 Match 14 Preview: Delhi Capitals vs Gujarat Titans Pitch & Fantasy Tips',
    category: 'Fantasy Tips',
    timeAgo: '3 days ago',
    readTime: '5 min read',
    summary: 'Arun Jaitley Stadium pitch reports suggest slow spinners will dictate terms. Recommended captains, match-ups and playing XI analysis.',
    author: 'Fantasy Analyst'
  }
];

export const COMMUNITY_DISCUSSIONS: DiscussionPost[] = [
  {
    id: 'd1',
    author: 'Rohit Sharma Fan Club',
    handle: '@hitman_army',
    avatar: '🏏',
    timeAgo: '15 mins ago',
    content: 'Do you think India needs to play 3 spinners in the upcoming World Cup fixtures, or should the pace battery lead the attack?',
    likes: 84,
    replies: 23,
    tag: '#TeamIndia'
  },
  {
    id: 'd2',
    author: 'Cricket Strategist',
    handle: '@tactical_cricket',
    avatar: '📊',
    timeAgo: '42 mins ago',
    content: 'Nicholas Pooran\'s strike rate against left-arm pacers in death overs has touched 215.4 this season. Best T20 middle order finisher currently?',
    likes: 142,
    replies: 57,
    tag: '#ILT20'
  },
  {
    id: 'd3',
    author: 'Aussie Pride',
    handle: '@baggygreen_fan',
    avatar: '🦘',
    timeAgo: '2 hours ago',
    content: 'Big series decider in Hobart coming up on Friday. England’s spinners vs Australia’s hard-hitting middle order!',
    likes: 49,
    replies: 12,
    tag: '#Ashes'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is Criclive.in?',
    answer: 'Criclive.in delivers live cricket scores, ball-by-ball commentary, exclusive player interviews, match schedules, breaking news, highlights, and ICC rankings.'
  },
  {
    question: 'How can I connect with cricket fans?',
    answer: 'Visit criclive.in and use the Fans Discussion platform to connect, share insights, debate match decisions, and discuss live fixtures with enthusiasts worldwide.'
  },
  {
    question: 'Is Criclive.in free to use?',
    answer: 'Yes, Criclive.in is 100% completely free to access for all cricket scores, news, ball-by-ball commentary, and AI match predictors.'
  },
  {
    question: 'How fast are the live cricket scores updated?',
    answer: 'Criclive utilizes an ultra-fast real-time data streaming pipeline (WebSockets / SSE) providing sub-second updates without needing manual page refreshes.'
  }
];

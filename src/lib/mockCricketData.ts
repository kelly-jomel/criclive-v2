import { CricketMatch, BallEvent } from '@/types/cricket';

export const INITIAL_MATCHES: CricketMatch[] = [
  {
    id: 'ind-vs-aus-2026',
    title: 'India vs Australia, 3rd T20I',
    series: 'Australia Tour of India 2026',
    format: 'T20',
    status: 'LIVE',
    statusText: 'India need 34 runs in 18 balls',
    venue: 'Wankhede Stadium, Mumbai',
    toss: 'India won the toss and elected to field',
    team1: {
      teamName: 'Australia',
      teamCode: 'AUS',
      score: 188,
      wickets: 5,
      overs: '20.0',
      runRate: 9.4,
      batting: [
        { id: 'p1', name: 'Travis Head', runs: 64, balls: 32, fours: 7, sixes: 4, strikeRate: 200.0, dismissal: 'c Kohli b Bumrah' },
        { id: 'p2', name: 'Mitchell Marsh (c)', runs: 42, balls: 28, fours: 3, sixes: 2, strikeRate: 150.0, dismissal: 'b Kuldeep' },
        { id: 'p3', name: 'Glenn Maxwell', runs: 38, balls: 19, fours: 4, sixes: 3, strikeRate: 200.0, dismissal: 'c Hardik b Arshdeep' },
        { id: 'p4', name: 'Marcus Stoinis', runs: 24, balls: 16, fours: 2, sixes: 1, strikeRate: 150.0, dismissal: 'not out' },
      ],
      bowling: [
        { id: 'b1', name: 'Jasprit Bumrah', overs: '4.0', maidens: 0, runs: 26, wickets: 2, economy: 6.5 },
        { id: 'b2', name: 'Kuldeep Yadav', overs: '4.0', maidens: 0, runs: 34, wickets: 1, economy: 8.5 },
        { id: 'b3', name: 'Arshdeep Singh', overs: '4.0', maidens: 0, runs: 41, wickets: 1, economy: 10.25 },
        { id: 'b4', name: 'Hardik Pandya', overs: '4.0', maidens: 0, runs: 38, wickets: 1, economy: 9.5 },
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
        { id: 'p11', name: 'Suryakumar Yadav (c)', runs: 58, balls: 31, fours: 6, sixes: 3, strikeRate: 187.1, isStriker: true },
        { id: 'p12', name: 'Hardik Pandya', runs: 32, balls: 18, fours: 2, sixes: 2, strikeRate: 177.7, isStriker: false },
        { id: 'p13', name: 'Yashasvi Jaiswal', runs: 35, balls: 20, fours: 5, sixes: 1, strikeRate: 175.0, dismissal: 'c Warner b Starc' },
        { id: 'p14', name: 'Shubman Gill', runs: 22, balls: 14, fours: 3, sixes: 0, strikeRate: 157.1, dismissal: 'b Zampa' },
      ],
      bowling: [
        { id: 'b11', name: 'Mitchell Starc', overs: '3.0', maidens: 0, runs: 28, wickets: 1, economy: 9.33 },
        { id: 'b12', name: 'Adam Zampa', overs: '4.0', maidens: 0, runs: 32, wickets: 1, economy: 8.0 },
        { id: 'b13', name: 'Pat Cummins', overs: '3.0', maidens: 0, runs: 35, wickets: 1, economy: 11.66, isCurrent: true },
        { id: 'b14', name: 'Josh Hazlewood', overs: '3.0', maidens: 0, runs: 29, wickets: 0, economy: 9.66 },
      ]
    },
    currentBattingTeam: 'team2',
    target: 189,
    requiredRunRate: 11.33,
    recentBalls: ['1', '4', '2', '6', '•', '1'],
    recentEvents: [
      { id: 'e1', over: 16, ball: 6, runs: 1, isBoundary: false, isWicket: false, bowler: 'Pat Cummins', batter: 'Hardik Pandya', commentary: 'Tapped gently down to long-on for a single to keep strike.', timestamp: 'Just now' },
      { id: 'e2', over: 16, ball: 5, runs: 0, isBoundary: false, isWicket: false, bowler: 'Pat Cummins', batter: 'Hardik Pandya', commentary: 'Beaten for pace! Cummins hits the back of a length outside off, Hardik swishes and misses.', timestamp: '1 min ago' },
      { id: 'e3', over: 16, ball: 4, runs: 6, isBoundary: true, boundaryType: 'SIX', isWicket: false, bowler: 'Pat Cummins', batter: 'Suryakumar Yadav', commentary: 'SIX! Typical SKY scoop! He crouches low and ramps the 142kph delivery high over fine leg into the stands!', timestamp: '2 mins ago' },
      { id: 'e4', over: 16, ball: 3, runs: 2, isBoundary: false, isWicket: false, bowler: 'Pat Cummins', batter: 'Suryakumar Yadav', commentary: 'Worked into the deep midwicket pocket, excellent hustle between the wickets for a brace.', timestamp: '3 mins ago' },
      { id: 'e5', over: 16, ball: 2, runs: 4, isBoundary: true, boundaryType: 'FOUR', isWicket: false, bowler: 'Pat Cummins', batter: 'Suryakumar Yadav', commentary: 'FOUR! Slashed over backward point! Width offered and SKY sends it racing across the lightning outfield.', timestamp: '4 mins ago' },
    ],
    winProbability: {
      team1: 42,
      team2: 58
    },
    aiInsight: {
      summary: 'India holds the upper hand with Suryakumar Yadav set on 58*. The required rate of 11.33 is manageable given dew conditions at Wankhede.',
      keyTurningPoint: 'Over 14: Suryakumar took 18 runs off Zampa to bring the equation down under 12 RPO.',
      projectedScore: 191,
      tacticalTip: 'Australia must target yorker lengths outside off to limit Suryakumar\'s 360-degree ramp access.'
    }
  },
  {
    id: 'eng-vs-sa-2026',
    title: 'England vs South Africa, 1st ODI',
    series: 'South Africa Tour of England 2026',
    format: 'ODI',
    status: 'LIVE',
    statusText: 'South Africa chose to bat | 1st Innings',
    venue: 'Lord\'s, London',
    toss: 'South Africa won the toss and elected to bat',
    team1: {
      teamName: 'South Africa',
      teamCode: 'SA',
      score: 142,
      wickets: 2,
      overs: '27.4',
      runRate: 5.13,
      batting: [
        { id: 'p21', name: 'Aiden Markram (c)', runs: 68, balls: 78, fours: 8, sixes: 1, strikeRate: 87.1, isStriker: true },
        { id: 'p22', name: 'Heinrich Klaasen', runs: 28, balls: 24, fours: 3, sixes: 1, strikeRate: 116.6, isStriker: false },
      ],
      bowling: [
        { id: 'b21', name: 'Jofra Archer', overs: '6.0', maidens: 1, runs: 24, wickets: 1, economy: 4.0, isCurrent: true },
        { id: 'b22', name: 'Adil Rashid', overs: '5.4', maidens: 0, runs: 29, wickets: 1, economy: 5.1 },
      ]
    },
    team2: {
      teamName: 'England',
      teamCode: 'ENG',
      score: 0,
      wickets: 0,
      overs: '0.0',
      runRate: 0.0,
    },
    currentBattingTeam: 'team1',
    recentBalls: ['1', '•', '4', '1', '2', '•'],
    recentEvents: [
      { id: 'e21', over: 27, ball: 4, runs: 0, isBoundary: false, isWicket: false, bowler: 'Adil Rashid', batter: 'Aiden Markram', commentary: 'Defended softly towards short cover.', timestamp: 'Just now' }
    ],
    winProbability: {
      team1: 52,
      team2: 48
    },
    aiInsight: {
      summary: 'Pitch showing dry bounce in the afternoon. 280+ looks like a par score.',
      keyTurningPoint: 'Markram\'s steady anchor role after early wicket of De Kock.',
      projectedScore: 286,
      tacticalTip: 'Spin will play a major role in the middle overs.'
    }
  },
  {
    id: 'pak-vs-nz-2026',
    title: 'Pakistan vs New Zealand, 2nd Test',
    series: 'New Zealand in Pakistan Test Series',
    format: 'TEST',
    status: 'COMPLETED',
    statusText: 'Pakistan won by 4 wickets',
    venue: 'National Stadium, Karachi',
    toss: 'New Zealand elected to bat first',
    team1: {
      teamName: 'New Zealand',
      teamCode: 'NZ',
      score: 345,
      wickets: 10,
      overs: '108.2',
      runRate: 3.18,
    },
    team2: {
      teamName: 'Pakistan',
      teamCode: 'PAK',
      score: 312,
      wickets: 6,
      overs: '84.4',
      runRate: 3.68,
    },
    currentBattingTeam: 'team2',
    recentBalls: ['4', '1', '•', 'W', '6', '4'],
    recentEvents: [],
    winProbability: {
      team1: 0,
      team2: 100
    },
    aiInsight: {
      summary: 'Babar Azam\'s composed 4th-innings century steered Pakistan through difficult Day 5 pitch conditions.',
      keyTurningPoint: 'A 110-run 5th wicket partnership broken too late by Mitchell Santner.',
      projectedScore: 312,
      tacticalTip: 'Patience against reverse swing was the deciding factor.'
    }
  }
];

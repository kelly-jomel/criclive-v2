export type MatchFormat = 'T20' | 'ODI' | 'TEST';
export type MatchStatus = 'LIVE' | 'UPCOMING' | 'COMPLETED';

export interface PlayerScore {
  id: string;
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isStriker?: boolean;
  dismissal?: string;
}

export interface BowlerFigure {
  id: string;
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  isCurrent?: boolean;
}

export interface BallEvent {
  id: string;
  over: number;
  ball: number;
  runs: number;
  isBoundary: boolean;
  boundaryType?: 'FOUR' | 'SIX';
  isWicket: boolean;
  wicketType?: string;
  commentary: string;
  bowler: string;
  batter: string;
  timestamp: string;
}

export interface TeamInnings {
  teamName: string;
  teamCode: string;
  score: number;
  wickets: number;
  overs: string;
  runRate: number;
  batting?: PlayerScore[];
  bowling?: BowlerFigure[];
}

export interface CricketMatch {
  id: string;
  title: string;
  series: string;
  format: MatchFormat;
  status: MatchStatus;
  statusText: string;
  venue: string;
  toss: string;
  team1: TeamInnings;
  team2: TeamInnings;
  currentBattingTeam: 'team1' | 'team2';
  requiredRunRate?: number;
  target?: number;
  recentBalls: string[]; // e.g. ['1', '4', '•', 'W', '6', '1']
  recentEvents: BallEvent[];
  winProbability: {
    team1: number;
    team2: number;
  };
  aiInsight: {
    summary: string;
    keyTurningPoint: string;
    projectedScore: number;
    tacticalTip: string;
  };
}

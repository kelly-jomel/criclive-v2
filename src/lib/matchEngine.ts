import { CricketMatch, BallEvent } from '@/types/cricket';

const COMMENTARY_TEMPLATES = {
  dot: [
    'Good length ball outside off, defended safely to point.',
    'Pushed straight back down the deck to the bowler.',
    'Beaten by seam movement! That whizzed past the outside edge.'
  ],
  single: [
    'Worked gently off the pads into the mid-wicket gap for a quick single.',
    'Pushed down to long-off for an easy single to rotate the strike.',
    'Dabbed down to third man for one.'
  ],
  two: [
    'Punched through cover-point, swift running ensures they come back for two.',
    'Clipped into deep square leg, good call, comfortable couple taken.'
  ],
  four: [
    'FOUR! Smashed through the covers! Timed to absolute perfection!',
    'FOUR! Short and pulled with authority into the midwicket fence!',
    'FOUR! Edged but flies past the slip cordon down to third man!'
  ],
  six: [
    'SIX! That is colossal! Launched 95 meters deep into the top tier!',
    'SIX! Stand and deliver! High, handsome, and into the stands over long-on!',
    'SIX! What a shot! Shuffles across and scoops it over fine leg for maximum!'
  ],
  wicket: [
    'OUT! Clean bowled! That delivery nipped back sharply and knocked out the off stump!',
    'OUT! Caught at deep midwicket! He went for the big heave but didn\'t get all of it!',
    'OUT! Edged and taken cleanly by the wicketkeeper!'
  ]
};

export function simulateNextBall(match: CricketMatch): CricketMatch {
  if (match.status !== 'LIVE') return match;

  const currentTeamKey = match.currentBattingTeam;
  const team = { ...match[currentTeamKey] };
  const batting = team.batting ? [...team.batting] : [];
  const bowling = team.bowling ? [...team.bowling] : [];

  const strikerIndex = batting.findIndex(b => b.isStriker);
  const nonStrikerIndex = batting.findIndex(b => !b.isStriker);

  const [oversNum, ballsNum] = team.overs.split('.').map(Number);
  let nextBall = ballsNum + 1;
  let nextOver = oversNum;

  if (nextBall >= 6) {
    nextOver += 1;
    nextBall = 0;
  }

  // Random outcome generator with cricket realism
  const roll = Math.random();
  let runs = 0;
  let isBoundary = false;
  let boundaryType: 'FOUR' | 'SIX' | undefined;
  let isWicket = false;
  let ballDisplay = '•';
  let commText = '';

  if (roll < 0.35) {
    // Dot ball
    runs = 0;
    ballDisplay = '•';
    commText = COMMENTARY_TEMPLATES.dot[Math.floor(Math.random() * COMMENTARY_TEMPLATES.dot.length)];
  } else if (roll < 0.65) {
    // Single
    runs = 1;
    ballDisplay = '1';
    commText = COMMENTARY_TEMPLATES.single[Math.floor(Math.random() * COMMENTARY_TEMPLATES.single.length)];
  } else if (roll < 0.75) {
    // Two runs
    runs = 2;
    ballDisplay = '2';
    commText = COMMENTARY_TEMPLATES.two[Math.floor(Math.random() * COMMENTARY_TEMPLATES.two.length)];
  } else if (roll < 0.86) {
    // Four
    runs = 4;
    isBoundary = true;
    boundaryType = 'FOUR';
    ballDisplay = '4';
    commText = COMMENTARY_TEMPLATES.four[Math.floor(Math.random() * COMMENTARY_TEMPLATES.four.length)];
  } else if (roll < 0.94) {
    // Six
    runs = 6;
    isBoundary = true;
    boundaryType = 'SIX';
    ballDisplay = '6';
    commText = COMMENTARY_TEMPLATES.six[Math.floor(Math.random() * COMMENTARY_TEMPLATES.six.length)];
  } else {
    // Wicket
    isWicket = true;
    ballDisplay = 'W';
    commText = COMMENTARY_TEMPLATES.wicket[Math.floor(Math.random() * COMMENTARY_TEMPLATES.wicket.length)];
  }

  // Update team stats
  team.score += runs;
  if (isWicket) {
    team.wickets += 1;
  }
  team.overs = `${nextOver}.${nextBall}`;
  const totalBalls = nextOver * 6 + nextBall;
  team.runRate = totalBalls > 0 ? parseFloat(((team.score / totalBalls) * 6).toFixed(2)) : 0;

  // Update striker stats
  const striker = strikerIndex !== -1 ? { ...batting[strikerIndex] } : null;
  const bowler = bowling.find(b => b.isCurrent) || bowling[0];

  if (striker) {
    striker.runs += runs;
    striker.balls += 1;
    if (boundaryType === 'FOUR') striker.fours += 1;
    if (boundaryType === 'SIX') striker.sixes += 1;
    striker.strikeRate = parseFloat(((striker.runs / striker.balls) * 100).toFixed(1));

    if (isWicket) {
      striker.dismissal = `c Sub b ${bowler?.name || 'Bowler'}`;
      striker.isStriker = false;
      batting[strikerIndex] = striker;
      // Bring in a new batter if available
      const newBatter = batting.find(b => !b.dismissal && !b.isStriker && b.id !== striker.id);
      if (newBatter) {
        newBatter.isStriker = true;
      }
    } else {
      // Rotate strike on odd runs
      if (runs % 2 !== 0 && nonStrikerIndex !== -1) {
        striker.isStriker = false;
        batting[nonStrikerIndex] = { ...batting[nonStrikerIndex], isStriker: true };
      }
      batting[strikerIndex] = striker;
    }
  }

  // Swap strike at the end of an over
  if (nextBall === 0 && strikerIndex !== -1 && nonStrikerIndex !== -1) {
    const currentS = batting.findIndex(b => b.isStriker);
    const otherS = batting.findIndex(b => !b.dismissal && !b.isStriker);
    if (currentS !== -1 && otherS !== -1) {
      batting[currentS].isStriker = false;
      batting[otherS].isStriker = true;
    }
  }

  // New Ball Event
  const newEvent: BallEvent = {
    id: `ev-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    over: nextOver,
    ball: nextBall === 0 ? 6 : nextBall,
    runs,
    isBoundary,
    boundaryType,
    isWicket,
    bowler: bowler?.name || 'Pat Cummins',
    batter: striker?.name || 'Suryakumar Yadav',
    commentary: commText,
    timestamp: 'Just now'
  };

  const updatedRecentBalls = [...match.recentBalls.slice(-5), ballDisplay];
  const updatedEvents = [newEvent, ...match.recentEvents.slice(0, 19)];

  // Dynamic Win Probability & AI Recalculation
  const target = match.target || 180;
  const runsRemaining = Math.max(0, target - team.score);
  const ballsRemaining = Math.max(1, 120 - totalBalls);
  const reqRate = parseFloat(((runsRemaining / ballsRemaining) * 6).toFixed(2));

  let team2Win = 50;
  if (team.score >= target) {
    team2Win = 100;
  } else if (team.wickets >= 10 || ballsRemaining <= 0) {
    team2Win = 0;
  } else {
    // Heuristic probability model
    const diff = (reqRate - team.runRate);
    team2Win = Math.max(5, Math.min(95, Math.round(55 - diff * 4 - team.wickets * 3)));
  }

  return {
    ...match,
    [currentTeamKey]: {
      ...team,
      batting,
      bowling
    },
    requiredRunRate: reqRate,
    recentBalls: updatedRecentBalls,
    recentEvents: updatedEvents,
    winProbability: {
      team1: 100 - team2Win,
      team2: team2Win
    },
    aiInsight: {
      summary: `${match.team2.teamName} has ${runsRemaining} runs left to win in ${ballsRemaining} deliveries. Win probability stands at ${team2Win}%.`,
      keyTurningPoint: isWicket ? `Crucial wicket! ${striker?.name} falls at a pivotal moment.` : (boundaryType ? `Clean ${boundaryType} lifts momentum for ${team.teamName}!` : match.aiInsight.keyTurningPoint),
      projectedScore: Math.round(team.score + (team.runRate * (ballsRemaining / 6))),
      tacticalTip: reqRate > 12 ? 'Boundary-hitting is now critical every single over.' : 'Strike rotation with low-risk ground strokes will seal the chase.'
    }
  };
}

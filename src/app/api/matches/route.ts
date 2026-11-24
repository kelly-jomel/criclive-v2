import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_MATCHES } from '@/lib/mockCricketData';
import { simulateNextBall } from '@/lib/matchEngine';

// Server memory store for simulation state
let currentMatches = [...INITIAL_MATCHES];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const matchId = searchParams.get('id');

  if (matchId) {
    const match = currentMatches.find(m => m.id === matchId);
    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: match });
  }

  return NextResponse.json({
    success: true,
    total: currentMatches.length,
    data: currentMatches
  });
}

// Ingest or trigger a new ball update (used by webhooks or provider feed worker)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const matchId = body.matchId || currentMatches[0].id;

    currentMatches = currentMatches.map((m) => {
      if (m.id === matchId) {
        return simulateNextBall(m);
      }
      return m;
    });

    const updated = currentMatches.find(m => m.id === matchId);
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process ball update' }, { status: 500 });
  }
}

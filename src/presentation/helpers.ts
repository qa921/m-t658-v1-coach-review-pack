export type PlayerCard = { playerId: string; name: string; calculatedRank?: number; coachStrength?: string; coachPriority?: string; coachRank?: number; portraitPath?: string };

export const assetFallback = 'assets/portraits/placeholder.png';
export const sourceTargets = {
  progressiveActions: 'per 90',
  pressingActions: 'per 90',
  expectedGoals: 'per 90',
};
export function portraitFor(card: PlayerCard) {
  return card.portraitPath || assetFallback;
}

// Coach-vs-calculated rationale (reconciled 2026-09-15): differences between the
// coach's rank/strength/priority and the calculated goal-contribution rank are
// intentional, not errors. Coach judgment uses axes the attacking rank does not
// capture (e.g., defensive reliability, build-up connection); both stay visible.
export function coachVsCalculatedNote(card: PlayerCard) {
  if (card.coachRank == null || card.calculatedRank == null) {
    return 'Shown with a single view only; no conflict implied.';
  }
  if (card.coachRank === card.calculatedRank) {
    return `Coach rank ${card.coachRank} matches calculated rank.`;
  }
  return `Coach rank ${card.coachRank} differs from calculated rank ${card.calculatedRank}; both retained by design.`;
}

// Formula comparison against KPI_Source remains PENDING (workbook unavailable).

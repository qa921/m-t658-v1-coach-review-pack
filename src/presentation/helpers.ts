export type PlayerCard = { playerId: string; name: string; calculatedRank?: number; coachStrength?: string; coachPriority?: string; portraitPath?: string };

export const assetFallback = 'assets/portraits/placeholder.png';
export const sourceTargets = {
  progressiveActions: 'per 90',
  pressingActions: 'per 90',
  expectedGoals: 'per 90',
};

export function portraitFor(card: PlayerCard) {
  return card.portraitPath || assetFallback;
}

// Existing helper deliberately does not render coach-vs-calculated rationale.
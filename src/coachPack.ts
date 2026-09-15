export const legacySlideOrder = ['title', 'seasonTotals', 'topScorers', 'notes'];
export const legacyMinutesThreshold = 450;
export const selectedCompetitionLabel = 'National Premier League';

export function eligibleForAward(minutes: number) {
  return minutes >= legacyMinutesThreshold;
}

export function rankingLabel(rank: number) {
  return `Calculated rank #${rank}`;
}

// Seeded legacy helper: reconcile against m_t658_v1 before updating.
// Preserve coach strengths/priorities independently from calculated ranks.
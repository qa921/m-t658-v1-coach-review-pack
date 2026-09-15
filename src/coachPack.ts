// Reconciled 2026-09-15 against Supabase m_t658_v1 for block BR-APR-2026-A only.
// Approved action definitions (m_t658_v1.action_definitions):
//   GOAL_CONTRIB = goals + assists
//   PROG_P90 / PRESS_P90 / XG_P90 = numerator * 90 / minutes
// BR-APR-2026-B cup rows and SEASON_TOTAL are excluded (not approved).
export const slideOrder = ['title', 'approvedMetrics', 'calculatedRankings', 'coachSelections', 'notes'];
export const approvedMinutesThreshold = 540;
export const selectedCompetitionCode = 'NPL-U19';
export const selectedCompetitionLabel = 'National Premier League U19';

export function eligibleForAward(minutes: number) {
  return minutes >= approvedMinutesThreshold;
}

export function rankingLabel(rank: number) {
  return `Calculated rank #${rank}`;
}

// Coach strengths/priorities are preserved independently from calculated ranks;
// differences between the two are intentional and are not treated as errors.
// Workbook formula comparison (M-T658-V1 Coach Review Source.xlsx / KPI_Source)
// remains PENDING: no usable workbook is available in OneDrive as of 2026-09-15.

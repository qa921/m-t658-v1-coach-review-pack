export const reviewBlockConfig = {
  label: 'M-T658-V1',
  blockId: 'BR-APR-2026-A',
  workbookName: 'M-T658-V1 Coach Review Source.xlsx',
  expectedSheet: 'KPI_Source',
  sourceSchema: 'm_t658_v1',
  staleCompetitionLabel: 'National Premier League',
  // Reconciled 2026-09-15: legacy seasonTotals slide removed (SEASON_TOTAL not approved);
  // order reflects approved metrics, calculated rankings, and coach selections.
  currentSlideOrder: ['title', 'approvedMetrics', 'calculatedRankings', 'coachSelections', 'notes'],
  // Workbook not present in OneDrive as of 2026-09-15; formula comparison PENDING.
  formulaComparison: 'pending',
};

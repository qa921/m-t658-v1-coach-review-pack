import { eligibleForAward, approvedMinutesThreshold } from '../src/coachPack';

describe('approved eligibility rule', () => {
  it('applies the approved 540-minute threshold', () => {
    expect(approvedMinutesThreshold).toBe(540);
    expect(eligibleForAward(546)).toBe(true); // P10: lowest eligible volume in the block
    expect(eligibleForAward(540)).toBe(true); // threshold is inclusive
    expect(eligibleForAward(534)).toBe(false); // P11: visible but ineligible
  });
});

// Workbook formula comparison remains pending until
// M-T658-V1 Coach Review Source.xlsx (KPI_Source) is available.

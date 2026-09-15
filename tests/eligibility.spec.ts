import { eligibleForAward, legacyMinutesThreshold } from '../src/coachPack';

describe('legacy eligibility baseline', () => {
  it('still demonstrates the old threshold', () => {
    expect(legacyMinutesThreshold).toBe(450);
    expect(eligibleForAward(486)).toBe(true);
  });
});

// Replace after reconciling the approved 540-minute rule and source workbook formulas.

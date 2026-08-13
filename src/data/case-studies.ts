// Case studies for /results (and, via `segments`, the segment pages later).
//
// HOW TO PUBLISH ONE (Jack): uncomment a template below, replace each
// question-prompt with the real answer, push. The page renders however many
// entries exist — zero code changes needed. Hard rule carried over from
// CO-001 D3: no invented names, quotes, or numbers. If you can't defend a
// number on a sales call, delete the `numbers` line — the row is skipped.
export interface CaseStudy {
  /** Public name, or an anonymized label like "A 20-person advisory firm". */
  client: string;
  /**
   * 'employer' renders a "(full-time role, not a client engagement)" note.
   * REQUIRED for M&Q — the employer-vs-client distinction must stay visible.
   */
  relationship?: 'client' | 'employer';
  situation: string;
  found: string;
  changed: string;
  /** Real, defensible numbers only. Omit and the row is skipped. */
  numbers?: string;
  segments?: ('consulting' | 'agency')[];
}

export const CASE_STUDIES: CaseStudy[] = [
  // ── Zeis Group ──────────────────────────────────────────────────────────
  // {
  //   client: 'Zeis Group',
  //   relationship: 'client',
  //   situation: 'What was broken, and who felt it?',
  //   found: 'Where did the knowledge actually live when you mapped it?',
  //   changed: 'What did you actually build, and what does it do day to day?',
  //   numbers: 'One number you can defend on a sales call — or delete this line.',
  // },
  // ── Lift-STL ────────────────────────────────────────────────────────────
  // {
  //   client: 'Lift-STL',
  //   relationship: 'client',
  //   situation: 'What was broken, and who felt it?',
  //   found: 'Where did the knowledge actually live when you mapped it?',
  //   changed: 'What did you actually build, and what does it do day to day?',
  //   numbers: 'One number you can defend on a sales call — or delete this line.',
  // },
  // ── M&Q ─────────────────────────────────────────────────────────────────
  // NOTE: keep relationship: 'employer' — this was a full-time role, not a
  // client engagement, and the page must say so.
  // {
  //   client: 'M&Q',
  //   relationship: 'employer',
  //   situation: 'What was broken, and who felt it?',
  //   found: 'Where did the knowledge actually live when you mapped it?',
  //   changed: 'What did you actually build, and what does it do day to day?',
  //   numbers: 'One number you can defend on a sales call — or delete this line.',
  // },
];

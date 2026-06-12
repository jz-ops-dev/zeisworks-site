// Compact objection-handling FAQ (handoff section 3, homepage section 5).
// Shared by the homepage and /revenue-audit so the copy and the $2,500/month
// figure stay identical everywhere they appear.
export interface FaqItem {
  q: string;
  a: string;
}

export const COMPACT_FAQ: FaqItem[] = [
  {
    q: 'Is this really free?',
    a: 'Yes. The audit and the 12-month plan are free. You keep them either way. If you want us to execute the plan, that’s a monthly engagement you can cancel anytime.',
  },
  {
    q: 'Do I have to get on a call?',
    a: 'No. The audit runs on its own in about 5 minutes. A call is optional, after you’ve seen your plan.',
  },
  {
    q: 'What if I already have a marketing company?',
    a: 'Run the audit anyway. If your current company is doing great work, the audit will show it. If it isn’t, you’ll know exactly what to ask them for.',
  },
  {
    q: 'Who actually does the work?',
    a: 'ZeisWorks builds and runs your plan, and a real person reviews everything before it ships. You get one point of contact: us.',
  },
  {
    q: 'What does it cost if I move forward?',
    a: 'Plans start at $2,500/month depending on what your audit calls for. Month to month. Cancel anytime. Full details on the pricing page.',
  },
];

// The three audit steps (homepage section 2), reused in compressed form on
// the vertical pages.
export const AUDIT_STEPS = [
  {
    title: 'Answer a few questions.',
    body: 'Tell us about your business: what you do, where you operate, what an average job is worth. Takes less time than a coffee order.',
  },
  {
    title: 'Get your gap analysis.',
    body: 'We compare your visibility, reviews, website conversion, and response speed against the competitors actually taking your calls. You see exactly where the leaks are, backed by hard data.',
  },
  {
    title: 'Get your 12-month plan.',
    body: 'A month-by-month roadmap showing what to fix, what it costs, and what it should return. A real person reviews every plan before you see it.',
  },
];

// Compact objection-handling FAQ. Shared by the homepage and /revenue-audit so
// the copy and the $2,500/month figure stay identical everywhere they appear.
export interface FaqItem {
  q: string;
  a: string;
}

export const COMPACT_FAQ: FaqItem[] = [
  {
    q: 'Is this really free?',
    a: 'Yes. The audit and the knowledge map are free, and you keep them either way. If you want us to build your VIK, that’s a monthly engagement you can cancel anytime.',
  },
  {
    q: 'Do I have to get on a call?',
    a: 'No. The audit runs on its own in about 5 minutes. A call is optional, after you’ve seen your map.',
  },
  {
    q: 'What if we already document things?',
    a: 'Run the audit anyway. Most teams find the real know-how still lives in a few people’s heads, not in the docs. The audit shows you exactly where that gap is.',
  },
  {
    q: 'Who actually does the work?',
    a: 'ZeisWorks builds and runs your VIK, and a real person reviews everything before it ships. You get one point of contact: us.',
  },
  {
    q: 'What does it cost if I move forward?',
    a: 'Engagements start at $2,500/month depending on how much knowledge there is to capture. Month to month. Cancel anytime and you keep your VIK. Full details on the pricing page.',
  },
];

// The three audit steps, reused in compressed form on the vertical pages.
export const AUDIT_STEPS = [
  {
    title: 'Answer a few questions.',
    body: 'Tell us about your business: what you do, how the work actually gets done, and who holds what. Takes less time than a coffee order.',
  },
  {
    title: 'Get your knowledge map.',
    body: 'We map where how-you-run lives today — in people’s heads, scattered across tools, half-written in docs — and how much of it would walk out the door if a key person left tomorrow.',
  },
  {
    title: 'Get your VIK outline.',
    body: 'A clear outline of the VIK we’d build: what gets written down, what it would do for you, and what it costs. A real person reviews it before you see it.',
  },
];

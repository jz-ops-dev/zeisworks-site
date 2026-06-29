// Compact objection-handling FAQ. Shared across pages so the copy and the
// $2,500/month figure stay identical everywhere they appear.
export interface FaqItem {
  q: string;
  a: string;
}

export const COMPACT_FAQ: FaqItem[] = [
  {
    q: 'Is this really free?',
    a: 'Yes. The intro call is free, and what we map out is yours to keep either way. If you want us to build your VIK, that’s a monthly engagement you can cancel anytime.',
  },
  {
    q: 'What happens on the call?',
    a: 'It’s a quick intro call. We walk through where your institutional knowledge lives today and what a VIK would do about it. No obligation, no pitch deck.',
  },
  {
    q: 'What if we already document things?',
    a: 'Book the call anyway. Most teams find the real know-how still lives in a few people’s heads, not in the docs. A quick call shows you exactly where that gap is.',
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

// The three intro-call steps, reused in compressed form on the vertical pages.
export const AUDIT_STEPS = [
  {
    title: 'Book a call.',
    body: 'Grab a time that works. It’s a quick intro call: what you do, how the work actually gets done, and who holds what. No prep, no pitch deck.',
  },
  {
    title: 'We map where your knowledge lives.',
    body: 'Together we map where how-you-run lives today — in people’s heads, scattered across tools, half-written in docs — and how much of it would walk out the door if a key person left tomorrow.',
  },
  {
    title: 'You get your VIK outline.',
    body: 'A clear outline of the VIK we’d build: what gets written down, what it would do for you, and what it costs. A real person walks you through it.',
  },
];

// Preset questions for the homepage query demo. Every answer sentence is
// backed by a visible line in the sample files (the homepage `routes` data) —
// no unreferenced numbers or policies. These are illustrative sample files,
// labeled as such in the UI; keep answers derivable from what's on screen.
export interface QueryPreset {
  id: string;
  question: string;
  sequence: string[]; // file paths highlighted in order
  answer: string[];
  sources: string[];
}

export const HOME_QUERY_PRESETS: QueryPreset[] = [
  {
    id: 'discount',
    question: 'Can I give this customer a 15% discount?',
    sequence: ['reference/pricing.md', 'reference/approval-rules.md'],
    answer: [
      'Not on your own. Discounts up to 10% sit with account managers; 11–20% needs the sales manager.',
      'Get the sign-off before the quote goes out — and the quote holds for 30 days.',
    ],
    sources: ['reference/approval-rules.md', 'reference/pricing.md'],
  },
  {
    id: 'customer',
    question: 'Should we take this customer?',
    sequence: ['reference/customers.md'],
    answer: [
      'Check the red flags first: an urgent timeline or a history of scope disputes means prepay or a manager’s ok before anyone commits.',
    ],
    sources: ['reference/customers.md'],
  },
  {
    id: 'pricing',
    question: 'How should we price this job?',
    sequence: ['reference/pricing.md', 'reference/approval-rules.md'],
    answer: [
      'By the project, not the hour. Send a quote that holds for 30 days.',
      'If you’re tempted past a 10% discount, that’s the sales manager’s call, not yours.',
    ],
    sources: ['reference/pricing.md', 'reference/approval-rules.md'],
  },
  {
    id: 'refund',
    question: 'What happens when a customer requests a refund?',
    sequence: ['reference/refund-policy.md', 'working/handoffs.md'],
    answer: [
      'Inside 30 days of delivery: refund it, unless it’s final-sale or a custom order. After 30 days: store credit only.',
      'It’s a money question, so a human handles it — and the owner gets tagged within one business day.',
    ],
    sources: ['reference/refund-policy.md', 'working/handoffs.md'],
  },
];

// Central CTA destination. Every call-to-action books a free intro call.
// Set PUBLIC_CALENDLY_URL in the Netlify build environment to point at the
// real scheduling link; falls back to email.
export const CALENDLY_URL =
  import.meta.env.PUBLIC_CALENDLY_URL || 'mailto:jack@zeisworks.com';

// Knowledge Audit price shown in the offer ladder (CO-002 decision D5).
// null renders "Fixed price" with no number; set to e.g. '$2,500' once
// Jack confirms and the ladder updates everywhere it appears.
export const AUDIT_PRICE: string | null = null;

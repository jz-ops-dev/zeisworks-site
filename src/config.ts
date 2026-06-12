// Central CTA destinations for the audit-first site. Both can be overridden
// via the Netlify build environment.
export const GROWBOTIK_FUNNEL_URL =
  import.meta.env.PUBLIC_GROWBOTIK_FUNNEL_URL ||
  'https://app.mplannerpro.com/ab3e6ce00d/chat?pg=ff84446e91';

// OPEN ITEM (handoff section 12): replace with the 15-minute Calendly link,
// or set PUBLIC_CALENDLY_URL in the Netlify build environment.

export const CALENDLY_URL =
  import.meta.env.PUBLIC_CALENDLY_URL || 'mailto:jack@zeisworks.com';

// Central CTA destinations for the audit-first site.
//
// Both URLs are open items in the rebuild handoff (section 12). Set
// PUBLIC_GROWBOTIK_FUNNEL_URL and PUBLIC_CALENDLY_URL in the Netlify build
// environment (or replace the fallbacks below) before launch. The fallbacks
// keep every CTA functional in the meantime.
export const GROWBOTIK_FUNNEL_URL =
  import.meta.env.PUBLIC_GROWBOTIK_FUNNEL_URL || '/revenue-audit/';

export const CALENDLY_URL =
  import.meta.env.PUBLIC_CALENDLY_URL || 'mailto:jack@zeisworks.com';

// Central CTA destination. Every call-to-action books a free intro call.
// Set PUBLIC_CALENDLY_URL in the Netlify build environment to point at the
// real scheduling link; falls back to email.
export const CALENDLY_URL =
  import.meta.env.PUBLIC_CALENDLY_URL || 'mailto:jack@zeisworks.com';

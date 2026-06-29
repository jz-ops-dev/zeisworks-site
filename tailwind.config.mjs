import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Unified VIK palette (whole-site redesign) ──
        // One system across every layout: cream paper, forest-green depth,
        // a single rust accent. Legacy token names (navy*, zw-*) are kept but
        // REPOINTED to the unified hues, so existing utility classes restyle
        // sitewide without per-file edits.
        cream: '#F8FAFC',
        'cream-dark': '#E2E8F0',
        ink: '#0F172A',
        'ink-mid': '#475569',
        'ink-light': '#64748B',

        // Rust accent (primary CTA / links). Clears WCAG AA on cream (~5:1).
        rust: '#C2410C',
        'rust-bright': '#EA580C',
        'rust-soft': '#F0A184',
        orange: '#C2410C',
        'orange-bright': '#EA580C',

        // Forest-green depth (dark sections, heroes, footers).
        forest: '#123A31',
        'forest-deep': '#0C2620',
        'forest-darkest': '#071A16',
        // Legacy navy aliases repointed to forest so existing
        // bg-navy-deep heroes and text-navy links read as the new brand.
        navy: '#1B4D40',
        'navy-deep': '#0B221C',

        // Legacy homepage (zw-*) tokens, repointed to the unified palette.
        'zw-cream': '#F8FAFC',
        'zw-ink': '#0F172A',
        'zw-forest': '#123A31',
        'zw-teal': '#C2410C',
        'zw-rust': '#9A330A',
        'zw-card': '#FFFFFF',
        'zw-border': 'rgba(15,23,42,0.10)',
        'zw-muted': '#475569',
      },
      fontFamily: {
        // One type system sitewide: Lora serif headings, DM Sans body,
        // DM Mono accents. `inter` + `mono` repointed off Inter/JetBrains.
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        inter: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      typography: ({ theme }) => ({
        zeisworks: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-lead': theme('colors.ink-mid'),
            '--tw-prose-links': theme('colors.navy'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-counters': theme('colors.ink-mid'),
            '--tw-prose-bullets': theme('colors.ink-mid'),
            '--tw-prose-hr': theme('colors.cream-dark'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.orange'),
            '--tw-prose-captions': theme('colors.ink-mid'),
            '--tw-prose-code': theme('colors.forest'),
            '--tw-prose-pre-code': theme('colors.cream'),
            '--tw-prose-pre-bg': theme('colors.forest'),
            '--tw-prose-th-borders': theme('colors.cream-dark'),
            '--tw-prose-td-borders': theme('colors.cream-dark'),
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            maxWidth: 'none',
            h1: {
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: '600',
            },
            a: {
              textDecorationColor: theme('colors.navy'),
              '&:hover': {
                color: theme('colors.navy'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

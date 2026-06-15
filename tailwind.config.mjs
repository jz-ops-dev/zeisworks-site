import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette refresh: slate paper + deep navy authority + single orange
        // conversion color. Legacy token names kept so guide/legal pages
        // restyle without edits.
        cream: '#F8FAFC',
        'cream-dark': '#E2E8F0',
        ink: '#0F172A',
        'ink-mid': '#475569',
        'ink-light': '#64748B',
        forest: '#172554',
        'navy-deep': '#172554',
        navy: '#1E3A8A',
        orange: '#C2410C',
        'orange-bright': '#EA580C',

        // ── Single-page AI-readiness rebuild (dev prompt section 3). ──
        // Scoped under the zw- prefix so the original brand palette can live
        // on the homepage without restyling the guide/legal/vertical pages
        // that still consume the legacy token names above.
        'zw-cream': '#EDEAE0',
        'zw-ink': '#1C1C1A',
        'zw-forest': '#2D3B33',
        'zw-teal': '#2D5C45',
        'zw-card': '#FFFFFF',
        'zw-border': 'rgba(28,28,26,0.12)',
        // --muted darkened from the spec's 0.62 to a solid value that clears
        // WCAG AA on the cream background (section 7).
        'zw-muted': '#5F5F57',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Body/UI + mono accent for the single-page rebuild.
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
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

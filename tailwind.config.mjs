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
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
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

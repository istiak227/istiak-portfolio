const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        emerald: 'var(--color-bg-emerald)',
        'button-indigo': 'var(--color-button-indigo)',
        'button-indigo-hover': 'var(--color-button-indigo-hover)',
        blockquote: 'var(--color-blockquote-bg)',
      },
      textColor: {
        white: '#ffffff',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        emerald: 'var(--color-text-emerald)',
        'emerald-hover': 'var(--color-text-emerald-hover)',
        indigo: 'var(--color-text-indigo)',
        'indigo-hover': 'var(--color-text-indigo-hover)',
        orange: 'var(--color-text-orange)',
        'orange-hover': 'var(--color-text-orange-hover)',
        rose: 'var(--color-text-rose)',
        amber: 'var(--color-text-amber)',
        'amber-hover': 'var(--color-text-amber-hover)',
        blue: 'var(--color-text-blue)',
        link: 'var(--color-text-link)',
        default: 'var(--color-text-default)',
        'footer-link': 'var(--color-text-link-footer)',
        'footer-link-hover': 'var(--color-text-link-footer-hover)',
        'footer-icon': 'var(--color-text-footer-icons)',
        'footer-icon-hover': 'var(--color-text-footer-icons-hover)',
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
      },
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.emerald.500'),
              '&:hover': {
                color: theme('colors.emerald.600'),
                code: { color: theme('colors.gray.700') },
              },
            },
            code: { color: colors.gray },
            // ...
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extends: {
      animation: ['responsive'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}

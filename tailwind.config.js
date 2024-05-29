/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16f2b3',
        secondary: '#ff4d9e',
        background: '#1b203e',
        surface: '#2c334d',
        accent: '#464c6a',
        textPrimary: '#ffffff',
        textSecondary: '#d3d8e8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-r-primary': 'linear-gradient(to right, #16f2b3, #ff4d9e)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '4rem',
          '3xl': '5rem',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.textPrimary'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.secondary'),
              },
            },
            h1: {
              color: theme('colors.textPrimary'),
            },
            h2: {
              color: theme('colors.textPrimary'),
            },
            h3: {
              color: theme('colors.textPrimary'),
            },
            h4: {
              color: theme('colors.textPrimary'),
            },
            code: {
              color: theme('colors.pink.500'),
            },
            blockquote: {
              borderLeftColor: theme('colors.primary'),
              color: theme('colors.textSecondary'),
            },
          },
        },
      }),
      screens: {
        '4k': '1980px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

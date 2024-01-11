import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        azure: {
          700: '#0e2430',
          900: '#07121c'
        },
        gold: {
          50: '#e6d9b9',
          100: '#c0b68d',
          500: '#745c2d'
        },
        charcoal: {
          500: '#3e4244'
        }
      }
    }
  },
  plugins: []
}
export default config

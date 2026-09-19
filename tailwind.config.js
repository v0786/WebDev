/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070B',
          900: '#0A0E17',
          850: '#0F1422',
          800: '#141B2D',
          700: '#1F293D',
          600: '#2E3D5B',
        },
        obsidian: {
          950: '#060709',
          900: '#0A0C10',
          850: '#11141B',
          800: '#181C25',
          700: '#232936',
        },
        lime: {
          300: '#D4FF33',
          400: '#B8FF00',
          500: '#9EE600',
        },
        studio: {
          primary: '#07080B',
          warmWhite: '#F4F1EA',
          softWhite: '#F8F8F5',
          muted: '#92959D',
          accent: '#B8FF00',
        },
        gold: {
          300: '#F5D38A',
          400: '#E5A958',
          500: '#D49D42',
          600: '#B87B28',
        },
        bone: {
          50: '#F8F8F5',
          100: '#F4F1EA',
          200: '#EBE8DF',
          300: '#92959D',
        },
        neon: {
          cyan: '#00F2FE',
          electric: '#4FACFE',
          violet: '#8A2BE2',
          purple: '#A855F7',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(138, 43, 226, 0.6))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

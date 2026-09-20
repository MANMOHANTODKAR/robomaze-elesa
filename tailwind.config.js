/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          900: '#070b14',
          850: '#0c1322',
          800: '#111b33',
          700: '#1a294c',
          600: '#233866',
          blue: '#00f0ff',
          neon: '#00e5ff',
          purple: '#9d4edd',
          amber: '#ffb703',
          emerald: '#00f59b',
          rose: '#ff0055'
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(0, 240, 255, 0.15)',
        'neon-purple': '0 0 15px rgba(157, 78, 221, 0.4), 0 0 30px rgba(157, 78, 221, 0.15)',
        'neon-amber': '0 0 15px rgba(255, 183, 3, 0.4), 0 0 30px rgba(255, 183, 3, 0.15)'
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scanline': 'scanline 6s linear infinite'
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F1115',
        'bg-card': '#161920',
        'bg-card-hover': '#1C2028',
        accent: '#00E5A0',
        'accent-dim': 'rgba(0,229,160,0.2)',
        'accent-glow': 'rgba(0,229,160,0.4)',
        text: '#E8E8E8',
        'text-dim': '#8B8FA3',
        border: '#2A2D38',
      },
      fontFamily: {
        display: ['Onest', 'Space Grotesk', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Cascadia Code', 'Fira Code', 'monospace'],
        body: ['Onest', 'Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

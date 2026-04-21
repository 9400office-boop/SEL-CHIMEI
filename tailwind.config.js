/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        'soft-blue': '#EBF5FB',
        'soft-green': '#EAF6EC',
        beige: '#F5E6D3',
        'soft-orange': '#FEE8D5',
        'muted-orange': '#F4A261',
        'warm-teal': '#52B5A0',
        'warm-text': '#3D3D3D',
        'sub-text': '#6B7280',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['14px', { lineHeight: '1.65' }],
        'sm':   ['16px', { lineHeight: '1.7'  }],
        'base': ['18px', { lineHeight: '1.8'  }],
        'lg':   ['20px', { lineHeight: '1.7'  }],
        'xl':   ['22px', { lineHeight: '1.6'  }],
        '2xl':  ['26px', { lineHeight: '1.45' }],
        '3xl':  ['32px', { lineHeight: '1.35' }],
        '4xl':  ['40px', { lineHeight: '1.25' }],
        '5xl':  ['52px', { lineHeight: '1.15' }],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.13)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

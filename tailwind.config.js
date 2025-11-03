module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1e293b", // slate-800
        secondary: "#334155", // slate-700
        accent: "#3b82f6", // blue-500
        
        // Background Colors
        background: "#0f172a", // slate-900
        surface: "#1e293b", // slate-800
        
        // Text Colors
        'text-primary': "#f1f5f9", // slate-100
        'text-secondary': "#94a3b8", // slate-400
        
        // Status Colors
        success: "#10b981", // emerald-500
        warning: "#f59e0b", // amber-500
        error: "#ef4444", // red-500
        
        // Extended Slate Palette for Consistency
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617"
        },
        
        // Extended Blue Palette for Accents
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554"
        },
        
        // Extended Emerald Palette for Success States
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22"
        },
        
        // Extended Amber Palette for Warning States
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03"
        },
        
        // Extended Red Palette for Error States
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a"
        }
      },
      
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        data: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600'
      },
      
      boxShadow: {
        'command': '0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'status-safe': '0 0 8px rgba(16, 185, 129, 0.4)',
        'status-warning': '0 0 8px rgba(245, 158, 11, 0.4)',
        'status-critical': '0 0 8px rgba(239, 68, 68, 0.4)'
      },
      
      borderColor: {
        'subtle': 'rgba(148, 163, 184, 0.2)',
        'focus': 'rgba(59, 130, 246, 0.5)'
      },
      
      animation: {
        'breathing': 'breathing 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'alert-pulse': 'alertPulse 1s ease-in-out infinite',
        'update-pulse': 'updatePulse 5s ease-in-out infinite'
      },
      
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.02)' }
        },
        alertPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(239, 68, 68, 0.8)' }
        },
        updatePulse: {
          '0%, 90%, 100%': { opacity: '0', transform: 'scale(0.8)' },
          '5%, 15%': { opacity: '1', transform: 'scale(1.2)' }
        }
      },
      
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms'
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
      },
      
      zIndex: {
        'map-base': '10',
        'map-overlay': '20',
        'tooltip': '100',
        'modal': '1000'
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      
      borderRadius: {
        'command': '0.5rem',
        'elevated': '0.75rem'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
        },
        '.backdrop-blur-command': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(30, 41, 59, 0.8)'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
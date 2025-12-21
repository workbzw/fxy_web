import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 深邃专业蓝（信任、科技）
        primary: {
          50: '#EEF6FF',
          100: '#DCEEFF',
          200: '#B8DCFF',
          300: '#89C5FF',
          400: '#58A5FF',
          500: '#3483FA',
          600: '#1D64DF',
          700: '#1551C4',
          800: '#17439F',
          900: '#193A7D',
          950: '#11244C',
        },
        // 辅助色 - 明亮金黄（活力、创新、温暖）
        accent: {
          50: '#FFFBEB',
          100: '#FEF5D3',
          200: '#FDE88A',
          300: '#FCD851',
          400: '#FBC529',
          500: '#F5A50B',
          600: '#D97D06',
          700: '#B45509',
          800: '#92400E',
          900: '#783510',
          950: '#451A03',
        },
        // 中性灰度 - 优雅精致
        neutral: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        // 成功色 - 清新绿
        success: {
          light: '#86EFAC',
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        // 信息色 - 天空蓝
        info: {
          light: '#7DD3FC',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        // 警告色 - 琥珀橙
        warning: {
          light: '#FDE047',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        // 错误色 - 柔和红
        error: {
          light: '#FCA5A5',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 197, 41, 0.5), 0 0 40px rgba(251, 197, 41, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 197, 41, 0.7), 0 0 60px rgba(251, 197, 41, 0.3), 0 0 80px rgba(52, 131, 250, 0.2)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 精心设计的渐变背景
        'hero-gradient': 'linear-gradient(135deg, #EEF6FF 0%, #FFFBEB 40%, #FFFFFF 80%)',
        'primary-gradient': 'linear-gradient(135deg, #3483FA 0%, #1551C4 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FCD851 0%, #F5A50B 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FEF5D3 0%, #FDE88A 50%, #FFFFFF 100%)',
        'cool-gradient': 'linear-gradient(135deg, #DCEEFF 0%, #89C5FF 50%, #FFFFFF 100%)',
        // 网格背景
        'grid-pattern': 'linear-gradient(rgba(251, 197, 41, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 197, 41, 0.08) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(251, 197, 41, 0.12) 1px, transparent 1px)',
      },
      boxShadow: {
        // 柔和阴影
        'soft': '0 2px 15px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 20px 50px rgba(0, 0, 0, 0.08)',
        // 发光效果
        'glow-sm': '0 0 10px rgba(251, 197, 41, 0.3)',
        'glow-md': '0 0 20px rgba(251, 197, 41, 0.4), 0 0 40px rgba(251, 197, 41, 0.15)',
        'glow-lg': '0 0 30px rgba(251, 197, 41, 0.5), 0 0 60px rgba(251, 197, 41, 0.2)',
        'glow-accent': '0 0 25px rgba(251, 197, 41, 0.6), 0 0 50px rgba(52, 131, 250, 0.2)',
        'primary-glow': '0 0 25px rgba(52, 131, 250, 0.4)',
        // 内部阴影
        'inner-glow': 'inset 0 2px 20px rgba(251, 197, 41, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;

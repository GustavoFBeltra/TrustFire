/**
 * TrustFire App Theme
 * Centralized design tokens for consistent styling across the app
 */

export const Colors = {
  // Core Colors
  primary: '#f0413f',        // Primary Red - buttons, key actions, highlights
  primaryDark: '#1b1c1c',    // Primary Dark - background, header/nav, footer

  // Neutral Support Palette
  backgroundLight: '#f9f9f9',       // Clean screens, forms, cards
  backgroundDarkAlt: '#2a2b2b',     // Secondary dark panels
  cardSurface: '#ffffff',            // Card/surface with subtle shadow

  // Text Colors (Dark BG)
  textPrimaryDark: '#ffffff',        // Primary text on dark background
  textSecondaryDark: '#6c6c6c',      // Labels, subtext on dark

  // Text Colors (Light BG)
  textPrimaryLight: '#1b1c1c',       // Primary text on light background
  textSecondary: '#6c6c6c',          // Secondary text, labels
  textDisabled: '#a5a5a5',           // Disabled text

  // UI Element Colors
  border: '#dcdcdc',                 // Light border
  borderDark: '#2f2f2f',             // Dark mode border
  iconDefault: '#6c6c6c',            // Default icon color
  iconActive: '#f0413f',             // Active icon color

  // Dark Mode Variants
  darkMode: {
    background: '#1b1c1c',
    card: '#2a2b2b',
    textPrimary: '#f9f9f9',
    textSecondary: '#bbbbbb',
    accent: '#f0413f',
  },

  // Status Colors
  success: '#2ecc71',
  successBg: '#1a3d2a',
  error: '#e74c3c',
  warning: '#f39c12',
  info: '#3498db',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const BorderRadius = {
  sm: 6,
  md: 10,
  lg: 15,
  xl: 20,
  full: 999,
} as const;

export const Typography = {
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    huge: 40,
  },
  weights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
} as const;

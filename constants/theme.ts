/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const AppColors = {
  primary: '#6C63FF',

  heroStart: '#4B8EF0',
  heroEnd: '#7B5FDC',
  gradientBlueLight: '#5B9EF0',
  gradientCyanLight: '#7BC8F5',
  gradientPinkLight: '#FF6B9D',

  unpainted: '#9E9E9E',
  primed: '#FF9500',
  painting: '#4B7BEC',
  done: '#4CAF50',

  unpaintedBg: '#F5F5F5',
  primedBg: '#FFF3E0',
  paintingBg: '#E3F2FD',
  doneBg: '#E8F5E9',

  completedCard: '#4B7BEC',
  inProgressCard: '#5BA4F0',
  weeklyPurple: '#7B5FDC',
  weeklyPink: '#E5447D',

  progressGreen: '#4CAF50',
  progressPurple: '#9C27B0',
  progressOrange: '#FF9500',
  progressPinkBg: '#FCE4EC',
  progressPurpleBg: '#EDE7F6',

  rarityRare: '#2196F3',
  rarityEpicBg: '#F3E5F5',

  boxRed: '#E57373',
  boxBlue: '#5C6BC0',
  boxGreen: '#66BB6A',

  textPrimary: '#1A1A2E',
  textSecondary: '#888888',
  textMuted: '#AAAAAA',
  textLabel: '#666666',
  textBody: '#333333',

  white: '#FFFFFF',
  background: '#F5F6FA',
  card: '#FFFFFF',
  inputBg: '#F4F4F8',
  selectedBg: '#F0EEFF',

  border: '#EFEFEF',
  divider: '#F0F0F0',

  danger: '#E53935',

  darkBackground: '#0E121F',
  darkCard: 'rgba(255,255,255,0.06)',
  darkBorder: 'rgba(255,255,255,0.10)',
  darkText: '#FFFFFF',
  darkTextMuted: 'rgba(255,255,255,0.45)',
  darkTextSub: 'rgba(255,255,255,0.65)',

  shadow: '#000000',

  whiteAlpha20: 'rgba(255,255,255,0.20)',
  whiteAlpha25: 'rgba(255,255,255,0.25)',
  whiteAlpha30: 'rgba(255,255,255,0.30)',
  whiteAlpha70: 'rgba(255,255,255,0.70)',
  whiteAlpha80: 'rgba(255,255,255,0.80)',
  whiteAlpha85: 'rgba(255,255,255,0.85)',
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

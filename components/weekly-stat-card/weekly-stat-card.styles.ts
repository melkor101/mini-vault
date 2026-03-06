import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const weeklyStatCardStyles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    padding: 20,
    flex: 1,
    minHeight: 140,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 20,
    color: AppColors.white,
  },
  titleText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    marginBottom: 8,
  },
  countText: {
    color: AppColors.white,
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 44,
  },
  subtitleText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginTop: 4,
  },
});

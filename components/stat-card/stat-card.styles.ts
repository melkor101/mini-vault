import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const statCardStyles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    padding: 16,
    flex: 1,
  },
  title: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 13,
    marginBottom: 8,
  },
  count: {
    color: AppColors.white,
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 44,
  },
  percentage: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    marginTop: 4,
  },
});

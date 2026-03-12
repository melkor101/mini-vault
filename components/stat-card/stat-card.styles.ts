import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const statCardStyles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    padding: 16,
    flex: 1,
  },
  title: {
    color: AppColors.whiteAlpha85,
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
    color: AppColors.whiteAlpha70,
    fontSize: 12,
    marginTop: 4,
  },
});

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
    backgroundColor: AppColors.whiteAlpha20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  iconText: {
    fontSize: 20,
    color: AppColors.white,
  },
  titleText: {
    color: AppColors.whiteAlpha85,
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
    color: AppColors.whiteAlpha70,
    fontSize: 12,
    marginTop: 4,
  },
});

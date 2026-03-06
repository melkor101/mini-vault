import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const collectionHeroCardStyles = StyleSheet.create({
  gradient: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  label: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginBottom: 4,
  },
  count: {
    color: AppColors.white,
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 40,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 4,
    marginBottom: 16,
  },
  progressTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    borderRadius: 3,
    backgroundColor: AppColors.done,
  },
});

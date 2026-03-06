import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const statusDonutStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  donutOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  donutRing: {
    position: 'absolute',
  },
  donutHole: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  centerCount: {
    fontWeight: '700',
    color: AppColors.textPrimary,
    fontSize: 22,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendLabel: {
    fontSize: 11,
    color: AppColors.textLabel,
  },
});

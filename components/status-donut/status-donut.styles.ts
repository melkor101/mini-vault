import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

const DONUT_SIZE = 80;
const THICKNESS = 14;
const HOLE_SIZE = DONUT_SIZE - THICKNESS * 2;

export const statusDonutStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  donutOuter: {
    width: DONUT_SIZE,
    height: DONUT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  donutRing: {
    position: 'absolute',
    width: DONUT_SIZE,
    height: DONUT_SIZE,
    borderRadius: DONUT_SIZE / 2,
    borderWidth: THICKNESS,
    borderTopColor: AppColors.unpainted,
    borderRightColor: AppColors.primed,
    borderBottomColor: AppColors.painting,
    borderLeftColor: AppColors.done,
  },
  donutHole: {
    width: HOLE_SIZE,
    height: HOLE_SIZE,
    borderRadius: HOLE_SIZE / 2,
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

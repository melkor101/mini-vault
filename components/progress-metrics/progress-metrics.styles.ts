import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const progressMetricsStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: AppColors.progressPinkBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  metricRow: {
    marginBottom: 14,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  metricLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metricDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  metricLabel: {
    fontSize: 14,
    color: AppColors.textBody,
    fontWeight: '500',
  },
  metricPercent: {
    fontSize: 14,
    fontWeight: '700',
  },
  progressTrack: {
    height: 8,
    borderRadius: 4,
    backgroundColor: AppColors.divider,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
  },
});

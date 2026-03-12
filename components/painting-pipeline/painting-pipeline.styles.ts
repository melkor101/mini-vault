import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const paintingPipelineStyles = StyleSheet.create({
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
    backgroundColor: AppColors.progressPurpleBg,
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
  segmentBar: {
    flexDirection: 'row',
    height: 32,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  segment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentLabel: {
    color: AppColors.white,
    fontSize: 11,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statBox: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 2,
  },
  statCount: {
    fontSize: 22,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  statLabel: {
    fontSize: 11,
    color: AppColors.textLabel,
  },
  statPercent: {
    fontSize: 11,
    fontWeight: '600',
  },
});

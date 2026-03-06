import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 16,
    paddingBottom: 20,
  },
  appIconImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  midRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  midCard: {
    flex: 1,
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
  },
  midCardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.textPrimary,
    marginBottom: 12,
  },
  weeklyRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  boxesCount: {
    fontSize: 12,
    color: AppColors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  barsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    height: 56,
    justifyContent: 'center',
  },
  bar: {
    width: 20,
    borderRadius: 4,
  },
});

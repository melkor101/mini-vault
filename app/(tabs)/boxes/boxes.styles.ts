import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const boxesStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  appIconImage: {
    width: 36,
    height: 36,
    borderRadius: 10,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  titleSection: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: AppColors.textPrimary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    gap: 5,
  },
  outlineButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },
  filledButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    gap: 4,
  },
  filledButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.white,
  },
  pageSubtitle: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginTop: 4,
  },

  locationCard: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  locationIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: AppColors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationIcon: {
    fontSize: 20,
  },
  locationInfo: {
    flex: 1,
  },
  locationNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  locationName: {
    fontSize: 15,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  locationBoxCountBadge: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  locationBoxCountText: {
    fontSize: 11,
    color: AppColors.textSecondary,
    fontWeight: '500',
  },
  locationEmpty: {
    fontSize: 12,
    color: AppColors.textSecondary,
    fontStyle: 'italic',
  },
  locationDeleteBtn: {
    padding: 4,
  },
  locationDeleteIcon: {
    fontSize: 16,
    color: AppColors.textSecondary,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    marginTop: 6,
  },
  sectionIcon: {
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  sectionBadge: {
    backgroundColor: AppColors.textPrimary,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  sectionBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.white,
  },

  boxRow: {
    backgroundColor: AppColors.white,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  boxColorSquare: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  boxInfo: {
    flex: 1,
  },
  boxName: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginBottom: 3,
  },
  boxMiniCount: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  boxRowActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  boxDeleteBtn: {
    padding: 4,
  },
  boxDeleteIcon: {
    fontSize: 16,
    color: AppColors.danger,
  },
  boxChevron: {
    fontSize: 20,
    color: AppColors.textMuted,
  },
});

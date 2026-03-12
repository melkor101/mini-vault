import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const miniatureDetailStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  appBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appIconImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    gap: 5,
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.white,
  },

  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 6,
  },
  backIcon: {
    fontSize: 16,
    color: AppColors.textPrimary,
  },
  backLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },

  heroWrapper: {
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'visible',
    marginBottom: 20,
  },
  heroGradient: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },
  heroBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    position: 'absolute',
    top: 12,
    right: 12,
  },

  infoSection: {
    paddingHorizontal: 16,
  },
  miniatureName: {
    fontSize: 26,
    fontWeight: '800',
    color: AppColors.textPrimary,
    marginBottom: 10,
  },
  statusPill: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 5,
    marginBottom: 20,
  },
  statusPillText: {
    fontSize: 13,
    fontWeight: '600',
  },

  detailGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  detailCell: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: AppColors.white,
    borderRadius: 14,
    padding: 14,
    shadowColor: AppColors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  detailCellLabel: {
    fontSize: 11,
    color: AppColors.textSecondary,
    marginBottom: 6,
    fontWeight: '500',
  },
  detailCellIcon: {
    fontSize: 11,
  },
  detailCellValue: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },
});

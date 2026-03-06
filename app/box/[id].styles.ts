import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const boxItemStyles = StyleSheet.create({
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
    paddingBottom: 12,
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

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
  backIcon: {
    fontSize: 16,
    color: AppColors.textPrimary,
  },
  backLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },
  spacer: {
    flex: 1,
  },
  topBarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 5,
  },
  topBarButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },

  boxHero: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  boxColorSquare: {
    width: 64,
    height: 64,
    borderRadius: 16,
  },
  boxHeroInfo: {
    flex: 1,
  },
  boxHeroName: {
    fontSize: 26,
    fontWeight: '800',
    color: AppColors.textPrimary,
    marginBottom: 4,
  },
  boxHeroMeta: {
    fontSize: 13,
    color: AppColors.textSecondary,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.textPrimary,
    flex: 1,
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
  sectionAddLink: {
    fontSize: 13,
    color: AppColors.primary,
    fontWeight: '500',
  },

  nestedSection: {
    marginBottom: 24,
  },
  nestedEmpty: {
    borderWidth: 1,
    borderColor: AppColors.border,
    borderStyle: 'dashed',
    borderRadius: 14,
    paddingVertical: 32,
    alignItems: 'center',
    gap: 8,
  },
  nestedEmptyIcon: {
    fontSize: 28,
    color: AppColors.textSecondary,
  },
  nestedEmptyText: {
    fontSize: 13,
    color: AppColors.textSecondary,
  },

  miniaturesSection: {
    marginBottom: 12,
  },
  miniatureRow: {
    backgroundColor: AppColors.white,
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  miniatureInfo: {
    flex: 1,
  },
  miniatureName: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginBottom: 3,
  },
  miniatureMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  miniatureBrand: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: '600',
  },
  moveButton: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  moveButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
});

import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const rewardsStyles = StyleSheet.create({
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
    paddingBottom: 16,
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

  heroCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heroAchievementsLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroAchievementsIcon: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  heroAchievementsText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  levelBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  levelBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: AppColors.white,
  },
  heroXp: {
    fontSize: 42,
    fontWeight: '800',
    color: AppColors.white,
    marginBottom: 4,
  },
  heroProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heroProgressLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '500',
  },
  heroProgressPct: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressBarFill: {
    height: 6,
    backgroundColor: AppColors.white,
    borderRadius: 3,
  },
  heroStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heroStat: {
    alignItems: 'center',
    gap: 2,
  },
  heroStatValue: {
    fontSize: 20,
    fontWeight: '700',
    color: AppColors.white,
  },
  heroStatLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
  },
  heroStatDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 8,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  sectionHeaderIcon: {
    fontSize: 16,
    color: AppColors.textPrimary,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
  },

  achievementCard: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: AppColors.inputBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementIconText: {
    fontSize: 24,
  },
  achievementBody: {
    flex: 1,
    justifyContent: 'center',
    gap: 2,
  },
  achievementTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  achievementName: {
    fontSize: 15,
    fontWeight: '700',
    color: AppColors.textPrimary,
    flex: 1,
    marginRight: 8,
  },
  achievementDesc: {
    fontSize: 12,
    color: AppColors.textSecondary,
    marginBottom: 8,
    lineHeight: 17,
  },
  achievementTagsRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  xpTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.primedBg,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
    gap: 3,
  },
  xpTagIcon: {
    fontSize: 10,
    color: AppColors.primed,
  },
  xpTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: AppColors.primed,
  },
  categoryTag: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  categoryTagText: {
    fontSize: 11,
    color: AppColors.textLabel,
  },

  rarityBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  rarityBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
});

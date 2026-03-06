import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const recentActivityListStyles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  viewAll: {
    fontSize: 13,
    color: AppColors.heroStart,
    fontWeight: '500',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 12,
  },
  separator: {
    height: 1,
    backgroundColor: AppColors.divider,
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.textPrimary,
    marginBottom: 2,
  },
  itemBrand: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  statusDot: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
});

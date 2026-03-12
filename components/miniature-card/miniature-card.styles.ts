import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const miniatureCardStyles = StyleSheet.create({
  card: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    shadowColor: AppColors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  thumbnailWrapper: {
    width: 80,
    height: 80,
    position: 'relative',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: 6,
    position: 'absolute',
    bottom: -6,
    left: -6,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.textPrimary,
    marginBottom: 2,
  },
  brand: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginBottom: 2,
  },
  type: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  statusPill: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 4,
    marginTop: 6,
  },
  statusLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});

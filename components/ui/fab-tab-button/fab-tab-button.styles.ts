import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const fabTabButtonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  icon: {
    color: AppColors.white,
    fontSize: 38,
    fontWeight: '500',
    lineHeight: 42,
    marginTop: -2,
  },
});

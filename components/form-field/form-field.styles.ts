import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const formFieldStyles = StyleSheet.create({
  group: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  error: {
    fontSize: 12,
    color: AppColors.danger,
    marginTop: 2,
  },
});

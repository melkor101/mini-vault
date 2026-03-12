import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const layoutStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.darkBackground,
  },
});

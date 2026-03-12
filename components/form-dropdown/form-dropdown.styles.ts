import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const formDropdownStyles = StyleSheet.create({
  pickerButton: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 14,
    color: AppColors.textBody,
  },
  pickerButtonTextPlaceholder: {
    color: AppColors.textMuted,
  },
  pickerChevron: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  dropdown: {
    backgroundColor: AppColors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppColors.border,
    marginTop: 4,
    overflow: 'hidden',
    shadowColor: AppColors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownItem: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.inputBg,
  },
  dropdownItemSelected: {
    backgroundColor: AppColors.selectedBg,
  },
  dropdownItemText: {
    fontSize: 14,
    color: AppColors.textBody,
  },
  dropdownItemTextSelected: {
    color: AppColors.primary,
    fontWeight: '600',
  },
});

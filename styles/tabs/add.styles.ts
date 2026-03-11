import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/theme';

export const addStyles = StyleSheet.create({
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
    paddingBottom: 8,
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
  hero: {
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 20,
  },
  heroIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: AppColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heroIconText: {
    fontSize: 36,
    color: AppColors.white,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: AppColors.primary,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: AppColors.textSecondary,
  },
  formCard: {
    backgroundColor: AppColors.white,
    borderRadius: 16,
    padding: 20,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  fieldGroup: {
    gap: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  input: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: AppColors.textBody,
  },
  textArea: {
    backgroundColor: AppColors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: AppColors.textBody,
    height: 90,
    textAlignVertical: 'top',
  },
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
    shadowColor: '#000',
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
  actions: {
    gap: 12,
  },
  submitButton: {
    backgroundColor: AppColors.primary,
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  submitButtonIcon: {
    fontSize: 18,
    lineHeight: 18,
    color: AppColors.white,
    fontWeight: '700',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: AppColors.white,
  },
  cancelButton: {
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.textSecondary,
  },
});


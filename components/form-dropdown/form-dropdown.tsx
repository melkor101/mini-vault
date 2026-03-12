import { View, Text, TouchableOpacity } from 'react-native';
import { formDropdownStyles } from './form-dropdown.styles';

type Option = { value: string; label: string };

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const FormDropdown = ({ options, value, onChange, placeholder, isOpen, onToggle }: Props) => {
  const label = value ? (options.find((o) => o.value === value)?.label ?? value) : null;

  return (
    <>
      <TouchableOpacity style={formDropdownStyles.pickerButton} onPress={onToggle} activeOpacity={0.7}>
        <Text style={[formDropdownStyles.pickerButtonText, !label && formDropdownStyles.pickerButtonTextPlaceholder]}>
          {label ?? placeholder}
        </Text>
        <Text style={formDropdownStyles.pickerChevron}>{isOpen ? '▲' : '▾'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={formDropdownStyles.dropdown}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[formDropdownStyles.dropdownItem, value === option.value && formDropdownStyles.dropdownItemSelected]}
              onPress={() => onChange(option.value)}
              activeOpacity={0.7}
            >
              <Text style={[formDropdownStyles.dropdownItemText, value === option.value && formDropdownStyles.dropdownItemTextSelected]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
};

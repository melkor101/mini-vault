import { View, Text } from 'react-native';
import { formFieldStyles } from './form-field.styles';

type Props = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

export const FormField = ({ label, error, children }: Props) => {
  return (
    <View style={formFieldStyles.group}>
      <Text style={formFieldStyles.label}>{label}</Text>
      {children}
      {error && <Text style={formFieldStyles.error}>{error}</Text>}
    </View>
  );
};

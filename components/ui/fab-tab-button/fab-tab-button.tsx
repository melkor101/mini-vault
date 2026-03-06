import { TouchableOpacity, Text, View } from 'react-native';
import { type BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { fabTabButtonStyles } from './fab-tab-button.styles';

export const FabTabButton = ({ onPress, onLongPress }: BottomTabBarButtonProps) => {
  return (
    <View style={fabTabButtonStyles.container}>
      <TouchableOpacity
        style={fabTabButtonStyles.button}
        onPress={onPress ?? undefined}
        onLongPress={onLongPress ?? undefined}
        activeOpacity={0.8}
      >
        <Text style={fabTabButtonStyles.icon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { weeklyStatCardStyles } from './weekly-stat-card.styles';

type Props = {
  icon: string;
  title: string;
  count: number;
  subtitle: string;
  gradientColors: [string, string];
};

export const WeeklyStatCard = ({ icon, title, count, subtitle, gradientColors }: Props) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={weeklyStatCardStyles.gradient}
    >
      <View style={weeklyStatCardStyles.iconCircle}>
        <Text style={weeklyStatCardStyles.iconText}>{icon}</Text>
      </View>
      <Text style={weeklyStatCardStyles.titleText}>{title}</Text>
      <Text style={weeklyStatCardStyles.countText}>{count}</Text>
      <Text style={weeklyStatCardStyles.subtitleText}>{subtitle}</Text>
    </LinearGradient>
  );
};

import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { statCardStyles } from './stat-card.styles';

type Props = {
  title: string;
  count: number;
  percentage: number;
  gradientColors: [string, string];
};

export const StatCard = ({ title, count, percentage, gradientColors }: Props) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={statCardStyles.gradient}
    >
      <Text style={statCardStyles.title}>{title}</Text>
      <Text style={statCardStyles.count}>{count}</Text>
      <Text style={statCardStyles.percentage}>{percentage}% of total</Text>
    </LinearGradient>
  );
};

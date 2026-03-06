import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '@/constants/theme';
import { collectionHeroCardStyles } from './collection-hero-card.styles';

type Props = {
  total: number;
  painted: number;
  inProgress: number;
};

export const CollectionHeroCard = ({ total, painted, inProgress }: Props) => {
  const progress = total > 0 ? painted / total : 0;

  return (
    <LinearGradient
      colors={[AppColors.heroStart, AppColors.heroEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={collectionHeroCardStyles.gradient}
    >
      <Text style={collectionHeroCardStyles.label}>Your Collection</Text>
      <Text style={collectionHeroCardStyles.count}>{total} Miniatures</Text>
      <Text style={collectionHeroCardStyles.subtitle}>
        {painted} painted · {inProgress} in progress
      </Text>
      <View style={collectionHeroCardStyles.progressTrack}>
        <View style={[collectionHeroCardStyles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
    </LinearGradient>
  );
};

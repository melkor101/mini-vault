import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '@/constants/theme';
import { miniatureCardStyles } from './miniature-card.styles';

type MiniatureStatus = 'backlog' | 'completed' | 'inProgress' | 'primed' | 'unpainted';

type Props = {
  name: string;
  brand: string;
  type: string;
  status: MiniatureStatus;
  thumbnailColors: [string, string];
  badgeColor: string;
  image?: string;
  onPress?: () => void;
};

const STATUS_CONFIG = {
  backlog:    { label: 'Backlog',     icon: '◫',  color: AppColors.unpainted, bg: AppColors.unpaintedBg },
  completed:  { label: 'Completed',   icon: '✓', color: AppColors.done,      bg: AppColors.doneBg },
  inProgress: { label: 'In Progress', icon: '✎', color: AppColors.painting,  bg: AppColors.paintingBg },
  primed:     { label: 'Primed',      icon: '🔥', color: AppColors.primed,    bg: AppColors.primedBg },
  unpainted:  { label: 'Unpainted',   icon: '○',  color: AppColors.unpainted, bg: AppColors.unpaintedBg },
};

export const MiniatureCard = ({ name, brand, type, status, thumbnailColors, badgeColor, image, onPress }: Props) => {
  const statusCfg = STATUS_CONFIG[status];

  return (
    <TouchableOpacity style={miniatureCardStyles.card} onPress={onPress} activeOpacity={0.75}>
      <View style={miniatureCardStyles.thumbnailWrapper}>
        {image ? (
          <Image source={{ uri: image }} style={miniatureCardStyles.thumbnail} />
        ) : (
          <LinearGradient
            colors={thumbnailColors}
            style={miniatureCardStyles.thumbnail}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          />
        )}
        <View style={[miniatureCardStyles.badge, { backgroundColor: badgeColor }]} />
      </View>

      <View style={miniatureCardStyles.info}>
        <Text style={miniatureCardStyles.name}>{name}</Text>
        <Text style={miniatureCardStyles.brand}>{brand}</Text>
        <Text style={miniatureCardStyles.type}>{type}</Text>
        <View style={[miniatureCardStyles.statusPill, { backgroundColor: statusCfg.bg }]}>
          <Text style={[miniatureCardStyles.statusLabel, { color: statusCfg.color }]}>
            {statusCfg.icon} {statusCfg.label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

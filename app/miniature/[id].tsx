import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '@/constants/theme';
import { useMiniatures } from '@/hooks/use-miniatures';
import { miniatureDetailStyles } from '@/styles/screens/miniature.styles';


const STATUS_CONFIG = {
  backlog:    { label: 'Backlog',     icon: '◫',  color: AppColors.unpainted, bg: AppColors.unpaintedBg },
  completed:  { label: 'Completed',   icon: '✓', color: AppColors.done,      bg: AppColors.doneBg },
  inProgress: { label: 'In Progress', icon: '✎', color: AppColors.painting,  bg: AppColors.paintingBg },
  primed:     { label: 'Primed',      icon: '🔥', color: AppColors.primed,    bg: AppColors.primedBg },
  unpainted:  { label: 'Unpainted',   icon: '○',  color: AppColors.unpainted, bg: AppColors.unpaintedBg },
};

const MiniatureDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const miniatures = useMiniatures();
  const miniature = miniatures.find((m) => m.id === id);

  if (!miniature) return null;

  const statusCfg = STATUS_CONFIG[miniature.status];

  return (
    <SafeAreaView style={miniatureDetailStyles.screen} edges={['top']}>
      <ScrollView
        style={miniatureDetailStyles.screen}
        contentContainerStyle={miniatureDetailStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={miniatureDetailStyles.topBar}>
          <View style={miniatureDetailStyles.appBrand}>
            <Image source={require('@/assets/images/logo.png')} style={miniatureDetailStyles.appIconImage} />
            <Text style={miniatureDetailStyles.appTitle}>MiniVault</Text>
          </View>
          <TouchableOpacity style={miniatureDetailStyles.editButton} activeOpacity={0.8}>
            <Text style={miniatureDetailStyles.editButtonText}>✎ Edit</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={miniatureDetailStyles.backRow}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={miniatureDetailStyles.backIcon}>←</Text>
          <Text style={miniatureDetailStyles.backLabel}>Details</Text>
        </TouchableOpacity>

        <View style={miniatureDetailStyles.heroWrapper}>
          {miniature.image ? (
            <Image source={{ uri: miniature.image }} style={miniatureDetailStyles.heroGradient} />
          ) : (
            <LinearGradient
              colors={miniature.thumbnailColors}
              style={miniatureDetailStyles.heroGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          )}
          <View style={[miniatureDetailStyles.heroBadge, { backgroundColor: miniature.badgeColor }]} />
        </View>

        <View style={miniatureDetailStyles.infoSection}>
          <Text style={miniatureDetailStyles.miniatureName}>{miniature.name}</Text>

          <View style={[miniatureDetailStyles.statusPill, { backgroundColor: statusCfg.bg }]}>
            <Text style={[miniatureDetailStyles.statusPillText, { color: statusCfg.color }]}>
              {statusCfg.icon} {statusCfg.label}
            </Text>
          </View>

          <View style={miniatureDetailStyles.detailGrid}>
            <View style={miniatureDetailStyles.detailCell}>
              <Text style={miniatureDetailStyles.detailCellLabel}>Manufacturer</Text>
              <Text style={miniatureDetailStyles.detailCellValue}>{miniature.brand}</Text>
            </View>
            <View style={miniatureDetailStyles.detailCell}>
              <Text style={miniatureDetailStyles.detailCellLabel}>Type</Text>
              <Text style={miniatureDetailStyles.detailCellValue}>{miniature.type}</Text>
            </View>
            <View style={miniatureDetailStyles.detailCell}>
              <Text style={miniatureDetailStyles.detailCellLabel}>📦 Storage Box</Text>
              <Text style={miniatureDetailStyles.detailCellValue}>{miniature.storageBox}</Text>
            </View>
            <View style={miniatureDetailStyles.detailCell}>
              <Text style={miniatureDetailStyles.detailCellLabel}>📅 Last Updated</Text>
              <Text style={miniatureDetailStyles.detailCellValue}>{miniature.lastUpdated}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MiniatureDetailScreen;

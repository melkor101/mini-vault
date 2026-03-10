import { ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { AppColors } from '@/constants/theme';
import { useRewards } from '@/hooks/use-rewards';
import { rewardsStyles } from '@/styles/tabs/rewards.styles';

type Rarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';

type Achievement = {
  id: string;
  icon: string;
  name: string;
  description: string;
  xp: number;
  rarity: Rarity;
  category: string;
};

const RARITY_CONFIG: Record<Rarity, { color: string; bg: string }> = {
  Common:    { color: AppColors.done,          bg: AppColors.doneBg },
  Rare:      { color: AppColors.rarityRare,    bg: AppColors.paintingBg },
  Epic:      { color: AppColors.progressPurple, bg: AppColors.rarityEpicBg },
  Legendary: { color: AppColors.primed,        bg: AppColors.primedBg },
};

const TOTAL_XP = 6000;

const unlockedAchievements: Achievement[] = [
  {
    id: '1',
    icon: '🖌️',
    name: 'First Stroke',
    description: 'Complete your very first miniature.',
    xp: 50,
    rarity: 'Common',
    category: 'Painter',
  },
  {
    id: '2',
    icon: '📦',
    name: 'The Beginning',
    description: 'Add your first miniature to the Collection.',
    xp: 30,
    rarity: 'Common',
    category: 'Collection',
  },
  {
    id: '3',
    icon: '⚗️',
    name: 'Full Pipeline',
    description: 'Have at least one miniature in every paint stage.',
    xp: 100,
    rarity: 'Epic',
    category: 'Variety',
  },
  {
    id: '4',
    icon: '🗃️',
    name: 'Box It Up',
    description: 'Assign a miniature to a storage box.',
    xp: 25,
    rarity: 'Common',
    category: 'Organisation',
  },
  {
    id: '5',
    icon: '⚡',
    name: 'Speed Painter',
    description: 'Complete 3 miniatures in a single week.',
    xp: 150,
    rarity: 'Rare',
    category: 'Painter',
  },
  {
    id: '6',
    icon: '🏆',
    name: 'Collector',
    description: 'Add 10 miniatures to your collection.',
    xp: 75,
    rarity: 'Common',
    category: 'Collection',
  },
  {
    id: '7',
    icon: '🌟',
    name: 'Veteran',
    description: 'Reach level 4.',
    xp: 200,
    rarity: 'Rare',
    category: 'Milestone',
  },
];

const TOTAL_COUNT = 18;

const RewardsScreen = () => {
  const rewards = useRewards();
  const CURRENT_XP = rewards?.xp ?? 0;
  const LEVEL = rewards?.level ?? 1;
  const unlockedIds = rewards?.unlockedIds ?? [];
  const PROGRESS_PCT = Math.round((CURRENT_XP / TOTAL_XP) * 100);
  const UNLOCKED_COUNT = unlockedIds.length;
  const REMAINING_COUNT = TOTAL_COUNT - UNLOCKED_COUNT;

  return (
    <SafeAreaView style={rewardsStyles.screen} edges={['top']}>
      <ScrollView
        style={rewardsStyles.screen}
        contentContainerStyle={rewardsStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={rewardsStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={rewardsStyles.appIconImage} />
          <Text style={rewardsStyles.appTitle}>MiniVault</Text>
        </View>

        <LinearGradient
          colors={[AppColors.primed, AppColors.weeklyPink, AppColors.heroEnd]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={rewardsStyles.heroCard}
        >
          <View style={rewardsStyles.heroTopRow}>
            <View style={rewardsStyles.heroAchievementsLabel}>
              <Text style={rewardsStyles.heroAchievementsIcon}>⭐</Text>
              <Text style={rewardsStyles.heroAchievementsText}>Achievements</Text>
            </View>
            <View style={rewardsStyles.levelBadge}>
              <Text style={rewardsStyles.levelBadgeText}>{LEVEL} LVL</Text>
            </View>
          </View>

          <Text style={rewardsStyles.heroXp}>{CURRENT_XP.toLocaleString()} XP</Text>

          <View style={rewardsStyles.heroProgressRow}>
            <Text style={rewardsStyles.heroProgressLabel}>Veteran</Text>
            <Text style={rewardsStyles.heroProgressPct}>{PROGRESS_PCT}% to max</Text>
          </View>
          <View style={rewardsStyles.progressBarTrack}>
            <View style={[rewardsStyles.progressBarFill, { width: `${PROGRESS_PCT}%` }]} />
          </View>

          <View style={rewardsStyles.heroStatsRow}>
            <View style={rewardsStyles.heroStat}>
              <Text style={rewardsStyles.heroStatValue}>{UNLOCKED_COUNT}</Text>
              <Text style={rewardsStyles.heroStatLabel}>Unlocked</Text>
            </View>
            <View style={rewardsStyles.heroStatDivider} />
            <View style={rewardsStyles.heroStat}>
              <Text style={rewardsStyles.heroStatValue}>{REMAINING_COUNT}</Text>
              <Text style={rewardsStyles.heroStatLabel}>Remaining</Text>
            </View>
            <View style={rewardsStyles.heroStatDivider} />
            <View style={rewardsStyles.heroStat}>
              <Text style={rewardsStyles.heroStatValue}>{TOTAL_COUNT}</Text>
              <Text style={rewardsStyles.heroStatLabel}>Total</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={rewardsStyles.sectionHeader}>
          <Text style={rewardsStyles.sectionHeaderIcon}>⊙</Text>
          <Text style={rewardsStyles.sectionHeaderText}>
            Unlocked ({UNLOCKED_COUNT})
          </Text>
        </View>

        {unlockedAchievements.map((item) => {
          const rarity = RARITY_CONFIG[item.rarity];
          return (
            <View key={item.id} style={rewardsStyles.achievementCard}>
              <View style={rewardsStyles.achievementIcon}>
                <Text style={rewardsStyles.achievementIconText}>{item.icon}</Text>
              </View>
              <View style={rewardsStyles.achievementBody}>
                <View style={rewardsStyles.achievementTitleRow}>
                  <Text style={rewardsStyles.achievementName}>{item.name}</Text>
                  <View style={[rewardsStyles.rarityBadge, { backgroundColor: rarity.bg }]}>
                    <Text style={[rewardsStyles.rarityBadgeText, { color: rarity.color }]}>
                      {item.rarity}
                    </Text>
                  </View>
                </View>
                <Text style={rewardsStyles.achievementDesc}>{item.description}</Text>
                <View style={rewardsStyles.achievementTagsRow}>
                  <View style={rewardsStyles.xpTag}>
                    <Text style={rewardsStyles.xpTagIcon}>⚡</Text>
                    <Text style={rewardsStyles.xpTagText}>{item.xp} XP</Text>
                  </View>
                  <View style={rewardsStyles.categoryTag}>
                    <Text style={rewardsStyles.categoryTagText}>{item.category}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RewardsScreen;

import { ScrollView, View, Text, SafeAreaView, Image } from 'react-native';
import { CollectionHeroCard } from '@/components/collection-hero-card/collection-hero-card';
import { StatCard } from '@/components/stat-card/stat-card';
import { StatusDonut } from '@/components/status-donut/status-donut';
import { PaintingPipeline } from '@/components/painting-pipeline/painting-pipeline';
import { ProgressMetrics } from '@/components/progress-metrics/progress-metrics';
import { WeeklyStatCard } from '@/components/weekly-stat-card/weekly-stat-card';
import { RecentActivityList } from '@/components/recent-activity-list/recent-activity-list';
import { AppColors } from '@/constants/theme';
import { indexStyles } from './index.styles';

const mockData = {
  total: 4,
  painted: 1,
  inProgress: 1,
  pipeline: { unpainted: 1, primed: 1, painting: 1, done: 1 },
  weeklyUpdated: 4,
  weeklyFinished: 1,
  recentActivity: [
    {
      name: 'Necron Warriors',
      brand: 'Games Workshop',
      color: AppColors.unpainted,
      statusColor: AppColors.done,
    },
    {
      name: 'Dragon Miniature',
      brand: 'Reaper Miniatures',
      color: AppColors.primed,
      statusColor: AppColors.painting,
    },
    {
      name: 'Ork Boyz Squad',
      brand: 'Games Workshop',
      color: AppColors.painting,
      statusColor: AppColors.weeklyPink,
    },
    {
      name: 'Space Marine Captain',
      brand: 'Games Workshop',
      color: AppColors.done,
      statusColor: AppColors.weeklyPink,
    },
  ],
};

const BOX_BARS = [
  { height: 40, color: AppColors.painting },
  { height: 56, color: AppColors.primed },
  { height: 28, color: AppColors.done },
];

const HomeScreen = () => {
  const { total, painted, inProgress, pipeline } = mockData;
  const pct = (n: number) => (total > 0 ? Math.round((n / total) * 100) : 0);

  return (
    <SafeAreaView style={indexStyles.screen}>
      <ScrollView
        style={indexStyles.screen}
        contentContainerStyle={indexStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={indexStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={indexStyles.appIconImage} />
          <Text style={indexStyles.appTitle}>MiniVault</Text>
        </View>

        <CollectionHeroCard total={total} painted={painted} inProgress={inProgress} />

        <View style={indexStyles.statsRow}>
          <StatCard
            title="Completed"
            count={painted}
            percentage={pct(painted)}
            gradientColors={[AppColors.completedCard, AppColors.gradientBlueLight]}
          />
          <StatCard
            title="In Progress"
            count={inProgress}
            percentage={pct(inProgress)}
            gradientColors={[AppColors.inProgressCard, AppColors.gradientCyanLight]}
          />
        </View>

        <View style={indexStyles.midRow}>
          <View style={indexStyles.midCard}>
            <Text style={indexStyles.midCardTitle}>By Status</Text>
            <StatusDonut
              raw={pipeline.unpainted}
              primed={pipeline.primed}
              wip={pipeline.painting}
              done={pipeline.done}
            />
          </View>
          <View style={indexStyles.midCard}>
            <Text style={indexStyles.midCardTitle}>Boxes</Text>
            <View style={indexStyles.barsRow}>
              {BOX_BARS.map((bar, i) => (
                <View
                  key={i}
                  style={[indexStyles.bar, { height: bar.height, backgroundColor: bar.color }]}
                />
              ))}
            </View>
            <Text style={indexStyles.boxesCount}>3 containers</Text>
          </View>
        </View>

        <PaintingPipeline
          unpainted={pipeline.unpainted}
          primed={pipeline.primed}
          painting={pipeline.painting}
          done={pipeline.done}
          total={total}
        />

        <ProgressMetrics
          fullyPainted={pct(painted)}
          paintStarted={pct(painted + inProgress)}
          primedReady={pct(pipeline.primed)}
        />

        <View style={indexStyles.weeklyRow}>
          <WeeklyStatCard
            icon="⏰"
            title="Updated This Week"
            count={mockData.weeklyUpdated}
            subtitle="miniatures"
            gradientColors={[AppColors.weeklyPurple, AppColors.primary]}
          />
          <WeeklyStatCard
            icon="◎"
            title="Finished This Week"
            count={mockData.weeklyFinished}
            subtitle="completed"
            gradientColors={[AppColors.weeklyPink, AppColors.gradientPinkLight]}
          />
        </View>

        <RecentActivityList items={mockData.recentActivity} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

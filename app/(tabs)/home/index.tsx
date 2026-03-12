import { ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CollectionHeroCard } from '@/components/collection-hero-card/collection-hero-card';
import { StatCard } from '@/components/stat-card/stat-card';
import { StatusDonut } from '@/components/status-donut/status-donut';
import { PaintingPipeline } from '@/components/painting-pipeline/painting-pipeline';
import { ProgressMetrics } from '@/components/progress-metrics/progress-metrics';
import { WeeklyStatCard } from '@/components/weekly-stat-card/weekly-stat-card';
import { RecentActivityList } from '@/components/recent-activity-list/recent-activity-list';
import { AppColors } from '@/constants/theme';
import { useMiniatures } from '@/hooks/use-miniatures';
import { homeStyles } from '@/styles/tabs/home.styles';

const STATUS_COLORS: Record<string, string> = {
  backlog: AppColors.textSecondary,
  completed: AppColors.done,
  inProgress: AppColors.painting,
  primed: AppColors.primed,
  unpainted: AppColors.unpainted,
};

const BOX_BARS = [
  { height: 40, color: AppColors.painting },
  { height: 56, color: AppColors.primed },
  { height: 28, color: AppColors.done },
];

const HomeScreen = () => {
  const miniatures = useMiniatures();

  const total = miniatures.length;
  const painted = miniatures.filter((m) => m.status === 'completed').length;
  const inProgress = miniatures.filter((m) => m.status === 'inProgress').length;
  const pipeline = {
    backlog: miniatures.filter((m) => m.status === 'backlog').length,
    unpainted: miniatures.filter((m) => m.status === 'unpainted').length,
    primed: miniatures.filter((m) => m.status === 'primed').length,
    painting: miniatures.filter((m) => m.status === 'inProgress').length,
    done: miniatures.filter((m) => m.status === 'completed').length,
  };
  const recentActivity = [...miniatures]
    .reverse()
    .slice(0, 4)
    .map((m) => ({
      id: m.id,
      name: m.name,
      brand: m.brand,
      color: STATUS_COLORS[m.status] ?? AppColors.unpainted,
      statusColor: STATUS_COLORS[m.status] ?? AppColors.unpainted,
    }));

  const pct = (n: number) => (total > 0 ? Math.round((n / total) * 100) : 0);

  return (
    <SafeAreaView style={homeStyles.screen} edges={['top']}>
      <ScrollView
        style={homeStyles.screen}
        contentContainerStyle={homeStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={homeStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={homeStyles.appIconImage} />
          <Text style={homeStyles.appTitle}>MiniVault</Text>
        </View>

        <CollectionHeroCard total={total} painted={painted} inProgress={inProgress} />

        <View style={homeStyles.statsRow}>
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

        <View style={homeStyles.midRow}>
          <View style={homeStyles.midCard}>
            <Text style={homeStyles.midCardTitle}>By Status</Text>
            <StatusDonut
              raw={pipeline.unpainted}
              primed={pipeline.primed}
              wip={pipeline.painting}
              done={pipeline.done}
            />
          </View>
          <View style={homeStyles.midCard}>
            <Text style={homeStyles.midCardTitle}>Boxes</Text>
            <View style={homeStyles.barsRow}>
              {BOX_BARS.map((bar, i) => (
                <View
                  key={i}
                  style={[homeStyles.bar, { height: bar.height, backgroundColor: bar.color }]}
                />
              ))}
            </View>
            <Text style={homeStyles.boxesCount}>3 containers</Text>
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

        <View style={homeStyles.weeklyRow}>
          <WeeklyStatCard
            icon="⏰"
            title="Updated This Week"
            count={total}
            subtitle="miniatures"
            gradientColors={[AppColors.weeklyPurple, AppColors.primary]}
          />
          <WeeklyStatCard
            icon="◎"
            title="Finished This Week"
            count={painted}
            subtitle="completed"
            gradientColors={[AppColors.weeklyPink, AppColors.gradientPinkLight]}
          />
        </View>

        <RecentActivityList items={recentActivity} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

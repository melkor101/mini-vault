import { View, Text } from 'react-native';
import { AppColors } from '@/constants/theme';
import { progressMetricsStyles } from './progress-metrics.styles';

type Props = {
  fullyPainted: number;
  paintStarted: number;
  primedReady: number;
};

const METRICS = [
  {
    key: 'fullyPainted' as const,
    label: 'Fully Painted',
    color: AppColors.progressGreen,
    icon: '●',
  },
  {
    key: 'paintStarted' as const,
    label: 'Paint Started',
    color: AppColors.progressPurple,
    icon: '◎',
  },
  {
    key: 'primedReady' as const,
    label: 'Primed & Ready',
    color: AppColors.progressOrange,
    icon: '⚡',
  },
];

export const ProgressMetrics = ({ fullyPainted, paintStarted, primedReady }: Props) => {
  const values = { fullyPainted, paintStarted, primedReady };

  return (
    <View style={progressMetricsStyles.container}>
      <View style={progressMetricsStyles.header}>
        <View style={progressMetricsStyles.iconCircle}>
          <Text style={progressMetricsStyles.iconText}>◎</Text>
        </View>
        <Text style={progressMetricsStyles.title}>Progress Metrics</Text>
      </View>

      {METRICS.map(({ key, label, color }) => (
        <View key={key} style={progressMetricsStyles.metricRow}>
          <View style={progressMetricsStyles.metricHeader}>
            <View style={progressMetricsStyles.metricLabelRow}>
              <View style={[progressMetricsStyles.metricDot, { backgroundColor: color }]} />
              <Text style={progressMetricsStyles.metricLabel}>{label}</Text>
            </View>
            <Text style={[progressMetricsStyles.metricPercent, { color }]}>{values[key]}%</Text>
          </View>
          <View style={progressMetricsStyles.progressTrack}>
            <View
              style={[
                progressMetricsStyles.progressFill,
                { width: `${values[key]}%`, backgroundColor: color },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

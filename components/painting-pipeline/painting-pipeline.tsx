import { View, Text } from 'react-native';
import { AppColors } from '@/constants/theme';
import { paintingPipelineStyles } from './painting-pipeline.styles';

type Props = {
  unpainted: number;
  primed: number;
  painting: number;
  done: number;
  total: number;
};

const SEGMENTS = [
  { key: 'unpainted' as const, label: 'Unpainted', color: AppColors.unpainted },
  { key: 'primed' as const,    label: 'Primed',    color: AppColors.primed },
  { key: 'painting' as const,  label: 'Painting',  color: AppColors.painting },
  { key: 'done' as const,      label: 'Done',      color: AppColors.done },
];

const BG_COLORS = {
  unpainted: AppColors.unpaintedBg,
  primed:    AppColors.primedBg,
  painting:  AppColors.paintingBg,
  done:      AppColors.doneBg,
};

export const PaintingPipeline = ({ unpainted, primed, painting, done, total }: Props) => {
  const values = { unpainted, primed, painting, done };
  const pct = (n: number) => (total > 0 ? Math.round((n / total) * 100) : 0);

  return (
    <View style={paintingPipelineStyles.container}>
      <View style={paintingPipelineStyles.header}>
        <View style={paintingPipelineStyles.iconCircle}>
          <Text style={paintingPipelineStyles.iconText}>~</Text>
        </View>
        <Text style={paintingPipelineStyles.title}>Painting Pipeline</Text>
      </View>

      <View style={paintingPipelineStyles.segmentBar}>
        {SEGMENTS.map(({ key, label, color }) => {
          const flex = values[key];
          if (flex === 0) return null;
          return (
            <View key={key} style={[paintingPipelineStyles.segment, { flex, backgroundColor: color }]}>
              <Text style={paintingPipelineStyles.segmentLabel}>{pct(flex)}%</Text>
            </View>
          );
        })}
      </View>

      <View style={paintingPipelineStyles.statsRow}>
        {SEGMENTS.map(({ key, label, color }) => (
          <View key={key} style={[paintingPipelineStyles.statBox, { backgroundColor: BG_COLORS[key] }]}>
            <Text style={[paintingPipelineStyles.statCount, { color }]}>{values[key]}</Text>
            <Text style={paintingPipelineStyles.statLabel}>{label}</Text>
            <Text style={[paintingPipelineStyles.statPercent, { color }]}>{pct(values[key])}%</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

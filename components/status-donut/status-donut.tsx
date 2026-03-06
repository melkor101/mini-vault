import { View, Text } from 'react-native';
import { AppColors } from '@/constants/theme';
import { statusDonutStyles } from './status-donut.styles';

type Props = {
  raw: number;
  primed: number;
  wip: number;
  done: number;
};

const DONUT_SIZE = 80;
const THICKNESS = 14;
const HOLE_SIZE = DONUT_SIZE - THICKNESS * 2;

const LEGEND = [
  { label: 'Raw', color: AppColors.unpainted },
  { label: 'Primed', color: AppColors.primed },
  { label: 'WIP', color: AppColors.painting },
  { label: 'Done', color: AppColors.done },
];

export const StatusDonut = ({ raw, primed, wip, done }: Props) => {
  const total = raw + primed + wip + done;

  return (
    <View style={statusDonutStyles.container}>
      <View style={[statusDonutStyles.donutOuter, { width: DONUT_SIZE, height: DONUT_SIZE }]}>
        <View
          style={[
            statusDonutStyles.donutRing,
            {
              width: DONUT_SIZE,
              height: DONUT_SIZE,
              borderRadius: DONUT_SIZE / 2,
              borderWidth: THICKNESS,
              borderTopColor: AppColors.unpainted,
              borderRightColor: AppColors.primed,
              borderBottomColor: AppColors.painting,
              borderLeftColor: AppColors.done,
            },
          ]}
        />
        <View
          style={[
            statusDonutStyles.donutHole,
            {
              width: HOLE_SIZE,
              height: HOLE_SIZE,
              borderRadius: HOLE_SIZE / 2,
            },
          ]}
        >
          <Text style={statusDonutStyles.centerCount}>{total}</Text>
        </View>
      </View>
      <View style={statusDonutStyles.legend}>
        {LEGEND.map(({ label, color }) => (
          <View key={label} style={statusDonutStyles.legendItem}>
            <View style={[statusDonutStyles.legendDot, { backgroundColor: color }]} />
            <Text style={statusDonutStyles.legendLabel}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

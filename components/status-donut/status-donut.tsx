import { View, Text } from 'react-native';
import { statusDonutStyles } from './status-donut.styles';
import {AppColors} from "@/constants/theme";

type Props = {
  raw: number;
  primed: number;
  wip: number;
  done: number;
};

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
      <View style={statusDonutStyles.donutOuter}>
        <View style={statusDonutStyles.donutRing} />
        <View style={statusDonutStyles.donutHole}>
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

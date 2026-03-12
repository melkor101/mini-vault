import { View, Text } from 'react-native';
import { recentActivityListStyles } from './recent-activity-list.styles';

type ActivityItem = {
  id: string;
  name: string;
  brand: string;
  color: string;
  statusColor: string;
};

type Props = {
  items: ActivityItem[];
};

export const RecentActivityList = ({ items }: Props) => {
  return (
    <View style={recentActivityListStyles.container}>
      <View style={recentActivityListStyles.header}>
        <Text style={recentActivityListStyles.headerTitle}>Recent Activity</Text>
        <Text style={recentActivityListStyles.viewAll}>View All →</Text>
      </View>

      {items.map((item, index) => (
        <View key={item.id}>
          {index > 0 && <View style={recentActivityListStyles.separator} />}
          <View style={recentActivityListStyles.item}>
            <View style={[recentActivityListStyles.thumbnail, { backgroundColor: item.color }]} />
            <View style={recentActivityListStyles.itemInfo}>
              <Text style={recentActivityListStyles.itemName}>{item.name}</Text>
              <Text style={recentActivityListStyles.itemBrand}>{item.brand}</Text>
            </View>
            <View style={[recentActivityListStyles.statusDot, { backgroundColor: item.statusColor }]} />
          </View>
        </View>
      ))}
    </View>
  );
};

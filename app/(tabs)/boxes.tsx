import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/theme';
import { boxesStyles } from './boxes.styles';

type Location = {
  id: string;
  icon: string;
  name: string;
  boxCount: number;
};

type StorageBox = {
  id: string;
  name: string;
  color: string;
  miniCount: number;
};

const mockLocations: Location[] = [
  { id: '1', icon: '🎨', name: 'Art Studio',  boxCount: 0 },
  { id: '2', icon: '🏠', name: 'Home',         boxCount: 0 },
  { id: '3', icon: '🏪', name: 'Game Store',   boxCount: 0 },
];

const unplacedBoxes: StorageBox[] = [
  { id: '1', name: 'Box A', color: AppColors.boxRed,   miniCount: 2 },
  { id: '2', name: 'Box B', color: AppColors.boxBlue,  miniCount: 1 },
  { id: '3', name: 'Box C', color: AppColors.boxGreen, miniCount: 1 },
];

const BoxesScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={boxesStyles.screen}>
      <ScrollView
        style={boxesStyles.screen}
        contentContainerStyle={boxesStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={boxesStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={boxesStyles.appIconImage} />
          <Text style={boxesStyles.appTitle}>MiniVault</Text>
        </View>

        <View style={boxesStyles.titleSection}>
          <View style={boxesStyles.titleRow}>
            <Text style={boxesStyles.pageTitle}>Storage</Text>
            <View style={boxesStyles.actionButtons}>
              <TouchableOpacity style={boxesStyles.outlineButton} activeOpacity={0.7}>
                <Text style={boxesStyles.outlineButtonText}>📍 Place</Text>
              </TouchableOpacity>
              <TouchableOpacity style={boxesStyles.filledButton} activeOpacity={0.8}>
                <Text style={boxesStyles.filledButtonText}>+ Box</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={boxesStyles.pageSubtitle}>
            {unplacedBoxes.length} boxes across {mockLocations.length} locations
          </Text>
        </View>

        {mockLocations.map((loc) => (
          <View key={loc.id} style={boxesStyles.locationCard}>
            <View style={boxesStyles.locationRow}>
              <View style={boxesStyles.locationIconCircle}>
                <Text style={boxesStyles.locationIcon}>{loc.icon}</Text>
              </View>
              <View style={boxesStyles.locationInfo}>
                <View style={boxesStyles.locationNameRow}>
                  <Text style={boxesStyles.locationName}>{loc.name}</Text>
                  <View style={boxesStyles.locationBoxCountBadge}>
                    <Text style={boxesStyles.locationBoxCountText}>{loc.boxCount} boxes</Text>
                  </View>
                </View>
                <Text style={boxesStyles.locationEmpty}>No boxes here yet</Text>
              </View>
              <TouchableOpacity style={boxesStyles.locationDeleteBtn} activeOpacity={0.7}>
                <Text style={boxesStyles.locationDeleteIcon}>🗑</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={boxesStyles.sectionHeader}>
          <Text style={boxesStyles.sectionIcon}>🗃</Text>
          <Text style={boxesStyles.sectionTitle}>Unplaced</Text>
          <View style={boxesStyles.sectionBadge}>
            <Text style={boxesStyles.sectionBadgeText}>{unplacedBoxes.length}</Text>
          </View>
        </View>

        {unplacedBoxes.map((box) => (
          <TouchableOpacity
            key={box.id}
            style={boxesStyles.boxRow}
            activeOpacity={0.75}
            onPress={() => router.push(`/box/${box.id}`)}
          >
            <View style={[boxesStyles.boxColorSquare, { backgroundColor: box.color }]} />
            <View style={boxesStyles.boxInfo}>
              <Text style={boxesStyles.boxName}>{box.name}</Text>
              <Text style={boxesStyles.boxMiniCount}>
                @ {box.miniCount} {box.miniCount === 1 ? 'mini' : 'minis'}
              </Text>
            </View>
            <View style={boxesStyles.boxRowActions}>
              <TouchableOpacity style={boxesStyles.boxDeleteBtn} activeOpacity={0.7}>
                <Text style={boxesStyles.boxDeleteIcon}>🗑</Text>
              </TouchableOpacity>
              <Text style={boxesStyles.boxChevron}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoxesScreen;

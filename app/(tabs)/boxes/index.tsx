import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useBoxes, useLocations } from '@/hooks/use-boxes';
import { useMiniatures } from '@/hooks/use-miniatures';
import { boxesStyles } from '@/styles/tabs/boxes.styles';

const BoxesScreen = () => {
  const router = useRouter();
  const locations = useLocations();
  const boxes = useBoxes();
  const miniatures = useMiniatures();

  const unplacedBoxes = boxes.filter((b) => b.locationId === null);

  return (
    <SafeAreaView style={boxesStyles.screen} edges={['top']}>
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
            {boxes.length} boxes across {locations.length} locations
          </Text>
        </View>

        {locations.map((loc) => {
          const locBoxes = boxes.filter((b) => b.locationId === loc.id);
          return (
            <View key={loc.id} style={boxesStyles.locationCard}>
              <View style={boxesStyles.locationRow}>
                <View style={boxesStyles.locationIconCircle}>
                  <Text style={boxesStyles.locationIcon}>{loc.icon}</Text>
                </View>
                <View style={boxesStyles.locationInfo}>
                  <View style={boxesStyles.locationNameRow}>
                    <Text style={boxesStyles.locationName}>{loc.name}</Text>
                    <View style={boxesStyles.locationBoxCountBadge}>
                      <Text style={boxesStyles.locationBoxCountText}>{locBoxes.length} boxes</Text>
                    </View>
                  </View>
                  <Text style={boxesStyles.locationEmpty}>No boxes here yet</Text>
                </View>
                <TouchableOpacity style={boxesStyles.locationDeleteBtn} activeOpacity={0.7}>
                  <Text style={boxesStyles.locationDeleteIcon}>🗑</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        <View style={boxesStyles.sectionHeader}>
          <Text style={boxesStyles.sectionIcon}>🗃</Text>
          <Text style={boxesStyles.sectionTitle}>Unplaced</Text>
          <View style={boxesStyles.sectionBadge}>
            <Text style={boxesStyles.sectionBadgeText}>{unplacedBoxes.length}</Text>
          </View>
        </View>

        {unplacedBoxes.map((box) => {
          const miniCount = miniatures.filter((m) => m.storageBox === box.name).length;
          return (
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
                  @ {miniCount} {miniCount === 1 ? 'mini' : 'minis'}
                </Text>
              </View>
              <View style={boxesStyles.boxRowActions}>
                <TouchableOpacity style={boxesStyles.boxDeleteBtn} activeOpacity={0.7}>
                  <Text style={boxesStyles.boxDeleteIcon}>🗑</Text>
                </TouchableOpacity>
                <Text style={boxesStyles.boxChevron}>›</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoxesScreen;

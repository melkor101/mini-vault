import { ScrollView, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AppColors } from '@/constants/theme';
import { mockMiniatures } from '@/constants/mock-miniatures';
import { boxItemStyles } from './[id].styles';

type BoxMeta = {
  name: string;
  color: string;
};

const BOX_META: Record<string, BoxMeta> = {
  '1': { name: 'Box A', color: AppColors.boxRed },
  '2': { name: 'Box B', color: AppColors.boxBlue },
  '3': { name: 'Box C', color: AppColors.boxGreen },
};

const STATUS_CONFIG = {
  completed:  { label: 'Completed',   icon: '✓', color: AppColors.done },
  inProgress: { label: 'In Progress', icon: '●', color: AppColors.painting },
  primed:     { label: 'Primed',      icon: '🔥', color: AppColors.primed },
  unpainted:  { label: 'Unpainted',   icon: '○',  color: AppColors.unpainted },
};

const BoxItemScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const box = BOX_META[id] ?? BOX_META['1'];
  const miniatures = mockMiniatures.filter((m) => m.storageBox === box.name);

  return (
    <SafeAreaView style={boxItemStyles.screen}>
      <ScrollView
        style={boxItemStyles.screen}
        contentContainerStyle={boxItemStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={boxItemStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={boxItemStyles.appIconImage} />
          <Text style={boxItemStyles.appTitle}>MiniVault</Text>
        </View>

        <View style={boxItemStyles.topBar}>
          <TouchableOpacity style={boxItemStyles.backButton} onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={boxItemStyles.backIcon}>←</Text>
            <Text style={boxItemStyles.backLabel}>Back</Text>
          </TouchableOpacity>
          <View style={boxItemStyles.spacer} />
          <TouchableOpacity style={boxItemStyles.topBarButton} activeOpacity={0.7}>
            <Text style={boxItemStyles.topBarButtonText}>📋 Item Box</Text>
          </TouchableOpacity>
          <TouchableOpacity style={boxItemStyles.topBarButton} activeOpacity={0.7}>
            <Text style={boxItemStyles.topBarButtonText}>📍 Move Box</Text>
          </TouchableOpacity>
        </View>

        <View style={boxItemStyles.boxHero}>
          <View style={[boxItemStyles.boxColorSquare, { backgroundColor: box.color }]} />
          <View style={boxItemStyles.boxHeroInfo}>
            <Text style={boxItemStyles.boxHeroName}>{box.name}</Text>
            <Text style={boxItemStyles.boxHeroMeta}>
              Not placed anywhere · {miniatures.length} minis
            </Text>
          </View>
        </View>

        <View style={boxItemStyles.nestedSection}>
          <View style={boxItemStyles.sectionHeader}>
            <Text style={boxItemStyles.sectionIcon}>📦</Text>
            <Text style={boxItemStyles.sectionTitle}>Nested Boxes</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={boxItemStyles.sectionAddLink}>+ Add box here</Text>
            </TouchableOpacity>
          </View>
          <View style={boxItemStyles.nestedEmpty}>
            <Text style={boxItemStyles.nestedEmptyIcon}>📦</Text>
            <Text style={boxItemStyles.nestedEmptyText}>No boxes inside — add one</Text>
          </View>
        </View>

        <View style={boxItemStyles.miniaturesSection}>
          <View style={boxItemStyles.sectionHeader}>
            <Text style={boxItemStyles.sectionIcon}>📦</Text>
            <Text style={boxItemStyles.sectionTitle}>Miniatures</Text>
            <View style={boxItemStyles.sectionBadge}>
              <Text style={boxItemStyles.sectionBadgeText}>{miniatures.length}</Text>
            </View>
          </View>

          {miniatures.map((mini) => {
            const status = STATUS_CONFIG[mini.status];
            return (
              <View key={mini.id} style={boxItemStyles.miniatureRow}>
                <View style={[boxItemStyles.statusDot, { backgroundColor: status.color }]} />
                <View style={boxItemStyles.miniatureInfo}>
                  <Text style={boxItemStyles.miniatureName}>{mini.name}</Text>
                  <View style={boxItemStyles.miniatureMeta}>
                    <Text style={boxItemStyles.miniatureBrand}>{mini.brand}</Text>
                    <View style={boxItemStyles.statusPill}>
                      <Text style={[boxItemStyles.statusPillText, { color: status.color }]}>
                        {status.icon} {status.label}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={boxItemStyles.moveButton} activeOpacity={0.7}>
                  <Text style={boxItemStyles.moveButtonText}>→ Move</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoxItemScreen;

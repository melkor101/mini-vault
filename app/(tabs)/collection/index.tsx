import { ScrollView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/theme';
import { useMiniatures } from '@/hooks/use-miniatures';
import { MiniatureCard } from '@/components/miniature-card/miniature-card';
import { collectionStyles } from '@/styles/tabs/collection.styles';

const CollectionScreen = () => {
  const router = useRouter();
  const miniatures = useMiniatures();

  return (
    <SafeAreaView style={collectionStyles.screen} edges={['top']}>
      <ScrollView
        style={collectionStyles.screen}
        contentContainerStyle={collectionStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={collectionStyles.header}>
          <Image source={require('@/assets/images/logo.png')} style={collectionStyles.appIconImage} />
          <Text style={collectionStyles.appTitle}>MiniVault</Text>
        </View>

        <View style={collectionStyles.titleBlock}>
          <Text style={collectionStyles.pageTitle}>Collection</Text>
          <Text style={collectionStyles.pageSubtitle}>Browse and manage your miniatures</Text>
        </View>

        <View style={collectionStyles.searchBar}>
          <Text style={collectionStyles.searchIcon}>🔍</Text>
          <TextInput
            style={collectionStyles.searchInput}
            placeholder="Search miniatures..."
            placeholderTextColor={AppColors.textMuted}
          />
        </View>

        <View style={collectionStyles.filterRow}>
          <TouchableOpacity style={collectionStyles.filterPill}>
            <Text style={collectionStyles.filterLabel}>⚗ All Status ▾</Text>
          </TouchableOpacity>
          <TouchableOpacity style={collectionStyles.filterPill}>
            <Text style={collectionStyles.filterLabel}>📦 All Boxes ▾</Text>
          </TouchableOpacity>
        </View>

        <View style={collectionStyles.countRow}>
          <Text style={collectionStyles.countText}>• {miniatures.length} of {miniatures.length} miniatures</Text>
        </View>

        {miniatures.length === 0 ? (
          <View style={collectionStyles.emptyState}>
            <Text style={collectionStyles.emptyIcon}>🗂</Text>
            <Text style={collectionStyles.emptyTitle}>No miniatures yet</Text>
            <Text style={collectionStyles.emptySubtitle}>Add your first miniature to start tracking your collection</Text>
          </View>
        ) : (
          miniatures.map((item) => (
            <MiniatureCard
              key={item.id}
              name={item.name}
              brand={item.brand}
              type={item.type}
              status={item.status}
              thumbnailColors={item.thumbnailColors}
              badgeColor={item.badgeColor}
              image={item.image}
              onPress={() => router.push(`/miniature/${item.id}`)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;

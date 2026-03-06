import { ScrollView, View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { AppColors } from '@/constants/theme';
import { mockMiniatures } from '@/constants/mock-miniatures';
import { MiniatureCard } from '@/components/miniature-card/miniature-card';
import { collectionStyles } from './collection.styles';

const CollectionScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={collectionStyles.screen}>
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
          <Text style={collectionStyles.countText}>• {mockMiniatures.length} of {mockMiniatures.length} miniatures</Text>
        </View>

        {mockMiniatures.map((item) => (
          <MiniatureCard
            key={item.id}
            name={item.name}
            brand={item.brand}
            type={item.type}
            status={item.status}
            thumbnailColors={item.thumbnailColors}
            badgeColor={item.badgeColor}
            onPress={() => router.push(`/miniature/${item.id}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CollectionScreen;

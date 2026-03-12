import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useDbReady } from '@/hooks/use-db-ready';
import { layoutStyles } from './layout.styles';
import {AppColors} from "@/constants/theme";

export const unstable_settings = {
  anchor: '(tabs)',
};

const SCREEN_OPTIONS = { headerShown: false } as const;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isReady = useDbReady();

  if (!isReady) {
    return (
      <View style={layoutStyles.loadingContainer}>
        <ActivityIndicator size="large" color={AppColors.primary} />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={SCREEN_OPTIONS} />
        <Stack.Screen name="miniature/[id]" options={SCREEN_OPTIONS} />
        <Stack.Screen name="box/[id]" options={SCREEN_OPTIONS} />
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}

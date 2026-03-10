import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { FabTabButton } from '@/components/ui/fab-tab-button/fab-tab-button';
import { AppColors, Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].icon,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: AppColors.border,
          backgroundColor: AppColors.white,
          height: 60,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection/index"
        options={{
          title: 'Collection',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="square.stack.3d.up.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add/index"
        options={{
          title: '',
          tabBarButton: (props) => <FabTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="boxes/index"
        options={{
          title: 'Boxes',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="archivebox.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards/index"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="trophy.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;

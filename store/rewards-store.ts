import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RewardsStore = {
  xp: number;
  level: number;
  unlockedIds: string[];
  addXp: (amount: number) => void;
};

export const useRewardsStore = create<RewardsStore>()(
  persist(
    (set) => ({
      xp: 950,
      level: 4,
      unlockedIds: ['1', '2', '3', '4', '5', '6', '7'],
      addXp: (amount) => {
        set((state) => {
          const newXp = state.xp + amount;
          const newLevel = Math.floor(newXp / 1000) + 1;
          return { xp: newXp, level: newLevel };
        });
      },
    }),
    { name: 'rewards-store', storage: createJSONStorage(() => AsyncStorage) }
  )
);

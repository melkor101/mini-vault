import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppColors } from '@/constants/theme';

export type MiniatureStatus = 'completed' | 'inProgress' | 'primed' | 'unpainted';

export type Miniature = {
  id: string;
  name: string;
  brand: string;
  type: string;
  status: MiniatureStatus;
  storageBox: string;
  lastUpdated: string;
  thumbnailColors: [string, string];
  badgeColor: string;
};

type MiniatureStore = {
  miniatures: Miniature[];
  addMiniature: (data: Omit<Miniature, 'id' | 'lastUpdated' | 'thumbnailColors' | 'badgeColor'>) => void;
  updateMiniature: (id: string, data: Partial<Miniature>) => void;
  deleteMiniature: (id: string) => void;
};

const THUMBNAIL_PALETTES: [string, string][] = [
  [AppColors.heroStart, AppColors.heroEnd],
  [AppColors.primary, AppColors.heroStart],
  [AppColors.weeklyPurple, AppColors.primary],
];

const BADGE_COLORS = [AppColors.weeklyPink, AppColors.heroStart, AppColors.primary];

const INITIAL_MINIATURES: Miniature[] = [
  {
    id: '1',
    name: 'Space Marine Captain',
    brand: 'Games Workshop',
    type: 'Infantry',
    status: 'completed',
    storageBox: 'Box A',
    lastUpdated: '3/1/2026',
    thumbnailColors: [AppColors.heroEnd, AppColors.heroStart],
    badgeColor: AppColors.weeklyPink,
  },
  {
    id: '2',
    name: 'Ork Boyz Squad',
    brand: 'Games Workshop',
    type: 'Infantry',
    status: 'inProgress',
    storageBox: 'Box A',
    lastUpdated: '2/28/2026',
    thumbnailColors: [AppColors.primary, AppColors.heroStart],
    badgeColor: AppColors.weeklyPink,
  },
  {
    id: '3',
    name: 'Dragon Miniature',
    brand: 'Reaper Miniatures',
    type: 'Monster',
    status: 'primed',
    storageBox: 'Box B',
    lastUpdated: '2/25/2026',
    thumbnailColors: [AppColors.heroEnd, AppColors.primary],
    badgeColor: AppColors.heroStart,
  },
];

const today = () => {
  const d = new Date();
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
};

export const useMiniatureStore = create<MiniatureStore>()(
  persist(
    (set, get) => ({
      miniatures: INITIAL_MINIATURES,
      addMiniature: (data) => {
        const { miniatures } = get();
        const idx = miniatures.length;
        const newMini: Miniature = {
          ...data,
          id: String(Date.now()),
          lastUpdated: today(),
          thumbnailColors: THUMBNAIL_PALETTES[idx % THUMBNAIL_PALETTES.length],
          badgeColor: BADGE_COLORS[idx % BADGE_COLORS.length],
        };
        set({ miniatures: [...miniatures, newMini] });
      },
      updateMiniature: (id, data) => {
        set((state) => ({
          miniatures: state.miniatures.map((m) =>
            m.id === id ? { ...m, ...data, lastUpdated: today() } : m
          ),
        }));
      },
      deleteMiniature: (id) => {
        set((state) => ({
          miniatures: state.miniatures.filter((m) => m.id !== id),
        }));
      },
    }),
    { name: 'miniature-store', storage: createJSONStorage(() => AsyncStorage) }
  )
);

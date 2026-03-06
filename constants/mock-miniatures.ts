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

export const mockMiniatures: Miniature[] = [
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

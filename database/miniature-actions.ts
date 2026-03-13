import { AppColors } from '@/constants/theme';
import { database } from './index';
import { MiniatureService } from './miniature-service';
import type { Miniature, MiniatureStatus } from './models/miniature.model';

const THUMBNAIL_PALETTES: [string, string][] = [
  [AppColors.heroStart, AppColors.heroEnd],
  [AppColors.primary, AppColors.heroStart],
  [AppColors.weeklyPurple, AppColors.primary],
];

const BADGE_COLORS = [AppColors.weeklyPink, AppColors.heroStart, AppColors.primary];

const today = () => {
  const d = new Date();
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
};

export const addMiniature = async (
  data: Omit<Miniature, 'id' | 'lastUpdated' | 'thumbnailColors' | 'badgeColor' | 'image'> & { image?: string }
): Promise<void> => {
  const idx = await database.get('miniatures').query().fetchCount();
  await MiniatureService.create({
    ...data,
    image: data.image ?? '',
    lastUpdated: today(),
    thumbnailColors: THUMBNAIL_PALETTES[idx % THUMBNAIL_PALETTES.length],
    badgeColor: BADGE_COLORS[idx % BADGE_COLORS.length],
  });
};

export type { MiniatureStatus };

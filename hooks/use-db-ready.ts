import { useState, useEffect } from 'react';
import { AppColors } from '@/constants/theme';
import { database } from '@/database';
import { BoxService } from '@/database/box-service';
import { MiniatureService } from '@/database/miniature-service';
import { RewardService } from '@/database/reward-service';

const THUMBNAIL_PALETTES: [string, string][] = [
  [AppColors.heroEnd, AppColors.heroStart],
  [AppColors.primary, AppColors.heroStart],
  [AppColors.heroEnd, AppColors.primary],
];

const BADGE_COLORS = [AppColors.weeklyPink, AppColors.heroStart, AppColors.primary];

const seedDatabase = async () => {
  await Promise.all([
    BoxService.createLocation({ icon: '🎨', name: 'Art Studio' }),
    BoxService.createLocation({ icon: '🏠', name: 'Home' }),
    BoxService.createLocation({ icon: '🏪', name: 'Game Store' }),
  ]);

  await Promise.all([
    BoxService.createBox({ name: 'Box A', color: AppColors.boxRed, locationId: null }),
    BoxService.createBox({ name: 'Box B', color: AppColors.boxBlue, locationId: null }),
    BoxService.createBox({ name: 'Box C', color: AppColors.boxGreen, locationId: null }),
  ]);

  await Promise.all([
    MiniatureService.create({
      name: 'Space Marine Captain',
      brand: 'Games Workshop',
      type: 'Infantry',
      status: 'completed',
      storageBox: 'Box A',
      lastUpdated: '3/1/2026',
      thumbnailColors: THUMBNAIL_PALETTES[0],
      badgeColor: BADGE_COLORS[0],
    }),
    MiniatureService.create({
      name: 'Ork Boyz Squad',
      brand: 'Games Workshop',
      type: 'Infantry',
      status: 'inProgress',
      storageBox: 'Box A',
      lastUpdated: '2/28/2026',
      thumbnailColors: THUMBNAIL_PALETTES[1],
      badgeColor: BADGE_COLORS[0],
    }),
    MiniatureService.create({
      name: 'Dragon Miniature',
      brand: 'Reaper Miniatures',
      type: 'Monster',
      status: 'primed',
      storageBox: 'Box B',
      lastUpdated: '2/25/2026',
      thumbnailColors: THUMBNAIL_PALETTES[2],
      badgeColor: BADGE_COLORS[1],
    }),
  ]);

  await RewardService.upsert({
    xp: 950,
    level: 4,
    unlockedIds: ['1', '2', '3', '4', '5', '6', '7'],
  });
};

export const useDbReady = (): boolean => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const [miniCount, locCount] = await Promise.all([
        database.get('miniatures').query().fetchCount(),
        database.get('locations').query().fetchCount(),
      ]);

      if (miniCount === 0 && locCount === 0) {
        await seedDatabase();
      }

      setIsReady(true);
    };

    init().catch(console.error);
  }, []);

  return isReady;
};

import { database } from './index';
import { RewardModel, RewardData } from './models/reward.model';

const rewards = database.get<RewardModel>('rewards');

export const RewardService = {
  async get(): Promise<RewardData | null> {
    const records = await rewards.query().fetch();
    return records[0]?.toRewardData() ?? null;
  },

  async upsert(data: RewardData): Promise<void> {
    await database.write(async () => {
      const records = await rewards.query().fetch();
      if (records[0]) {
        await records[0].update((r) => {
          r.xp = data.xp;
          r.level = data.level;
          r.unlockedIdsRaw = JSON.stringify(data.unlockedIds);
        });
      } else {
        await rewards.create((r) => {
          r.xp = data.xp;
          r.level = data.level;
          r.unlockedIdsRaw = JSON.stringify(data.unlockedIds);
        });
      }
    });
  },
};

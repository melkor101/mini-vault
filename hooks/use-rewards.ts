import { useQuery } from './use-query';
import { database } from '@/database';
import { RewardModel } from '@/database/models/reward.model';
import type { RewardData } from '@/database/models/reward.model';

const query = database.get<RewardModel>('rewards').query();

export const useRewards = (): RewardData | null => {
  const records = useQuery(query);
  return records[0]?.toRewardData() ?? null;
};

import { useQuery } from './use-query';
import { database } from '@/database';
import { MiniatureModel } from '@/database/models/miniature.model';
import type { Miniature } from '@/database/models/miniature.model';

const query = database.get<MiniatureModel>('miniatures').query();

export const useMiniatures = (): Miniature[] => {
  const records = useQuery(query);
  return records.map((r) => r.toMiniature());
};

import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { dbSchema } from './schema';
import { migrations } from './migrations';
import { MiniatureModel } from './models/miniature.model';
import { StorageBoxModel } from './models/storage-box.model';
import { LocationModel } from './models/location.model';
import { RewardModel } from './models/reward.model';

const adapter = new SQLiteAdapter({
  schema: dbSchema,
  migrations,
  dbName: 'minivault',
});

export const database = new Database({
  adapter,
  modelClasses: [MiniatureModel, StorageBoxModel, LocationModel, RewardModel],
});

import { useQuery } from './use-query';
import { database } from '@/database';
import { StorageBoxModel } from '@/database/models/storage-box.model';
import { LocationModel } from '@/database/models/location.model';
import type { StorageBox } from '@/database/models/storage-box.model';
import type { Location } from '@/database/models/location.model';

const boxesQuery = database.get<StorageBoxModel>('storage_boxes').query();
const locationsQuery = database.get<LocationModel>('locations').query();

export const useBoxes = (): StorageBox[] => {
  const records = useQuery(boxesQuery);
  return records.map((r) => r.toStorageBox());
};

export const useLocations = (): Location[] => {
  const records = useQuery(locationsQuery);
  return records.map((r) => r.toLocation());
};

import { database } from './index';
import { StorageBoxModel } from './models/storage-box.model';
import { LocationModel } from './models/location.model';
import type { StorageBox } from './models/storage-box.model';
import type { Location } from './models/location.model';

const boxes = database.get<StorageBoxModel>('storage_boxes');
const locations = database.get<LocationModel>('locations');

export const BoxService = {
  async getAllBoxes(): Promise<StorageBox[]> {
    const records = await boxes.query().fetch();
    return records.map((r) => r.toStorageBox());
  },

  async getAllLocations(): Promise<Location[]> {
    const records = await locations.query().fetch();
    return records.map((r) => r.toLocation());
  },

  async createBox(data: Omit<StorageBox, 'id'>): Promise<StorageBox> {
    let created!: StorageBoxModel;
    await database.write(async () => {
      created = await boxes.create((record) => {
        record.name = data.name;
        record.color = data.color;
        record.locationId = data.locationId;
      });
    });
    return created.toStorageBox();
  },

  async createLocation(data: Omit<Location, 'id'>): Promise<Location> {
    let created!: LocationModel;
    await database.write(async () => {
      created = await locations.create((record) => {
        record.icon = data.icon;
        record.name = data.name;
      });
    });
    return created.toLocation();
  },

  async deleteBox(id: string): Promise<void> {
    await database.write(async () => {
      const record = await boxes.find(id);
      await record.destroyPermanently();
    });
  },

  async deleteLocation(id: string): Promise<void> {
    await database.write(async () => {
      const record = await locations.find(id);
      await record.destroyPermanently();
    });
  },

  async assignBox(boxId: string, locationId: string | null): Promise<void> {
    await database.write(async () => {
      const record = await boxes.find(boxId);
      await record.update((r) => {
        r.locationId = locationId;
      });
    });
  },
};

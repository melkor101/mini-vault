import { database } from './index';
import { MiniatureModel } from './models/miniature.model';
import type { Miniature } from './models/miniature.model';

const miniatures = database.get<MiniatureModel>('miniatures');

export const MiniatureService = {
  async getAll(): Promise<Miniature[]> {
    const records = await miniatures.query().fetch();
    return records.map((r) => r.toMiniature());
  },

  async create(data: Omit<Miniature, 'id'>): Promise<Miniature> {
    let created!: MiniatureModel;
    await database.write(async () => {
      created = await miniatures.create((record) => {
        record.name = data.name;
        record.brand = data.brand;
        record.type = data.type;
        record.status = data.status;
        record.storageBox = data.storageBox;
        record.notes = data.notes;
        record.lastUpdated = data.lastUpdated;
        record.thumbnailColorsRaw = JSON.stringify(data.thumbnailColors);
        record.badgeColor = data.badgeColor;
        record.image = data.image ?? '';
      });
    });
    return created.toMiniature();
  },

  async update(id: string, data: Partial<Miniature>): Promise<void> {
    await database.write(async () => {
      const record = await miniatures.find(id);
      await record.update((r) => {
        if (data.name !== undefined) r.name = data.name;
        if (data.brand !== undefined) r.brand = data.brand;
        if (data.type !== undefined) r.type = data.type;
        if (data.status !== undefined) r.status = data.status;
        if (data.storageBox !== undefined) r.storageBox = data.storageBox;
        if (data.notes !== undefined) r.notes = data.notes;
        if (data.lastUpdated !== undefined) r.lastUpdated = data.lastUpdated;
        if (data.thumbnailColors !== undefined) r.thumbnailColorsRaw = JSON.stringify(data.thumbnailColors);
        if (data.badgeColor !== undefined) r.badgeColor = data.badgeColor;
        if (data.image !== undefined) r.image = data.image;
      });
    });
  },

  async delete(id: string): Promise<void> {
    await database.write(async () => {
      const record = await miniatures.find(id);
      await record.destroyPermanently();
    });
  },
};

import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export enum PaintStatusEnum {
  Backlog = 'backlog',
  Unpainted = 'unpainted',
  Primed = 'primed',
  InProgress = 'inProgress',
  Completed = 'completed',
}

export type MiniatureStatus = PaintStatusEnum;

export type Miniature = {
  id: string;
  name: string;
  brand: string;
  type: string;
  status: MiniatureStatus;
  storageBox: string;
  notes: string;
  lastUpdated: string;
  thumbnailColors: [string, string];
  badgeColor: string;
  image: string;
};

export class MiniatureModel extends Model {
  static table = 'miniatures';

  @field('name') name!: string;
  @field('brand') brand!: string;
  @field('type') type!: string;
  @field('status') status!: MiniatureStatus;
  @field('storage_box') storageBox!: string;
  @field('notes') notes!: string;
  @field('last_updated') lastUpdated!: string;
  @field('thumbnail_colors') thumbnailColorsRaw!: string;
  @field('badge_color') badgeColor!: string;
  @field('image') image!: string;

  get thumbnailColors(): [string, string] {
    return JSON.parse(this.thumbnailColorsRaw);
  }

  toMiniature(): Miniature {
    return {
      id: this.id,
      name: this.name,
      brand: this.brand,
      type: this.type,
      status: this.status,
      storageBox: this.storageBox,
      notes: this.notes,
      lastUpdated: this.lastUpdated,
      thumbnailColors: this.thumbnailColors,
      badgeColor: this.badgeColor,
      image: this.image,
    };
  }
}

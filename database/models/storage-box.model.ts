import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export type StorageBox = {
  id: string;
  name: string;
  color: string;
  locationId: string | null;
};

export class StorageBoxModel extends Model {
  static table = 'storage_boxes';

  @field('name') name!: string;
  @field('color') color!: string;
  @field('location_id') locationId!: string | null;

  toStorageBox(): StorageBox {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
      locationId: this.locationId,
    };
  }
}

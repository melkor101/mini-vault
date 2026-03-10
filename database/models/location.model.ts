import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export type Location = {
  id: string;
  icon: string;
  name: string;
};

export class LocationModel extends Model {
  static table = 'locations';

  @field('icon') icon!: string;
  @field('name') name!: string;

  toLocation(): Location {
    return {
      id: this.id,
      icon: this.icon,
      name: this.name,
    };
  }
}

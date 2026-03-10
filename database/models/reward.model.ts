import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export type RewardData = {
  xp: number;
  level: number;
  unlockedIds: string[];
};

export class RewardModel extends Model {
  static table = 'rewards';

  @field('xp') xp!: number;
  @field('level') level!: number;
  @field('unlocked_ids') unlockedIdsRaw!: string;

  get unlockedIds(): string[] {
    return JSON.parse(this.unlockedIdsRaw);
  }

  toRewardData(): RewardData {
    return {
      xp: this.xp,
      level: this.level,
      unlockedIds: this.unlockedIds,
    };
  }
}

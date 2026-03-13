import { appSchema, tableSchema } from '@nozbe/watermelondb';

export const dbSchema = appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: 'miniatures',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'brand', type: 'string' },
        { name: 'type', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'storage_box', type: 'string' },
        { name: 'last_updated', type: 'string' },
        { name: 'thumbnail_colors', type: 'string' },
        { name: 'badge_color', type: 'string' },
        { name: 'notes', type: 'string', isOptional: true },
        { name: 'image', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'storage_boxes',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'color', type: 'string' },
        { name: 'location_id', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'locations',
      columns: [
        { name: 'icon', type: 'string' },
        { name: 'name', type: 'string' },
      ],
    }),
    tableSchema({
      name: 'rewards',
      columns: [
        { name: 'xp', type: 'number' },
        { name: 'level', type: 'number' },
        { name: 'unlocked_ids', type: 'string' },
      ],
    }),
  ],
});

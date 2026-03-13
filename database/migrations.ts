import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations';

export const migrations = schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'miniatures',
          columns: [{ name: 'notes', type: 'string', isOptional: true }],
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        addColumns({
          table: 'miniatures',
          columns: [{ name: 'image', type: 'string', isOptional: true }],
        }),
      ],
    },
  ],
});

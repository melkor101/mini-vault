import { PaintStatusEnum } from '@/database/models/miniature.model';

export const TYPE_OPTIONS = [
  'Infantry',
  'Tank',
  'Vehicle',
  'Cavalry',
  'Monster',
  'Hero',
];

export const BRAND_OPTIONS = [
  'Games Workshop',
  'Reaper Miniatures',
  'Privateer Press',
  'Mantic Games',
  'Corvus Belli',
  'Warlord Games',
  'Battlefront Miniatures',
  'Wyrd Miniatures',
  'Modiphius Entertainment',
  'Para Bellum Wargames',
];

export const PAINT_STATUS_OPTIONS: { label: string; value: PaintStatusEnum }[] = [
  { label: 'Backlog', value: PaintStatusEnum.Backlog },
  { label: 'Unpainted', value: PaintStatusEnum.Unpainted },
  { label: 'Primed', value: PaintStatusEnum.Primed },
  { label: 'In Progress', value: PaintStatusEnum.InProgress },
  { label: 'Completed', value: PaintStatusEnum.Completed },
];

export const STORAGE_BOX_OPTIONS = ['Box A', 'Box B', 'Box C'];

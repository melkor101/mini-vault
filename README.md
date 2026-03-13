# MiniVault

A mobile app for tabletop miniature hobbyists to catalog their collection, track painting progress, and organize miniatures into physical storage.

## Features

- **Collection tracking** — catalog miniatures with name, manufacturer, type, notes, and photos
- **Painting pipeline** — 5-stage workflow: Backlog → Unpainted → Primed → In Progress → Completed
- **Dashboard analytics** — status breakdown, progress metrics, recent activity, and weekly stats
- **Storage management** — organize miniatures into boxes, group boxes by location
- **Rewards system** — XP-based leveling with achievements

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Expo SDK 54 / React Native 0.81 |
| Language | TypeScript 5.9 |
| Navigation | Expo Router 6 (file-based) |
| Database | WatermelonDB 0.28 + expo-sqlite 16 |
| Forms | react-hook-form + zod |
| UI | expo-linear-gradient, react-native-svg, expo-image-picker |

## Project Structure

```
app/                    Screens (Expo Router file-based routing)
  (tabs)/               Bottom tab navigator
    home/               Dashboard with analytics
    collection/         Full collection list
    add/                Add miniature form
    boxes/              Storage boxes and locations
    rewards/            Achievements and XP
  miniature/[id].tsx    Miniature detail (stack)
  box/[id].tsx          Box detail (stack)

components/             Reusable UI components
constants/              Theme colors, fonts, dropdown options
database/               WatermelonDB schema, models, services
  models/               ORM models (Miniature, StorageBox, Location, Reward)
  *-service.ts          CRUD service layer
  *-actions.ts          High-level action helpers
hooks/                  Reactive data hooks (use-miniatures, use-boxes, etc.)
styles/                 Co-located StyleSheet files
```

## Database Schema

Four tables at schema version 3:

- **miniatures** — name, brand, type, status, storage_box, notes, image, thumbnail_colors, badge_color, last_updated
- **storage_boxes** — name, color, location_id
- **locations** — icon, name
- **rewards** — xp, level, unlocked_ids

Migration history: v2 added `notes`, v3 added `image`.

## Getting Started

```bash
npm install
npx expo start
```

Then open in iOS simulator, Android emulator, or Expo Go.

### Platform-specific commands

```bash
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Web browser
npm run lint      # ESLint
```

## Architecture Notes

- **No global state library** — all persistent state comes from WatermelonDB reactive queries via `useQuery`; UI state is local `useState`
- **Data flow**: Database → Models → Services → Actions → Hooks → Components
- **Styles**: Always in a co-located `component-name.styles.ts` file, never inline
- **Routing**: New screens are added by creating files in `app/`. Groups use parentheses (e.g. `(tabs)`)
- **Path alias**: `@/` maps to the project root

## Conventions

- Components: named arrow functions with `export const`
- Route screens: arrow function with `export default`
- Colors: always use `AppColors` from `@/constants/theme`, never hardcode hex values
- Commit format: `type(scope): lowercase description`

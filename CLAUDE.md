# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (choose platform interactively)
npx expo start

# Start for specific platform
npm run ios
npm run android
npm run web

# Lint
npm run lint

# Reset to blank app (moves current app/ to app-example/)
npm run reset-project
```

There is no test runner configured in this project.

## Architecture

This is an **Expo Router** app using file-based routing. Navigation structure is determined entirely by the `app/` directory layout.

### Routing

- `app/_layout.tsx` — Root layout: wraps everything in `ThemeProvider`, declares the `Stack` navigator with two routes: `(tabs)` and `modal`
- `app/(tabs)/_layout.tsx` — Tab bar: defines the bottom tab navigator with `Home` and `Explore` tabs
- `app/(tabs)/index.tsx` — Home tab screen
- `app/(tabs)/explore.tsx` — Explore tab screen
- `app/modal.tsx` — Modal screen (pushed via `Link href="/modal"`)

New screens are added by creating files in `app/`. Nested groups use parentheses (e.g., `(tabs)`).

### Theming

- `constants/theme.ts` exports `Colors` (light/dark palettes) and `Fonts` (platform-specific font stacks)
- `hooks/use-color-scheme.ts` — wraps React Native's color scheme detection; `.web.ts` variant handles web
- `hooks/use-theme-color.ts` — resolves a color token to the current scheme's value
- `ThemedText` and `ThemedView` in `components/` are the standard building blocks for scheme-aware UI

### Path Alias

`@/` maps to the project root (configured in `tsconfig.json`). Use `@/components/...`, `@/hooks/...`, etc. for all internal imports.

### File and Folder Naming

Components live in a folder named after them, with the main file sharing that name:

```
components/my-component/my-component.tsx
components/my-component/my-component.styles.ts
```

Route screens in `app/` live in a named folder with `index.tsx` as the entry (Expo Router requirement) and the styles file named after the folder:

```
app/(tabs)/collection/index.tsx
app/(tabs)/collection/collection.styles.ts
```

### Styles

Always put styles in a separate file named `component-name.styles.ts`, co-located with the component. Export styles as a named const using the component name as a prefix:

```ts
// my-component.styles.ts
import { StyleSheet } from 'react-native';

export const myComponentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

Import and use in the component:

```tsx
// my-component.tsx
import { myComponentStyles } from './my-component.styles';
```

No inline styles. All styles go through the styles file. This applies everywhere — including `_layout.tsx`, route screens, and one-off `<View style={{ ... }}>` expressions. The only exception is dynamic values that depend on runtime data (e.g. `{ backgroundColor: item.color }`) which cannot be expressed as static StyleSheet entries.

Inline object literals passed to non-`style` props (e.g. `options={{ headerShown: false }}`) must also be extracted to named constants at the top of the file rather than written inline.

### Component Style

Always define components as named arrow functions with `export const`:

```tsx
type Props = {
  value: string;
};

export const MyComponent = ({ value }: Props) => {
  return <View />;
};
```

Route files (files inside `app/`) must use `export default` due to Expo Router requirements — use the same arrow function style with a default export:

```tsx
const HomeScreen = () => {
  return <View />;
};

export default HomeScreen;
```

### Commit Messages

Format: `type(scope): description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
Scopes: `api-core`, `web-client`, `mobile-client`, `api-contracts`, `e2e-tests`

Description must be lowercase. No sentence-case, start-case, pascal-case, or upper-case.

Good: `feat(web-client): add user authentication flow`
Bad: `feat(web-client): Add User Authentication Flow`

### Comments

Do not add comments to code unless explicitly asked. Write clean, self-explanatory code without inline comments or section labels.

### Platform-specific files

Expo resolves `.ios.tsx` / `.web.ts` variants automatically. Example: `components/ui/icon-symbol.ios.tsx` provides the SF Symbols implementation for iOS; `icon-symbol.tsx` is the fallback.
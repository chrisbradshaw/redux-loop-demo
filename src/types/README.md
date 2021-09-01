# `types/`

All shared TypeScript typings should live in this folder. In general, this folder should be fairly sparse as most typings will be specific to the code they are describing. These more specific typings should be co-located in the file in which they are used.

For now, we have `entities.ts` and `redux.ts` typing files. The `entities.ts` file contains all of the entities that the app consumes (e.g. data objects from APIs like glasses, contacts, users). `redux.ts` contains the typings necessary for redux code.

When importing types, prefer [type-only imports and exports][type-only].

When importing:

```typescript
// store/glasses.ts
import type { Glasses } from "types/entities/glasses";
```

When re-exporting:

```typescript
// store/entities/glasses/index.ts
export { GLASSES_SLICE_KEY, glassesReducer } from "./glasses-reducer";
export type { GlassesState } from "./glasses-reducer";
export * from "./glasses-selectors";
```

Type-only imports are erased during compilation, which helps keep the resulting bundle slim.

[type-only][https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html]

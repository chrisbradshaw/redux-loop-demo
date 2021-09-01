# `store/`

For more information on how redux is integrated into this app, check out the documentation in [`doc/redux-integration.md`][redux-integration].

This folder holds code for the redux store and associated hooks. It also contains two subfolders: `domains/` and `entities/`. These are reducers categorized into two types. Entity reducers have to do with entities received from APIs (e.g. glasses, contacts, users). Entities reducers should have a standardized structure. Domain reducers are for everything else in the app and should be grouped according to features or pages. See the [redux architecture documentation][redux-architecture] for more details on how reducers should be structured.

Within each reducer folder, there are also `selectors.js` files. These selectors should be used to pull data from that particular reducer and should be considered the external-facing API of that reducer's slice of state. There is also a top-level `selectors.js` file in the `store/` folder. This is for complex selectors that involve combining selectors across entities and domains. See the [redux architecture documentation][redux-architecture] for more information on how selectors should be written.

Below is an example of the file structure:

```
src/
  |-- store/
        |-- domains/
        |     |-- auth
        |           |-- index.ts
        |           |-- auth.ts
        |           |-- auth.test.ts
        |           |-- selectors.ts
        |           |-- selectors.test.ts
        |-- entities/
        |     |-- glasses/
        |     |     |-- index.ts
        |     |     |-- glasses.ts
        |     |     |-- glasses.test.ts
        |     |     |-- selectors.ts
        |     |     |-- selectors.test.ts
        |     |-- contacts/
        |           |-- index.ts
        |           |-- contacts.ts
        |           |-- contacts.test.ts
        |           |-- selectors.ts
        |           |-- selectors.test.ts
        |-- selectors.ts
        |-- selectors.test.ts
        |-- get-or-create-store.ts
        |-- get-or-create-store.test.ts
        |-- wrap-with-redux.tsx
        |-- wrap-with-redux.test.tsx
        |-- hooks.ts
  |     |-- hooks.test.ts
```

[redux-architecture](https://github.com/WarbyParker/www-next/tree/main/doc/redux-architecture.md)
[redux-integration](https://github.com/WarbyParker/www-next/blob/main/doc/redux-integration.md)

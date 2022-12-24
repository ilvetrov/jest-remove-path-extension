# jest-remove-path-extension

Jest transformation plugin to remove path extension.

:star2: Excellent if you use `.js` in TypeScript files and Jest cannot find the module.

## Usage

### One plugin

Add to `jest.config.js` / `package.json` with files that you want to remove extensions from.

```js
module.exports = {
  transform: {
    ".(ts|tsx)": ["jest-remove-path-extension", [".js"]],
  },
};
```

Of course, you can specify specific files for individual fixes.

### Multiple plugins

Use [jest-chain-transform](https://www.npmjs.com/package/jest-chain-transform), for example.

```js
module.exports = {
  transform: {
    ".(ts|tsx)": [
      "jest-chain-transform",
      {
        transformers: [["jest-remove-path-extension", [".js"]], ["ts-jest"]],
      },
    ],
  },
};
```

### If the plugin doesn't work

Run this command before running tests: `npx jest --clearCache`

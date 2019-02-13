# Migrate from 1.x to 2.x

Two steps:

1. Run `npx pri-migrate-one-to-two` in your project root path.
2. Reinstall node_modules.

## Upgrates

The main feature for `pri2.0` is performance optimization.

### Features

- Refactoring plug-in loading mechanism to make plug-ins more extensible, and all command line class commands are loaded on demand.
- Optimizing command line performance and improving response can be seen by naked eyes. **The execution speed of general commands is increased ten times**. The efficiency of **NPM start construction commands is increased by 140%-1000%**.
- More.. has been incorporated into the document.

### Break changes

- Rename config file from `pri.config.ts` to `priconfig.json`. (If you run migrate scripts, it will be automatic renamed.)

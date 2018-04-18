# Plugin setup

It's easy to expand the commander, analyse project files, and modifying the generated entry file by plugins.

## Install

First, create an empty folder:

```bash
mkdir test; cd test
npm init
npm install pri
```

Then, init the pri plugin:

```bash
npx pri plugin-init
```

No `npx`? Run `./node_modules/.bin/pri plugin-init`

## Plug-in loading mode

All the pri-plugin should be named like `pri-plugin-*` or `@ali/pri-plugin-*`, for example:

* `pri-plugin-test`
* `pri-plugin-command-deploy`

And when you installed `pri`, `pri-plugin-test` at the same time in your project , the plug-in will be automatically loaded when any `pri` scripts are executed.

> You can also install pri-plugins in pri-plugin! This is a way to merge plug-in.

## Debug plug-in

Change your npm path from project `package.json`:

```json
{
  "dependencies": {
    "pri": "*",
    "pri-plugin-test": "^1.0.0"
  }
}
```

To

```json
{
  "dependencies": {
    "pri": "*",
    "pri-plugin-test": "file:../pri-plugin-test"
  }
}
```

And run `npm start` in plugin root.

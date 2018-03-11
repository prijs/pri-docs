# Pri &middot;  [![npm version](https://img.shields.io/npm/v/pri.svg?style=flat-square)](https://www.npmjs.com/package/pri)

Pri is a toolkit for building web applications with React. **Helps you deal with everything, and you can focus on business logic.**

## Install

First, create an empty folder:

```shell
mkdir test; cd test
npm init
npm install pri
```

Then, init the pri project:

```shell
npx pri init
```

> No `npx`? Run `./node_modules/.bin/pri init`.

## Using it!

`npm start`

Run dev server in development mode with files watching and HMR.

> You should set `chrome://flags/#allow-insecure-localhost`, to trust local certificate.

`npm run preview`

Preview in production mode, won't watch files change.

`npm run build`

Production deployment. By default the dist folder is `./dist`.
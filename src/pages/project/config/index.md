# Config

> You can also create config files by [project dashboard](../features/project-dashboard) easily!

You can create `pri.config.ts` in the root of your project directory.

```typescript
import { ProjectConfig } from 'pri/client';

export default {
  distDir: 'output'
} as ProjectConfig;
```

Or use a function:

```typescript
import { ProjectConfig } from 'pri/client';

export default isDevelopment => {
  return {
    distDir: 'output'
  } as ProjectConfig;
};
```

## Config options &lt;type&gt; &lt;defaultValue&gt;

### title `string` `"pri"`

Title for html &lt;title&gt;.

### devPort `number` `[Auto get free port]`

localhost port when execute `npm start`. pri will find a free port by default, and for a special case, you can change it to a fixed port:

```js
{
  devPort: 9999;
}
```

### outFileName `string` `"main.[hash].js"`

Output main file name.

### outCssFileName `string` `"main.[hash].css"`

Output main css file name.

### bundleFileName `string` `"bundle.js"`

Rewrite Bundle file name when execute `npm run bundle`.

### devUrl `string` `null`

Specify the development url, work both for `npm start` and `npm run preview`.

In most scenes, it should not be configured.

> Conflict with `devPort`

### distDir `string` `"dist"`

Dist main file name.

> Only take effect on `npm run build` | `pri build`.

### publicPath `string` `/`

Assets public path. eg: `"https://www.some.com"`, `"https://www.some.com/somePath"`, `"/somePath"`.

- If not set, result: `/<distPath>`.
- If set /somePath for example, result: `/somePath/<distPath>`.
- If set some.com for example, result: `https://www.some.com/<distPath>`.
- If set some.com/somePath for example, result: `https://www.some.com/somePath/<distPath>`.

> Only take effect on `npm run build` | `pri build`.

### baseHref `string` `"/"`

Base href for all pages.

For example, `/admin` is the root path after deploy, you should set baseHref to `/admin`.

There is no need to modify the code, routing `/` can automatically maps to `/admin`.

Only take effect on `npm run build` | `pri build`

### customEnv `{ [key: string]: any }` `undefined`

Custom env. For example:

```typescript
// pri.config.ts
export default {
  customEnv: {
    user: 'ascoders'
  }
} as ProjectConfig;
```

Then you can use it in pages:

```typescript
// ./pages/index.tsx
import { env } from 'pri/client';
console.log(env.get('user'));
```

### useHttps `boolean` `true`

Whether use https for dev server and preview server.

### useServiceWorker `boolean` `false`

Wether use service worker.

> Warning: if disable it, mocks, serverRender will become invalid.

### clientServerRender `boolean` `false`

_Experiment._

Wether enable client server render by service worker.

> Warning: depend on service worker, should set useServiceWorker=true first.

### routes `IRoute[]` `[]`

Custom routes. When this configuration exists, it will not parse the `pages` directory.

For example:

```typescript
// pri.config.ts
export default {
  routes: [
    {
      path: '/',
      component: 'src/pages/home' // direct to ./src/pages/home.tsx or ./src/pages/home/index.tsx
    },
    {
      path: '/user/:id',
      component: 'src/page/user-info' // direct to ./src/pages/user-info.tsx or ./src/pages/user-info/index.tsx
    }
  ]
} as ProjectConfig;
```

### useHashRouter `boolean` `false`

Wether enable hash router.

### sourceRoot `string` `./`

Specify source file root path, for example `sourceRoot='app/client'`, will lead to `app/client/src` and `app/client/tests`.
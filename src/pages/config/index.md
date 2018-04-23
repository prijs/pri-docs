# Config

> You can also create config files by [project dashboard](../features/project-dashboard) easily!

You can create these files to config `pri`:

* `./config/config.default.ts`.
* `./config/config.local.ts`, enable when exec `npm start`.
* `./config/config.prod.ts`, enable when exec `npm run build`.

`config.local.ts` and `config.prod.ts` have a higher priority than `config.default.ts`

## Example

**`./config/config.default.ts`**

```typescript
import { ProjectConfig } from 'pri';

export default {
  distDir: 'output'
} as ProjectConfig;
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

### distDir `string` `"dist"`

Dist main file name.

> Only take effect on `npm run build` | `pri build`.

### publicPath `string` `/`

Assets public path. eg: `"https://www.some.com"`, `"https://www.some.com/somePath"`, `"/somePath"`.

* If not set, result: `/<distPath>`.
* If set /somePath for example, result: `/somePath/<distPath>`.
* If set some.com for example, result: `https://www.some.com/<distPath>`.
* If set some.com/somePath for example, result: `https://www.some.com/somePath/<distPath>`.

> Only take effect on `npm run build` | `pri build`.

### baseHref `string` `"/"`

Base href for all pages.

For example, `/admin` is the root path after deploy, you should set baseHref to `/admin`.

There is no need to modify the code, routing `/` can automatically maps to `/admin`.

Only take effect on `npm run build` | `pri build`

### customEnv `{ [key: string]: any }` `undefined`

Custom env. For example:

```typescript
// ./config/config.default.ts
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

# Config

> You can also create config files by [project dashboard](../features/project-dashboard) easily!

You can create these files to config `pri`:

* `./src/config/config.default.ts`.
* `./src/config/config.local.ts`, enable when exec `npm start`.
* `./src/config/config.prod.ts`, enable when exec `npm run build`.

`config.local.ts` and `config.prod.ts` have a higher priority than `config.default.ts`

## Example

```typescript
// ./src/config/config.default.ts
import { ProjectConfig } from "pri"

export default {
  distDir: "output"
} as ProjectConfig
```

## Config options &lt;type&gt; &lt;defaultValue&gt;

### title `string` `"pri"`

Title for html &lt;title&gt;.

### distDir `string` `"dist"`

Dist main file name.

> Only take effect on `npm run build` | `pri build`.

### distFileName `string` `"main"`

Dist main file name.

> Only take effect on `npm run build` | `pri build`.

### publicPath `string` `null`

Assets public path. eg: `"//some.com"`, `"//some.com/somePath"`, `"/somePath"`.

* If not set, result: `/<distPath>`.
* If set /somePath for example, result: `/somePath/<distPath>`.
* If set some.com for example, result: `//some.com/<distPath>`.
* If set some.com/somePath for example, result: `//some.com/somePath/<distPath>`.

> Only take effect on `npm run build` | `pri build`.

### baseHref `string` `"/"`

Base href for all pages.

For example, `/admin` is the root path after deploy, you should set baseHref to `/admin`.

There is no need to modify the code, routing `/` can automatically maps to `/admin`.

Only take effect on `npm run build` | `pri build`

### staticBuild `boolean` `false`

Generate static index file for each route, when building.

Usefal for static service who don't serve fallback html, like github-pages.

### customEnv `{ [key: string]: any }` `undefined`

Custom env. For example:

```typescript
// ./src/config/config.default.ts
export default {
  customEnv: {
    user: "ascoders"
  }
} as ProjectConfig
```

Then you can use it in pages:

```typescript
// ./src/pages/index.tsx
import { env } from "pri/client"
console.log(env.get("user"))
```

### useHttps `boolean` `true`

Whether use https for dev server and preview server.

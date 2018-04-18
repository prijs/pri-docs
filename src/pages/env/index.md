# Env

You can use environment variable from `pri/client`:

```typescript
// ./src/pages/index.tsx
import { env } from 'pri/client';

if (env.isLocal) {
  console.log("I'm running in local now!");
}

if (env.isProd) {
  console.log("I'm running in production now!");
}

console.log('Custom env', env.get('theme'));
```

`pri/client` has some built-in env, like `isLocal` and `isProd`.

When execute `npm start`, `env.isLocal === true`, when execute `npm run build` or `npm run preview`, `env.isProd === true`.

You can also set your own custom env variable in config files, and get them by using `env.get()`.

```typescript
// ./src/config/config.default.ts
import { ProjectConfig } from 'pri/client';

export default {
  env: {
    theme: 'One Dark'
  }
} as ProjectConfig;
```

* After running `npm start`, `env.get()` will get from the map merged by `config.local.ts` and `config.default.ts`
* After running `npm run build`, `env.get()` will get from the map merged by `config.prod.ts` and `config.default.ts`

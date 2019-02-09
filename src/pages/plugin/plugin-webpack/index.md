# Webpack

Run webpack directly.

## run

Run only once.

```typescript
import { pri } from 'pri';

pri.webpack.run({
  mode: 'production',
  entryPath: '/user/workspace/index.ts'
});
```

## watch

Watch files.

```typescript
import { pri } from 'pri';

pri.webpack.watch({
  mode: 'production',
  entryPath: '/user/workspace/index.ts'
});
```

## devServer

Watch files and provide access to it by http.

```typescript
import { pri } from 'pri';

pri.webpack.devServer({
  mode: 'production',
  devPort: 1234,
  entryPath: '/user/workspace/index.ts'
});
```

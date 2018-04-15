# Service worker

You can use `.serviceWorker` to extend code in service worker.

## pipe

`pipe` to serviceWorker file, wether in local build or prod build.

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.serviceWorker.pipe(
    text => `
      \${text}
      self.addEventListener("fetch", event => {
        // some code here..
      })
      `
  );
};
```

## pipeAfterProdBuild

`pipeAfterProdBuild` allow you to extend code to serviceWorker after prod build, so you can use it together with `afterProdBuild`:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.build.afterProdBuild(stats => {
    instance.serviceWorker.pipeAfterProdBuild(
      text => `
      \${text}
      // use stats.assetsByChunkName do something..
    `
    );
  });
};
```

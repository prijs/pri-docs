# Service worker

You can use `.serviceWorker` to extend code in service worker.

## pipe

`pipe` to serviceWorker file, wether in local build or prod build. **`serviceWorker.pipe` must be wrapped in `onAnalyseProject`.**

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.project.onAnalyseProject(() => {
    instance.serviceWorker.pipe(
      text => `
      \${text}
      self.addEventListener("fetch", event => {
        // some code here..
      })
      `
    );
  });
};
```

## pipeAfterProdBuild

`pipeAfterProdBuild` allow you to extend code to serviceWorker after prod build, **`serviceWorker.pipeAfterProdBuild` must be wrapped in `afterProdBuild`.**

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

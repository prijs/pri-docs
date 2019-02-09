# Service worker

You can use `.serviceWorker` to extend code in service worker.

## pipe

`pipe` to serviceWorker file, wether in local build or prod build. **`serviceWorker.pipe` must be wrapped in `onAnalyseProject`.**

```typescript
import { pri } from 'pri';

pri.project.onAnalyseProject(() => {
  pri.serviceWorker.pipe(
    text => `
    ${text}
    self.addEventListener("fetch", event => {
      // some code here..
    })
    `
  );
});
```

## pipeAfterProdBuild

`pipeAfterProdBuild` allow you to extend code to serviceWorker after prod build, **`serviceWorker.pipeAfterProdBuild` must be wrapped in `afterProdBuild`.**

```typescript
import { pri } from 'pri';

pri.build.afterProdBuild(stats => {
  pri.serviceWorker.pipeAfterProdBuild(
    text => `
    ${text}
    // use stats.assetsByChunkName do something..
  `
  );
});
```

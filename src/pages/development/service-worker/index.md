# Service worker

You can use `.pipe` to extend code in service worker.

For example:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.pipe.set(
    'serviceWorker',
    text => `
      \${text}
      self.addEventListener("fetch", event => {
        // some code here..
      })
      `
  );
};
```

# Web Worker

Import a file ending with `.worker.tsx?`, and you can get a `Blob URL` web worker!

```tsx
// test.worker.ts
const ctx: Worker = self as any;

ctx.postMessage({ foo: 'foo' });

ctx.addEventListener('message', event => console.log(event));
```

```tsx
// app.tsx
import TestWorker from './test.worker';

const worker: Worker = new TestWorker();

worker.postMessage({ a: 1 });

worker.addEventListener('message', event => {});
```

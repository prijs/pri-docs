# Web Worker

```
.
├── src                           # Any .worker.tsx? file in this folder will be a web worker
│   └── components
│         ├── ast.worker.ts       # Web worker file
│         └── parser.worker.ts    # Web worker file
└── priconfig.json
```

Import a file ending with `.worker.tsx?`, and you can get a `Blob URL` web worker!

```tsx
// test.worker.ts
const ctx: Worker = self as any;

ctx.postMessage({ foo: 'foo' });

ctx.addEventListener('message', event => console.log(event));
```

```tsx
// app.tsx
import * as TestWorker from './test.worker';

const worker: Worker = new TestWorker();

worker.postMessage({ a: 1 });

worker.addEventListener('message', event => {});
```

# Debug online

Most time we debug code using `npm start` locally, but some times, we need to debug online.

For example, `http://example.com` serve following html:

```html
<script src="http://localhost:7777/static/bundle.js"></script>
```

We should use **`publicPath`** + **`outFileName`** to fit this path.

So, you can set **`./config/config.default.ts`** to:

```typescript
import { ProjectConfig } from 'pri';

export default {
  useHttps: false,
  devPort: 7777,
  publicPath: 'http://localhost:7777/static',
  outFileName: 'bundle.js'
} as ProjectConfig;
```

Then, run `npm start`.

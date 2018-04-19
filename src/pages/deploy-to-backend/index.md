# Deploy to backend

If the HTML page is controlled by the backend, you need to adjust the output name of `js` and `css`, and the output `html` will be ignored.

For example, here is a fixed template response:

```html
<link href="https://cdn.demo.com/app/static/bundle.css">
<script src="https://cdn.demo.com/app/static/bundle.js"></script>
```

and when publish, if files in `build` will upload to `https://cdn.demo.com/app` path, we should use **`distDir`** + **`outFileName`** to fit this path.

You can set **`./config/config.prod.ts`**:

```typescript
import { ProjectConfig } from 'pri';

export default {
  distDir: 'build/static',
  outFileName: 'bundle.js',
  outCssFileName: 'bundle.css'
} as ProjectConfig;
```

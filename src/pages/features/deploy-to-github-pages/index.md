# Deploy to github pages

Set up `publicPath`, `baseHref` in the **Custom config**.

```typescript
// src/config/config.default.ts
import { ProjectConfig } from "pri/client"

export default {
  publicPath: "/<your-repo-name>",
  baseHref: "/<your-repo-name>"
} as ProjectConfig
```

Then, execute `npm i gh-pages --save-dev`, and add npm scripts:

```json
"deploy": "pri build && gh-pages -d dist"
```

Finally, execute `npm run deploy`!

> This is because js files will be served from `/<your-repo-name>` and the root path changed to `/<your-repo-name>` on github-pages.

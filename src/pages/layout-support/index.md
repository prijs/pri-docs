# Layout support

> You can also create layout by [project dashboard](features/project-dashboard) easily!

Populate `./src/layouts/index.tsx` inside your project:

```tsx
import * as React from "react"

export default (props: React.Props<any>) => (
  <div>
    <p>Layout header</p>
    {props.children}
  </div>
)
```

This file will automatically become the layout file, and `props.children` are the content of the files in `./src/pages`

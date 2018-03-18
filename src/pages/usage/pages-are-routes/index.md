# Pages are routes

> You can also create pages by [project dashboard](../features/project-dashboard) easily!

## Home page

Populate `./src/pages/index.tsx` inside your project:

```tsx
import * as React from "react"
export default () => <div>Hello pri!</div>
```

Then this home page will route to `/`.

## Other pages

For example, populate `./src/pages/some-one/index.tsx` inside your project:

```tsx
import * as React from "react"
export default () => <div>Some one.</div>
```

Then this page will route to `/some-one`.

## Router rules

Routes will be automatically created by the file's path in `./src/pages/**/index.tsx`.

`index.tsx` will be read as router under each folders, The folder path is the URL path.

For example, file `./src/pages/user/about/index.tsx` will be found in route `/user/about`.

## Layout

See [Layouts support](layout-support).

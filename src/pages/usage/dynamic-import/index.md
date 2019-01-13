# Dynamic import

**Dynamic package**

Use `import()` to load packages!

```typescript
async function mergeObject(source: object, target: object) {
  const _ = await import("lodash")
  return _.mergeDeep(source, target)
}
```

**Dynamic component**

Use `react-loadable` to load component dynamically.

```typescript
import Loadable from "react-loadable"

const SomePage = Loadable({
  loader: () => import("../components/some-page"),
  loading: () => <div>loading..</div>
})

function renderDynamicPage() {
  return <SomePage />
}
```

See more in [react-loadable](https://github.com/thejameskyle/react-loadable).

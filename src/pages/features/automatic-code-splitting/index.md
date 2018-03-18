# Automatic code splitting

> As long as there are two or more files under `pages`, will automatically use code splitting.

We will automatically generate the following routing in `.temp` folder:

```typescript
const srcPagesIndex = Loadable({
  loader: () => import("..."),
  loading: () => null
})

const srcPagesOther = Loadable({
  loader: () => import("..."),
  loading: () => null
})
```

# Context

Using `.context` can help you share data between plugins.

For example, `pri-plugin-login` get user info, and `pri-plugin-track` want to get it.

## pipe

**`pri-plugin-login/src/index.tsx`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  const currentUser = getCurrentUser() // You can also cache user information in some files.

  instance.context.pipe(context => {
    ...context,
    currentUser
  })
}
```

## get

**`pri-plugin-track/src/index.tsx`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  instance.context.get().currentUser
}
```

Don't forget to set dependence in `pri-plugin-track/package.json`:

```json
"pri": {
  "dependencies": [
    "pri-plugin-login"
  ]
}
```

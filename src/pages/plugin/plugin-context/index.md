# Context

Using `.context` can help you share data between plugins.

For example, `pri-plugin-login` get user info, and `pri-plugin-track` want to get it.

## pipe

**`pri-plugin-login/src/plugin/index.ts`**

```typescript
import { pri } from 'pri';

pri.context.currentUser = getCurrentUser(); // You can also cache user information in some files.
```

## get

**`pri-plugin-track/src/plugin/index.ts`**

```typescript
import { pri } from 'pri';

pri.context.currentUser;
```

Don't forget to set dependence in `pri-plugin-track/src/index.ts`:

```typescript
export const config = () => ({
  name: 'pri-plugin-track',
  dependencies: ['pri-plugin-login']
});
```

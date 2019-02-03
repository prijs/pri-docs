# Dev Service

Use `.devService` to extend dev service in your plugin.

**`./src/plugin/index.ts`**

```typescript
import { pri } from 'pri';

pri.devService.on('createCard', () => {
  // fs.writeFile ...
});
```

Every thing is done, you can add service socket api by using `devService.on`, then you can change project files or do anything you want!

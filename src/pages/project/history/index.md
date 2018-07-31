# History

Get history instance from `pri/client`:

```typescript
import { history } from 'pri/client';
```

So we can listen the router change:

```typescript
history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});
```

For more details for history, see [history docs](https://github.com/ReactTraining/history#readme).

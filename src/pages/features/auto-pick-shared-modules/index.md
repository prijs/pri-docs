# Auto pick shared modules

## Isolated dependence

If `jquery` and `lodash` are either dependent by each files like following code:

```typescript
// src/pages/foo.tsx
import * as $ from "jquery"

// src/pages/bar.tsx
import * as _ from "lodash"
```

`JQuery` will be packaged into the `foo.tsx`, and `lodash` will be packaged into the `bar.tsx`.

## Shared dependence

If `jquery` is both dependent by each files like following code:

```typescript
// src/pages/foo.tsx
import * as $ from "jquery"

// src/pages/bar.tsx
import * as $ from "jquery"
```

Neither `foo.tsx` nor `bar.tsx` will package `jquery`, instand, `jquery` will be packaged into `chunk` file.

# Quick import

## Import from `/src`

You can use `@` replace `../../src` in your project:

/src/pages/some-page/index.tsx

```tsx
import { util } from '../../utils'; // Forgot this.
import { util } from '@/utils'; // Try @!
```

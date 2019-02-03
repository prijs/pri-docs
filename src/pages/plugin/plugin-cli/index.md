# Cli

CLi behavior control.

## lockInitType

Lock project type when run `npx pri init`.

```typescript
import { pri } from 'pri';

pri.cli.lockInitType('component'); // Skip type choosen when run npm run init. And choose component by default.
```

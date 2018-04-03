# Build

You can control build behaviors.

## pipeConfig

Change webpack config by using `pipeConfig`:

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  instance.build.pipeConfig((env, config) => {
    return {
      ...config
      // your custom options..
    }
  })
}
```

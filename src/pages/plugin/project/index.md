# Project

Use `.project` to extend project operator.

## onAnalyseProject

Every time `pri` scan project files.

**`./src/index.ts`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  instance.project.onAnalyseProject((files, env, projectConfig) => {
    return {
      myCustomPlugin: {
        hasComponents: files.some(file => {
          const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))
          if (!relativePath.startsWith("src/components")) {
            return true
          }
          return false
        })
      }
    }
  })
}
```

| Option        | Description                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| files         | All project's files.                                                                                                 |
| env           | `"local"` when excute `pri dev`. <br/> `"prod"` when excute like `pri build` and `pri preview` other than `pri dev`. |
| projectConfig | See [Config](../config).                                                                                             |

### Return value

The return value from `onAnalyseProject` callback will merge into project analyse info, you can access it from `onCreateEntry`.

## onCreateEntry

Every time `pri` create entry file.

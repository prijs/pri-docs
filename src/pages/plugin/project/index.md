# Project

Use `.project` to extend project operator.

## getProjectRootPath

Get project root path from `project.getProjectRootPath`:

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  const projectRootPath = instance.project.getProjectRootPath()
}
```

## onAnalyseProject

Every time `pri` scan project files.

**`./src/index.ts`**

```typescript
import { pri } from "pri"

interface IAnalyseInfo {
  myCustomPlugin: {
    hasComponents: boolean
  }
}

export default (instance: typeof pri) => {
  instance.project.onAnalyseProject((files, env, projectConfig) => {
    return {
      myCustomPlugin: {
        hasComponents: files.some(file => {
          const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))
          return relativePath.startsWith("src/components")
        })
      }
    } as IAnalyseInfo
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

Every time `pri` create entry file. You can get analyse info from first params in first callback function.

**`./src/index.ts`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  instance.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry, env, projectConfig) => {
    // Get analyseInfo from above.
    const hasComponents = analyseInfo.myCustomPlugin.hasComponents

    const componentsRelativePath = path.relative(".temp", "src/components")

    if (hasComponents) {
      // Expand importer code before header.
      entry.pipeHeader(header => {
        return `
          \$\{header\}
          import components from "\$\{componentsRelativePath\}"
        `
      })
    }
  })
}
```

### Entry

You can use methods like `entry.pipeHeader` and `entry.pipeBody` to extend entry code. Usage:

```typescript
entry.pipeBody(str => str)
```

### Entry structor

Here are some buit-in pipe position:

`pipeHeader` `pipeBody` `pipeEntryComponent` `pipeEntryClassBody` `pipeRenderRouter` `pipeRenderRoutes`

```js
// ----- pipeHeader before
import createBrowserHistory from "history/createBrowserHistory"
import { setCustomEnv, setEnvLocal, setEnvProd } from "pri/client"
import * as React from "react"
import * as ReactDOM from "react-dom"
import Loadable from "react-loadable"
import { Redirect, Route, Router, Switch } from "react-router-dom"
// ----- pipeHeader after

// ----- pipeBody before
const customHistory = createBrowserHistory({
  basename: ".." // baseHref from projectConfig
})
// ----- pipeBody after

// ----- pipeEntryComponent before
class Root extends React.PureComponent<any, any> {
  // ----- pipeEntryClassBody before
  // ----- pipeEntryClassBody after

  public render() {
    return (
      // ----- pipeRenderRouter before
      <Router>
        // ----- pipeRenderRoutes before
        // ----- pipeRenderRoutes after
      </Router>
      // ----- pipeRenderRouter after
    )
  }
}
// ----- pipeEntryComponent after
```

### Custom pipe

You can also get or set custom code position in plugins. Using `.pipe`:

```typescript
entry.pipeBody(body => {
  return `
    \$\{body\}
    some code after body.
    \${entry.pipe.get("my-custom-position", "defaultValue")}
    some other code.
  `
})
```

And in other plugins, you can pipe custom position:

```typescript
entry.pipe.set("my-custom-position", text => {
  return `
    \$\{text\}
    some code.
  `
})
```

**`pipe`**

| Option | Params                                 | Description           |
| ------ | -------------------------------------- | --------------------- |
| get    | `name: string`, `defaultValue: string` | Get custom pipe code. |
| set    | `pipe: (str: string) => string`        | Set custom pipe code. |

## whiteFileRules

Pri uses a white list for project file management. You can use `whiteFileRules.add` to add project white file list.

```typescript
export default (instance: typeof pri) => {
  instance.project.whiteFileRules.add(file => {
    const relativePath = path.relative(projectRootPath, file.dir)
    return relativePath === "src/pages" && file.name === "404" && file.ext === ".tsx"
  })
})
```

It mean that file or dir is validate, when return `true`.

> Any project files that are not on the white list will report error.

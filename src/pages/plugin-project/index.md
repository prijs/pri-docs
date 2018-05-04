# Project

Use `.project` to extend project operator.

## getProjectRootPath

Get project root path from `project.getProjectRootPath`:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  const projectRootPath = instance.project.getProjectRootPath();
};
```

## getProjectConfig

Get project config by env: `local` or `prod`.

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  const projectConfig = instance.project.getProjectConfig('prod');
};
```

## onAnalyseProject

Every time `pri` scan project files.

**`./src/index.ts`**

```typescript
import { pri } from 'pri';

interface IAnalyseInfo {
  myCustomPlugin: {
    hasComponents: boolean;
  };
}

export default (instance: typeof pri) => {
  instance.project.onAnalyseProject((files, env, projectConfig, setPipe) => {
    return {
      myCustomPlugin: {
        hasComponents: files.some(file => {
          const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name));
          return relativePath.startsWith('src/components');
        })
      }
    } as IAnalyseInfo;
  });
};
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
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry, env, projectConfig) => {
    // Get analyseInfo from above.
    const hasComponents = analyseInfo.myCustomPlugin.hasComponents;

    const componentsRelativePath = path.relative('.temp', 'src/components');

    if (hasComponents) {
      // Expand importer code before header.
      entry.pipeHeader(header => {
        return `
          \$\{header\}
          import components from "\$\{componentsRelativePath\}"
        `;
      });
    }
  });
};
```

### Entry

You can use methods like `entry.pipeHeader` and `entry.pipeBody` to extend entry code. Usage:

```typescript
entry.pipeBody(str => str);
```

### Entry structor

Here are some buit-in pipe position:

**`app.tsx`**

```js
// ----- pipeAppHeader before
import createBrowserHistory from "history/createBrowserHistory"
import { setCustomEnv, setEnvLocal, setEnvProd } from "pri/client"
import * as React from "react"
import * as ReactDOM from "react-dom"
import Loadable from "react-loadable"
import { Redirect, Route, Router, Switch } from "react-router-dom"
// ----- pipeAppHeader after

// ----- pipeAppBody before
export const pageLoadableMap = new Map<string, any>()
export const customHistory = createBrowserHistory({
  basename: ".." // baseHref from projectConfig
})
// ----- pipeAppBody after

// ----- pipeAppComponent before
export class App extends React.PureComponent<any, any> {
  // ----- pipeAppClassBody before
  // ----- pipeAppClassBody after

  public render() {
    return (
      // ----- pipeAppRouter before
      <Router>
        // ----- pipeAppRoutes before
        // ----- pipeAppRoutes after
      </Router>
      // ----- pipeAppRouter after
    )
  }
}
// ----- pipeAppComponent after
```

**`entry.tsx`**

```js
// ----- pipeEntryHeader before
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, { pageLoadableMap } from './app';
// ----- pipeEntryHeader after

// ----- pipeEntryRender before
ReactDOM.render(<Root />, document.getElementById('root'));
// ----- pipeEntryRender after
```

### Custom pipe

You can also get or set custom code position in plugins. Using `entry.pipe`:

```typescript
instance.project.onCreateEntry((analyseInfo: IAnalyseInfo, entry, env, projectConfig) => {
  entry.pipeBody(body => {
    return `
    \$\{body\}
    some code after body.
    \${entry.pipe.get("my-custom-position", "defaultValue")}
    some other code.
  `;
  });
});
```

And in other plugins, you can pipe custom position by using `setPipe` inside `onAnalyseProject`:

```typescript
instance.project.onAnalyseProject((files, env, projectConfig, setPipe) => {
  setPipe('my-custom-position', text => {
    return `
    \$\{text\}
    some code.
  `;
  });
});
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

## lint

You can run lint anywhere by execute `project.lint()`:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.project.lint();
};
```

## checkProjectFiles

Check project white file list.

`pri dev` and `pri build` has built in `checkProjectFiles` function, you can call this function when add a new command.

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  const projectConfig = instance.project.getProjectConfig('prod');
  await instance.project.checkProjectFiles(projectConfig);
};
```

## ensureProjectFiles

Ensure important files exist, like `.gitignore`, `.npmignore` and so on. You can call it in a custom command.

This method will called when excute `pri init`, `pri`, `pri build`.

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  const projectConfig = instance.project.getProjectConfig('prod');
  await instance.project.ensureProjectFiles(projectConfig);
};
```

## addProjectFiles

Hook when running `addProjectFiles`, you can add your custom files here:

```typescript
import { pri } from 'pri';

export default (instance: typeof pri) => {
  instance.project.addProjectFiles({
    fileName: 'abc.json',
    pipeContent: prevContent =>
      JSON.stringify({
        bin: 'npm start'
      })
  });
};
```

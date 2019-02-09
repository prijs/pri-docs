# Web UI

You can extend web ui in your plugin. Pri load web ui plugin by implement `getUIPlugins` function in `./src/index.ts`.

```
.
├── src
│   ├── plugin
│   ├── web-ui-one
│   │       └── index.tsx    # WebUI plugin
│   ├── web-ui-two
│   │       └── index.tsx    # WebUI plugin
│   └── index.ts
└── priconfig.json
```

First, create some webui code into `src` folder. For example, create file `./src/plugin/web-ui-one/index.tsx`:

```tsx
import * as React from 'react';

class View extends React.Component<any, any> {
  public render() {
    return <div>Test</div>;
  }
}

export default {
  position: 'menu',
  view: View，
  init: (applicationAction: any) => {}
};
```

Then, you plugin will be loaded into the hole of `menu`.

Finally, import to in `./src/index.ts`:

```ts
export const getUIPlugins = () => [import('./web-ui-one'), import('./web-ui-two')];
```

## Debug webui

You can debug webui by execute `npx pri dev -d` in your project!

Don't forget to execute `npm start` in your plugin's dir.

## Position enums

Here is all positions in the webUI:

<img src="https://user-images.githubusercontent.com/7970947/39683416-de6ba0f6-51e7-11e8-9a6e-124f63ba4415.png" width={800} />

### `menu`

Append menu on the top bar. You can add some operate button here.

### `tree-[name]`

When user click the left tree, for example `routes`, `tree-routes` will be rendered on the right.

So you can register both tree and `tree-[name]`, and make sure they have same keys.

## applicationAction

We can control webUI using `applicationAction`, and we can get it on the `init` callback:

```tsx
import * as React from 'react';

class View extends React.Component<any, any> {}

export default {
  position: 'menu',
  view: View，
  init: (applicationAction: any) => {
    // Access applicationAction
  }
};
```

### get analyseInfo

we can get analyseInfo from webUI, you can access it in `applicationAction.applicationStore.status.analyseInfo`.

### event

TODO

### pipeTreeNode

We can expend left tree on the webui:

```tsx
import { Icon } from 'antd';

const TreeIcon = (props: any) => <Icon style={{ marginRight: 5 }} {...props} />;

applicationAction.pipeTreeNode((treeData: any) => {
  treeData[0].children.push({
    key: 'project-analyse',
    title: `ProjectAnalyse`,
    icon: <TreeIcon type="setting" />,
    children: [
      // The same structor with parent, and can be empty.
    ]
  });
  return treeData;
});
```

In above code, we register a new tree element:

<img src="https://user-images.githubusercontent.com/7970947/39683744-c252c474-51e9-11e8-932c-de87f1aa3bcf.png" width={240} />

And when we click it, `tree-project-analyse` will be loaded on the right area:

<img src="https://user-images.githubusercontent.com/7970947/39683806-1b60d3a8-51ea-11e8-90df-3058941bcdd1.png" width={800} />

So we can set position to `tree-project-analyse` to hold it:

```tsx
export default {
  position: 'tree-project-analyse',
  view: View，
  init: (applicationAction: any) => {
    // Access applicationAction
  }
};
```

### fetch

We can communicatie with the node code in webUI.

Here is an example, first, we register a web socket callback in `src/index.tsx`:

```typescript
pri.devService.on('someName', async clientData => {
  // Get data here
  return 'nice to meet you';
});
```

And we can trigger it, when calling `fetch` in webUI:

```typescript
import { Connect } from 'dob-react';

@Connect
class WebuiPage extends React.PureComponent<Props, State> {
  onClick = () => {
    const serverData = await this.props.ApplicationAction.fetch('someName', 'hello');
  };
}
```

So, we send `hello` to node from webUI, and the `clientData` equals to `hello`, and in webUI, the `serverData` equals to `nice to meet you`

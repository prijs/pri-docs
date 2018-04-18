# Web UI

You can extend web ui in your plugin.

First, set your `web-entry` path in plugin's `package.json`:

```json
{
  "pri": {
    "type": "plugin",
    "web-entry": "./built/web/index.js"
  }
}
```

Then, create file `./src/web/index.tsx`:

```tsx
import * as React from "react"

class View extends React.Component<any, any> {
  public render() {
    return <div>Test</div>
  }
}

export default {
  position: "menu",
  view: View
}
```

Then, you plugin will be loaded into the hole of `menu`.

## Debug webui

You can debug webui by execute `npx pri dev -d` in your project!

Don't forget to execute `npm start` in your plugin's dir.

---

TODO.

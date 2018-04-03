# Service

You can extend service in your plugin.

First, set your `service-entry` path in plugin's `package.json`:

```json
{
  "pri": {
    "type": "plugin",
    "service-entry": "./built/service/index.js"
  }
}
```

Then, create file `./src/service/index.ts`:

```typescript
export default (api: any) => {
  // api.on("someName", doSomething)
}
```

Every thing is done, you can add service socket api by using `api.on`, then you can change project files or do anything you want!

# Auto prefetch

`pri` will inject preload scripts when this first screen is loaded:

```typescript
injectPreload(/* thunk1 */)
injectPreload(/* thunk2 */)
injectPreload(/* thunk3 */)
// ...
```

In this way, **we do not have to send a network request when page jumpping!**

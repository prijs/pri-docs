# Markdown support

For example, populate `./src/pages/example-page/index.md` inside your project:

```text
## Markdown File
```

Then this page will route to `/example-page`.

## Layout

Create `./src/layouts/markdown.tsx`, then all markdown pages will use this layout template. For example:

```tsx
export default () => <div style={{ padding: 10 }}>{this.props.children}</div>
```

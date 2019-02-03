# Markdown page

```
.
├── src
│   └── pages
│         ├── index.md         # Markdom page, route to `/`
│         └── hello
│               └── index.md   # Markdom page, route to `/hello`
└── priconfig.json
```

For example, populate `./src/pages/example-page/index.md` inside your project:

```text
## Markdown File
```

Then this page will route to `/example-page`.

## Layout

```
.
├── src
│   └── layouts
│         └── markdown.tsx         # Layout for markdown
└── priconfig.json
```

Create `./src/layouts/markdown.tsx`, then all markdown pages will use this layout template. For example:

```tsx
export default () => <div style={{ padding: 10 }}>{this.props.children}</div>;
```

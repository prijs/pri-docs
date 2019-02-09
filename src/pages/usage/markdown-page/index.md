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

## Mdx

```
.
├── src
│   └── pages
│         ├── index.mdx         # Markdom page, route to `/`
│         └── hello
│               └── index.mdx   # Markdom page, route to `/hello`
└── priconfig.json
```

You can set `.mdx` instead of `.md`, and you can write `jsx` in your markdown source code!

```mdx
import { Chart } from '../components/chart';

# Here’s a chart

The chart is rendered inside our MDX document.

<Chart />
```

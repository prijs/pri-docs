# Scss/Less/Css support

## sass

Install `sass-loader` first, or it will be auto installed on the first execution of `npm start` :

```shell
npm i sass-loader --save
```

Then you can create scss files, and include it from `pages/**/index.tsx`:

```typescript
import "./index.scss"
```

## less

Install `less-loader` first, or it will be auto installed on the first execution of `npm start` :

```shell
npm i less-loader --save
```

The same as sass.

## css

Native support css:

```typescript
import "./index.css"
```

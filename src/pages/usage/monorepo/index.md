# Monorepo

If you want to make project and NPM closer, you can try mode `monorepo`.

It's easy to enable `monorepo`, the all you need is to create a new folder `packages` on your project root directory:

```bash
.
├── packages         # Entry for monorepo
├── src                 
└── priconfig.json
```

For example, you can create a new folder `my-package` in directory `packages` to declare a new package `my-package`:

```bash
.
├── packages   
│      └ my-package
├── src                 
└── priconfig.json
```

Then select `my-package` after run `npx pri init` to init this package.

### How to develop using Monorepo

The command to run a monorepo project is the same as that for a normal project.

For example, if you want to run docs for `my-packages`, you can do this:

```bash
npm run docs

? Choose packages (Use arrow keys)
  Root (Current Project) 
  ──────────────
❯ Package: my-package
```

As you can see, just select what package you want to run.

Also, if you want to run `npm start` in root project, just select `Root`:

```bash
npm start

? Choose packages (Use arrow keys)
❯ Root (Current Project) 
  ──────────────
  Package: my-package
```
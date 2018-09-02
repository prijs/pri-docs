# Plugin test

It's recommended to write plug-ins in units of function. For example judege whether there is a `components` folder:

**`src/methods.ts`**

```typescript
export function judgeHasComponents(projectRootPath: string, files: path.ParsedPath[]) {
  return files.some(file => {
    const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))
    if (relativePath.startsWith("src/components")) {
      return true
    }
    return false
  })
}
```

So we can test it completely:

**`tests/index.ts`**

```typescript
test("Multiple files", t => {
  const relativeProjectFiles = [
    "src/components/index.tsx",
    "src/components/button/index.tsx",
    "src/components/select/index.tsx"
  ]
  t.true(judgeHasComponents(testProjectRootPath, testFilePaths(relativeProjectFiles)))
})
```

And we can safely use this `judgeHasComponents` function:

**`./src/index.tsx`**

```typescript
instance.project.onAnalyseProject(files => {
  return {
    customPlugin: {
      hasComponents: judgeHasComponents(projectRootPath, files)
    }
  }
})
```

## Run test

```bash
npm test
```

```bash
  3 passed
------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |      100 |      100 |      100 |                   |
 methods.ts |      100 |      100 |      100 |      100 |                   |
------------|----------|----------|----------|----------|-------------------|
```

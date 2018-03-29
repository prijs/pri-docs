(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{170:function(n,t,e){"use strict";e.r(t),t.default='# Plugin test\n\nIt\'s recommended to write plug-ins in units of function. For example judege whether there is a `components` folder:\n\n**`src/methods.ts`**\n\n```typescript\nexport function judgeHasComponents(projectRootPath: string, files: path.ParsedPath[]) {\n  return files.some(file => {\n    const relativePath = path.relative(projectRootPath, path.join(file.dir, file.name))\n    if (relativePath.startsWith("src/components")) {\n      return true\n    }\n    return false\n  })\n}\n```\n\nSo we can test it completely:\n\n**`tests/index.ts`**\n\n```typescript\ntest("Multiple files", t => {\n  const relativeProjectFiles = [\n    "src/components/index.tsx",\n    "src/components/button/index.tsx",\n    "src/components/select/index.tsx"\n  ]\n  t.true(judgeHasComponents(testProjectRootPath, testFilePaths(relativeProjectFiles)))\n})\n```\n\nAnd we can safely use this `judgeHasComponents` function:\n\n**`src/index.ts`**\n\n```typescript\ninstance.project.onAnalyseProject(files => {\n  return {\n    customPlugin: {\n      hasComponents: judgeHasComponents(projectRootPath, files)\n    }\n  }\n})\n```\n\n## Run test\n\n```bash\nnpm test\n```\n\n```bash\n  3 passed\n------------|----------|----------|----------|----------|-------------------|\nFile        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |\n------------|----------|----------|----------|----------|-------------------|\nAll files   |      100 |      100 |      100 |      100 |                   |\n methods.ts |      100 |      100 |      100 |      100 |                   |\n------------|----------|----------|----------|----------|-------------------|\n```\n'}}]);
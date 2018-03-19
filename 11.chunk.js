(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(n,e,i){"use strict";i.r(e),e.default='# Write plugin\n\nYou can create a plug-in to change the built-in behavior for `pri`.\n\n## Install\n\nFirst, create an empty folder:\n\n```bash\nmkdir test; cd test\nnpm init\nnpm install pri\n```\n\nThen, init the pri plugin:\n\n```bash\nnpx pri plugin-init\n```\n\nNo `npx`? Run `./node_modules/.bin/pri plugin-init`\n\n## Usage\n\nIt\'s easy to expand the commander, analyse project files, and modifying the generated entry file by plugins.\n\n**`./src/index.ts`**\n\n```typescript\nimport { pri } from "pri"\n\nexport default (instance: typeof pri) => {\n  // Add new command line: pri deploy\n  instance.commands.registerCommand({\n    name: "deploy",\n    description: "desc",\n    action: () => {}\n  })\n\n  // Run extra code between pri init\n  instance.commands.expandCommand({\n    name: "init",\n    beforeAction: (...args: any[]) => {}\n    afterAction: (...args: any[]) => {}\n  })\n}\n```\n'}}]);
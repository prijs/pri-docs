# Commands

Use `.commands` to extend the commander.

## registerCommand

Register new command by using `registerCommand` method.

**`./src/plugin/index.ts`**

```typescript
import { pri } from 'pri';

// Add new commander: pri deploy
pri.commands.registerCommand({
  name: 'deploy',
  description: 'desc',
  options:[['-d', '--debug', 'deploy debug']]
  action: async () => {}
});
```

Then you can use `pri deploy`.

| Option      | Description                                    |
| ----------- | ---------------------------------------------- |
| name        | Command name, `pri <name>`.                    |
| description | Description for command, when excute `pri -h`. |
| options     | Command options                                |
| action      | Action for command, when excute `pri <name>.`  |

## expandCommand

Expand commander which already exist.

**`./src/plugin/index.ts`**

```typescript
import { pri } from "pri"

// Run extra code between pri init
pri.commands.expandCommand({
  name: "init",
  beforeAction: async (...args: any[]) => {}
  afterAction: async (...args: any[]) => {}
})
```

| Option       | Description                       |
| ------------ | --------------------------------- |
| name         | Exist command name, `pri <name>`. |
| beforeAction | Action before `pri <name>`.       |
| afterAction  | Action after `pri <name>`.        |
| options      | Command options                   |

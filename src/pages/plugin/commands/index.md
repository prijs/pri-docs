# Commands

Use `.commands` to extend the commander.

## registerCommand

Register new command by using `registerCommand` method.

**`./src/index.ts`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  // Add new command line: pri deploy
  instance.commands.registerCommand({
    name: "deploy",
    description: "desc",
    action: () => {}
  })
}
```

Then you can use `pri deploy`.

#### name

Command name, `pri <name>`.

#### description

Description for command, when excute `pri -h`.

#### action

Action for command, when excute `pri <name>.`

## expandCommand

Expand exist command by using `expandCommand`.

**`./src/index.ts`**

```typescript
import { pri } from "pri"

export default (instance: typeof pri) => {
  // Run extra code between pri init
  instance.commands.expandCommand({
    name: "init",
    beforeAction: (...args: any[]) => {}
    afterAction: (...args: any[]) => {}
  })
}
```

#### name

Exist command name, `pri <name>`.

#### beforeAction

Action before `pri <name>`.

#### afterAction

Action after `pri <name>`.

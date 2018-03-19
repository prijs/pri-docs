# Built in data stream

> You can also create stores by project dashboard easily!

Populate `./src/stores/[storeName].ts` inside your project, for example `user`:

```typescript
// ./src/stores/user.ts
import { observable, inject, Action } from "dob"

@observable
export class UserStore {
  public testValue = 1
}

export class UserAction {
  @inject(UserStore) userStore: UserStore

  @Action
  public async test() {
    this.userStore.testValue++
  }
}
```

Then, **all pages are automatically injected into all stores**, and automatically create type helper file in `./src/helper.ts`.

All you should do is call or use this store on pages:

```tsx
// ./src/pages/index.tsx
import { stores } from "../helper"

import * as React from "react"

export default class Page extends React.PureComponent<typeof stores, any> {
  public render() {
    return <div onClick={this.props.UserAction.test}>{this.props.UserStore.testValue}</div>
  }
}
```

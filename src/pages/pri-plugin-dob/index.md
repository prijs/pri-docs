# pri-plugin-dob &middot; [![npm version](https://img.shields.io/npm/v/pri-plugin-dob.svg?style=flat-square)](https://www.npmjs.com/package/pri-plugin-dob)

[dob](https://github.com/dobjs/dob) is a tool for monitoring object changes, and [dob-react](https://github.com/dobjs/dob-react) can help you manage stores in react.

We provide a pri-plugin for [dob](https://github.com/dobjs/dob)!

## Usage

```bash
npm i pri-plugin-dob
```

## Features

* Extend webui for store operates.
* Allow files in path `src/stores/**`, and automatic binding stores into entry.

Let's try it! For example, create a store named `application`:

**src/stores/application.tsx**

```typescript
import { Action, inject, observable } from 'dob';

@observable
export class ApplicationStore {
  public testValue = 1;
}

export class ApplicationAction {
  @inject(ApplicationStore) public applicationStore: ApplicationStore;

  @Action
  public test() {
    this.applicationStore.testValue++;
  }
}
```

`pri-plugin-dob` will automatic create `pri/stores` for ts defintion, then you can use it like this:

**src/pages/index.tsx**

```typescript
import * as React from 'react';
import { stores } from 'pri/stores';

export default class View extends React.PureComponent<typeof stores, any> {
  render() {
    // this.props.ApplicationStore.testValue
    // this.props.ApplicationAction.test()
  }
}
```

For more skills about using dob in pri, please see [dob docs](https://github.com/dobjs/dob).

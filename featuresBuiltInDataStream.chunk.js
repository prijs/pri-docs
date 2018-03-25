(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,s){"use strict";s.r(t),t.default='# Built in data stream\n\n> You can also create stores by project dashboard easily!\n\nPopulate `./src/stores/[storeName].ts` inside your project, for example `user`:\n\n```typescript\n// ./src/stores/user.ts\nimport { observable, inject, Action } from "dob"\n\n@observable\nexport class UserStore {\n  public testValue = 1\n}\n\nexport class UserAction {\n  @inject(UserStore) userStore: UserStore\n\n  @Action\n  public async test() {\n    this.userStore.testValue++\n  }\n}\n```\n\nThen, **all pages are automatically injected into all stores**, and automatically create type helper file in `./src/helper.ts`.\n\nAll you should do is call or use this store on pages:\n\n```tsx\n// ./src/pages/index.tsx\nimport { stores } from "../helper"\n\nimport * as React from "react"\n\nexport default class Page extends React.PureComponent<typeof stores, any> {\n  public render() {\n    return <div onClick={this.props.UserAction.test}>{this.props.UserStore.testValue}</div>\n  }\n}\n```\n'}}]);
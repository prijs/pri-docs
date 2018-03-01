import { Action, inject, observable } from "dob"

@observable
export class UserStore {
  public testValue = 1
}

export class UserAction {
  @inject(UserStore) public userStore: UserStore

  @Action
  public test() {
    this.userStore.testValue++
  }
}

import { Action, inject, observable } from "dob"

@observable
export class ApplicationStore {
  public testValue = 1
}

export class ApplicationAction {
  @inject(ApplicationStore) public applicationStore: ApplicationStore

  @Action
  public test() {
    this.applicationStore.testValue++
  }
}

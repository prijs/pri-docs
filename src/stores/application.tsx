import { Action, inject, observable } from 'dob';

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

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

  @Action
  public async testAsync() {
    await delay();
    Action(() => {
      this.applicationStore.testValue++;
    });
  }
}

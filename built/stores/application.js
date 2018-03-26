"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dob_1 = require("dob");
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
let ApplicationStore = class ApplicationStore {
    constructor() {
        this.testValue = 1;
    }
};
ApplicationStore = __decorate([
    dob_1.observable
], ApplicationStore);
exports.ApplicationStore = ApplicationStore;
class ApplicationAction {
    test() {
        this.applicationStore.testValue++;
    }
    async testAsync() {
        await delay();
        dob_1.Action(() => {
            this.applicationStore.testValue++;
        });
    }
}
__decorate([
    dob_1.inject(ApplicationStore)
], ApplicationAction.prototype, "applicationStore", void 0);
__decorate([
    dob_1.Action
], ApplicationAction.prototype, "test", null);
__decorate([
    dob_1.Action
], ApplicationAction.prototype, "testAsync", null);
exports.ApplicationAction = ApplicationAction;
//# sourceMappingURL=application.js.map
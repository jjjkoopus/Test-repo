export class Weekday {
    constructor(name, order) {
        this._name = name;
        this._order = order;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get order() {
        return this._order;
    }

    set order(value) {
        this._order = value;
    }

    logInfo() {
        console.log(`${this._name} is weekday number ${this._order}`);
    }
}

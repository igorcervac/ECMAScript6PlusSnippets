export default class Vehicle {
    constructor(model, brand){
    this._model = model;
    this._brand = brand;
    }

    get model(){
        return this._model;
    }

    set model(model){
        return this._model = model;
    }

    get brand(){
        return this._brand;
    }

    set brand(brand){
        return this._brand = brand;
    }

    about(){
        console.log(`${this._brand} ${this._model}`);
    }
}
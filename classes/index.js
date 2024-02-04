class Vehicle {
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

class Car extends Vehicle{
    constructor(model, brand){
        super(model,brand);
    }
}

class Motorcycle extends Vehicle{
    constructor(model, brand){
        super(model,brand);
    }
}

let car = new Car('Civic', 'Honda');
car.about();

let moto = new Motorcycle('Hayabusa','Suzuki');
moto.about();

moto.model = 'Katana';
console.log(moto.model);
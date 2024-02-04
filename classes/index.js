import Car from "./car.js"
import Motorcycle from "./motorcycle.js"

let car = new Car('Civic', 'Honda');
car.about();

let moto = new Motorcycle('Hayabusa','Suzuki');
moto.about();

moto.model = 'Katana';
console.log(moto.model);
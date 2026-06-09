// Part 1 
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "beep.";
    }

    toString() {
        return `the selected vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}; 

let myFirstCar = new Vehicle("Ford", "Focus", 1999); 
console.log( myFirstCar.honk()); 
console.log( myFirstCar.toString()); 
// the selected vehicle is a Ford Focus from 1999


// Part 2 
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4; 
    }
}

let myFirstCar2 = new Car("Ford", "Raptor", 2026); 
console.log(myFirstCar2.toString()); // the selected vehicle is a Ford Raptor from 2026.
console.log(myFirstCar2.honk()); // beep.
console.log(myFirstCar2.numWheels); // 4 


// Part 3 
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year); 
        this.numWheels = 2; 
    }
    revEngine() {
    return "VROOM!!!"; 
    }
}

let myFirstMotorCycle = new Motorcycle("Yamaha", "Ninja", 2021); 
console.log(myFirstMotorCycle.toString()); // the selected vehicle is a Yamaha Ninja from 2021.
console.log(myFirstMotorCycle.honk()); // beep.
console.log(myFirstMotorCycle.revEngine()); // VROOM!!!
console.log(myFirstMotorCycle.numWheels); // 2 


// Part 4 
class Garage {
    constructor(capacity) {
        this.vehicles= [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here! ";
        }
        if (this.vehicles.length >= this.capacity) {
            return "sorry we are full at the moment"; 
        }
        this.vehicles.push(newVehicle);
        return "vehicle added! "
    }
}

let garage = new Garage(2); 
console.log( garage.add(new Car("Ford", "Pinto", 1980))); // vehicle added
console.log( garage.add(("Taco"))); 

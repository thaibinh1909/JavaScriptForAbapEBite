console.log("Classes definition");

class car {
    constructor(make, model) {
        this.make = make;
        this.currentSpeed = 0;
    }
    logSpeed() {
        console.log(`speedometer: ${this.currentSpeed}`);
    }
    startEngine() {
        console.log("car started");
        this.logSpeed();
    }
    stopEngine() {
        console.log("engine off");
    }
    accelerate(kmh) {
        typeof kmh === "number"
            ? (this.currentSpeed += kmh)
            : console.error("speed must be a number");
        this.logSpeed();
    }
    brake() {
        this.currentSpeed = 0;
        this.logSpeed();
    }
    static staticMethod() {
        return "hello from a static class method";
    }
    static staticAttribute = "a static attribute";
}

// console.log(car.name); // name of the class
let carClass = class {
    constructor(make) {
        this.make = make;
    }
}
// console.log(carClass.name); // name of the variable (carClass)

let myCarClass = class car {
    constructor(make) {
        this.make = make;
    }
}
// console.log(myCarClass.name); // car

let newCar2 = new car("BMW", "700");
console.log(newCar2.model);
console.log();

let newCar = new car("Merc", "G63");
console.log(`Manufacturer: ${newCar.make}`);
// console.log(`Model: ${newCar.model}`);
newCar.startEngine();
newCar.accelerate(5);
newCar.accelerate(10);
newCar.brake();
newCar.stopEngine();

console.log();
console.log("static method attribute");

console.log(car.staticMethod());
console.log(car.staticAttribute);

console.log();
console.log("inheritance");

class carModel extends car {
    constructor(make, model) {
        super(make);
        this.model = model;
    }
}

let newCarModel = new carModel("tesla", "model y");
console.log(`new car: ${newCarModel.make} ${newCarModel.model}`);

try {
    let newCar = new car("Audi");
    console.log(`${newar.make}`);
} catch {
    console.log("something went wrong");
}
//Car rental system

//Base class Vehicle
//subclasses like Car or Truck that would inherit from vehivle

//each vehicle can have its own different behaviours


//Base class

class Vehicle{
    constructor(make, model, year){
        //instance properties
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;

    }
    //instance methods
    isAvailable(){
        return !this.rented;
    }

    rent(){
        if(this.isAvailable()){
            this.rented = true;
            console.log(`${this.make} ${this.model} is now rented`);
        }else{
            console.log(`${this.make} ${this.model} is already rented`);

        }
    }

    returnVehicle(){
        if(this.rented){
            this.rented = false;
            console.log(`${this.make} ${this.model} is now returned`);

        }else{
            console.log(`${this.make} ${this.model} was not rented`);

        }
    }
}

class Car extends Vehicle{
    constructor(make, model, year, fuelType){
        super(make, model, year);
        this.fuelType = fuelType

    }

    displayFuelType(){
        console.log(`${this.make} ${this.model} runs on ${this.fuelType}`);

    }
}

class Truck extends Vehicle{
    constructor(make, model, year, loadCapacity){
        super(make, model, year);
        this.loadCapacity = loadCapacity;
    

    }

    displayLoadCapacity(){
        console.log(`${this.make} ${this.model} can carry ${this.loadCapacity} tons of load`);

    }

}


const myCar = new Car('Toyota', 'Innova', 2022, 'Petrol');
const myTruck = new Truck('Eicher', 'A-120', 2023, 5);

myCar.rent();
myCar.rent();

myCar.returnVehicle();

myTruck.rent();

myCar.displayFuelType();

myTruck.displayLoadCapacity();




//some more examples

//parking lot system, elevator system, library management system, online shopping movie ticket system, chat application

//requirements

//identitfy entities

//determine methods

//Solid priciples

//UML diagrams
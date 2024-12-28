/*Create a class Vehicle add a public method to the vehicle class,
 also add a private and protected method to the Vehicle class also 
 add a method named vehicleInfo() to the class , 
 Create a class named Car which inherits the Vehicle class create a public method in the car class and also override 
 the vehicleInfo() in the Car class. Call all the method of both the classes by just making the object
  of derived class Car.
 */
  class Vehicle {
    // Public method
    public start(): void {
        console.log("Vehicle started.");
    }

    // Private method
    private service(): void {
        console.log("Vehicle needs service.");
    }

    // Protected method
    protected fuel(): void {
        console.log("Vehicle needs fuel.");
    }

    // Public method for vehicle info
    public vehicleInfo(): void {
        console.log("This is a vehicle.");
    }

    // Public method to access the private method (for demonstration)
    public accessService(): void {
        this.service();
    }
}

class Car extends Vehicle {
    // Public method in Car class
    public drive(): void {
        console.log("Car is being driven.");
    }

    // Overriding vehicleInfo() method in Car class
    public override vehicleInfo(): void {
        console.log("This is a car.");
    }

    // Method to access protected method fuel()
    public accessFuel(): void {
        this.fuel();
    }
}

// Using the Car class
const car = new Car();

// Calling methods from Vehicle class through Car object
car.start();             // Public method from Vehicle
car.accessService();      // Accessing private method of Vehicle
car.accessFuel();         // Accessing protected method of Vehicle
car.vehicleInfo();        // Overridden method in Car

// Calling method from Car class
car.drive();              // Public method in Car

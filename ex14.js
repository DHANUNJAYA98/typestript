var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Create a class Vehicle add a public method to the vehicle class,
 also add a private and protected method to the Vehicle class also
 add a method named vehicleInfo() to the class ,
 Create a class named Car which inherits the Vehicle class create a public method in the car class and also override
 the vehicleInfo() in the Car class. Call all the method of both the classes by just making the object
  of derived class Car.
 */
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    // Public method
    Vehicle.prototype.start = function () {
        console.log("Vehicle started.");
    };
    // Private method
    Vehicle.prototype.service = function () {
        console.log("Vehicle needs service.");
    };
    // Protected method
    Vehicle.prototype.fuel = function () {
        console.log("Vehicle needs fuel.");
    };
    // Public method for vehicle info
    Vehicle.prototype.vehicleInfo = function () {
        console.log("This is a vehicle.");
    };
    // Public method to access the private method (for demonstration)
    Vehicle.prototype.accessService = function () {
        this.service();
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Public method in Car class
    Car.prototype.drive = function () {
        console.log("Car is being driven.");
    };
    // Overriding vehicleInfo() method in Car class
    Car.prototype.vehicleInfo = function () {
        console.log("This is a car.");
    };
    // Method to access protected method fuel()
    Car.prototype.accessFuel = function () {
        this.fuel();
    };
    return Car;
}(Vehicle));
// Using the Car class
var car = new Car();
// Calling methods from Vehicle class through Car object
car.start(); // Public method from Vehicle
car.accessService(); // Accessing private method of Vehicle
car.accessFuel(); // Accessing protected method of Vehicle
car.vehicleInfo(); // Overridden method in Car
// Calling method from Car class
car.drive(); // Public method in Car

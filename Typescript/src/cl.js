"use strict";
class Car {
    //constructor 
    constructor(engine) {
        this.engine = engine;
    }
    //function 
    disp() {
        console.log("Function displays Engine is  :   " + this.engine);
    }
}
//create an object 
var obj1 = new Car("XXSY1");
//access the field 
console.log("Reading attribute value Engine as :  " + obj1.engine);

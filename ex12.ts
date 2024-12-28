/*Create a Stud class,
 write a method that uses an arrow function to
  print this.name in a setTimeout.
 */
  class Stud {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printNameWithDelay() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

const student1= new Stud("james");
student1.printNameWithDelay(); 

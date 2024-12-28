
class Person {
    private name: string;
    protected age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): string {
      return `Good morning, Mr. ${this.name}`;
    }
  }
  

  class Student extends Person {
    studentId: number;
  
    constructor(name: string, age: number, studentId: number) {
      super(name, age);
      this.studentId = studentId;
    }
  
   
    getStudentInfo(): string {
      return `Student Name: [Private], Age: ${this.age}, ID: ${this.studentId}`;
    }
  }
  

  const person1 = new Person("dhanunjaya", 22);
  console.log(person1.greet()); 
  
  

  const student = new Student("dhanunjaya", 22, 10017);
  console.log(student.getStudentInfo()); 
  
  
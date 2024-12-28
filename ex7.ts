/*
class Person {
    name: string;
    age: number;
  
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
  
    greet(): string {
      return `Good morning, Mr. ${this.name}. Your student ID is ${this.studentId}.`;
    }
  }
  

  class GraduateStudent extends Student {
    degree: string;
  
    constructor(name: string, age: number, studentId: number, degree: string) {
      super(name, age, studentId);
      this.degree = degree;
    }
  
   
    greet(): string {
      return `${super.greet()} You have a degree in ${this.degree}.`;
    }
  }
  

  const person1 = new Person("dhanunjaya", 21);
  console.log(person1.greet()); 
  
  const student = new Student("dhanunjaya", 21, 10017);
  console.log(student.greet()); 
  const gradStudent = new GraduateStudent("dhanunjaya", 21, 10017, "Computer Science");
  console.log(gradStudent.greet());
  */
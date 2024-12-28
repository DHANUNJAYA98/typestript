/*Ex - 10
 
Define an interface PersonInfo with name and age properties,
 and have the Person class implement it.
Add an optional middleName property to PersonInfo.
 Update the Person class to include it optionally. */
 interface PersonInfo{
    name:string;
    age:number;
    middlename?:string;
 }
 class Person2 implements PersonInfo{
    name:string;
    age:number;
    middlename?:string;
    constructor(name:string,age:number,middlename?:string){
        this.name=name;
        this.age=age;
        if(middlename){
            this.middlename=middlename;
        }
    }
    getInfo():string{
        return this.middlename?`${this.name} ${this.middlename},Age:${this.age}`:`${this.name},Age:${this.age}`;
    }
 }
 const p3=new Person2("dhanunjaya",22);
 const p4=new Person2("treesa",22);
 console.log(p3.getInfo());
 console.log(p4.getInfo());
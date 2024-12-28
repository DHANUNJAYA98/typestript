/*Define an interface Shape with a getArea() method. 
Implement this in classes Rectangle and Circle.
Extend the Shape interface with getPerimeter().
 Update Rectangle and Circle to include it.
 */
interface Shape{
    getArea():number;
    getPerimeter():number;
}
class Rectangle implements Shape{
    l:number;
    b:number;
    constructor(l:number,b:number){
        this.l=l;
        this.b=b;
    }
    getArea():number{
       return this.l*this.b;
    }
    getPerimeter(): number {
        return 2*(this.l+this.b);
    }

}
class circle implements Shape{
    r:number;
    constructor(r:number){
        this.r=r;
    }
    getArea(): number {
        return Math.PI*this.r*this.r;
    }
    getPerimeter(): number {
        return 2*Math.PI*this.r;
    }
}
const r1=new Rectangle(10,20);
const p1=new circle(5);
console.log(r1.getArea());
console.log(r1.getPerimeter());
console.log(p1.getArea());
console.log(p1.getPerimeter());


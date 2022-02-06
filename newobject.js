// const person = new Object();

// person.name = 'Lee';
// person.sayHello = function(){
//     console.log('Hi, My name is ' + this.name);
// }

// console.log(person);
// person.sayHello();

// const circle1 = {
//     radius : 5,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }

// console.log(circle1.getDiameter());

// const circle2 = {
//     radius : 10,
//     getDiameter(){
//         return 2 * this.radius;
//     }
// }

// console.log(circle2.getDiameter());


// 객체 반복 줄이기

function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
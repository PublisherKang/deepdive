// function Circle(radius){
//     this.radius = radius;
//     this.getArea = function(){
//         return Math.PI * this.radius ** 2;
//     }
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);

// console.log(circle1.getArea());
// console.log(circle2.getArea());



//불필요한 생성자 함수 안의 함수 제거

function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea = function(){
    return Math.PI * this.radius ** 2;
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea);


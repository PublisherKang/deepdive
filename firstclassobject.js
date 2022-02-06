//함수는 무명 리터럴로 생성할수있다.
//함수는 변수에 저장할 수 있다.
// 런타임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function(num){
    return ++num;
}

const decrease = function(num){
    return --num;
}

//함수는 객체에 저장할 수 있다.

const predicates = { increase, decrease }

//함수의 매개 변수에 전달할 수 있다.
//함수의 반환 값으로 사용할 수 있다.

function makeCounter(predicate){
    let num = 0;

    return function(){
        num = predicate(num);
        return num;
    }
}

//함수는 매개변수에 함수를 전달할 수 있다.

const increaser = makeCounter(predicates.increase);

console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicates.decrease);

console.log(decreaser());
console.log(decreaser());
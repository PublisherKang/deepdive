function repeat(n){
    for(var i = 0; i < n; i++) console.log(i);
}
repeat(10);

console.log("-------");

//외부로 받은 f를 n만큼 반복
function repeat1(n, f){
    for(let i = 0; i < n; i++){
        f(i);
    }
}

// 사용할 변수에 함수 저장
var logAll = function(i){
    console.log(i);
}

//반복할 함수를 인수로 전달
repeat1(5, logAll);

console.log("=======");
// 사용할 변수에 함수 저장
var logOdds = function(i){
    //홀수 조건문 실행
    if(i % 2){
        console.log(i);
    }
}
// 10 까지 숫자중에 홀수만 호출
repeat1(10, logOdds);

//js

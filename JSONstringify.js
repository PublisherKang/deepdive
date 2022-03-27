const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

// 객체를 JSON 포맷의 문자열로 변환
const json = JSON.stringify(obj);

console.log(typeof json, json);
//string {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

// string {
//   "name": "Lee",
//   "age": 20,
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }

//replacer 함수, 값의 타입이 number이면 필터링되어 반환되지 않는다.
function filter(key, value) {
  //undefined : 반환하지 않음
  return typeof value === "number" ? undefined : value;
}
// JSON.stringify 메서드에 두번째 인수로 replacer 함수를 전달.

const strFilterObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilterObject, strFilterObject);
/*
string {
  "name": "Lee",
  "alive": true,
  "hobby": [
    "traveling",
    "tennis"
  ]
}
*/

//배열 JSON포멧
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "Javascript", completed: false },
];

console.log(typeof todos, todos);
/* 
object 
(3) [{…}, {…}, {…}]
0: {id: 1, content: 'HTML', completed: false}
1: {id: 2, content: 'CSS', completed: true}
2: {id: 3, content: 'Javascript', completed: false}
length: 3
[[Prototype]]: Array(0)
*/

//JSON.parse
// JSON.parse 메서드는 JSON포멧 문자열을 객체로 변환한다.
const obj = {
  name: "Lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};
// 객체를 JSON 포멧의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);
// '{"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}'

// JSON 포멧의 문자열을 객체로 변환
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
//object {name: 'Lee', age: 20, alive: true, hobby: Array(2)}

const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "Javascript", completed: false },
];

//배열을 JSON포멧 문자열로 변환
const json = JSON.stringify(todos);
console.log(typeof json, json);
//string [{"id":1,"content":"HTML","completed":false},{"id":2,"content":"CSS","completed":true},{"id":3,"content":"Javascript","completed":false}]

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);
/* 
object 
(3) [{…}, {…}, {…}]
0: {id: 1, content: 'HTML', completed: false}
1: {id: 2, content: 'CSS', completed: true}
2: {id: 3, content: 'Javascript', completed: false}
length: 3
[[Prototype]]: Array(0)
*/
